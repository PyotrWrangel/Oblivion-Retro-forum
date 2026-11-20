import { useId } from "react";

//specializzazioni

const COLORI = {
  Combattimento: "var(--color-combat)",
  Magia: "var(--color-magic)",
  Furtività: "var(--color-stealth)",
};

function colore(specializzazione) {
   return COLORI[specializzazione] ?? "var(--color-oak-500)";
}

function sigla(nome) {
  const parole = nome.split(" "); //divido il nome in parole e lo salvo
  if (parole.length === 1) return nome.slice(0, 3); //se la parola è 1 restituisco le prime 3 lettere
  return parole[0][0] + parole.at(-1).slice(0, 2); //se sono piu di una restituisco 1 lettera della prima e 2 dell'utlima
}

function raggruppa(skills) {
    const gruppi = [];
    skills.forEach((skill, i) => {
    const ultimo = gruppi.at(-1);
    if (ultimo && ultimo.nome === skill.specialization) {
        ultimo.quante++;
    } else {
        const nuovo = {nome: skill.specialization, inizio: i, quante: 1}
        gruppi.push(nuovo)
    }
    }) 
    return gruppi;

}

/* ============================================================
   GEOMETRIA DELLA RUOTA (in rem)
   ============================================================ */
const RAGGIO_RUNE = 8; //        raggio del cerchio su cui stanno le rune
const RAGGIO_FASCIA = 9.8; //    bordo esterno della fascia colorata
const RAGGIO_MEDAGLIONE = 4.4; // bordo del medaglione centrale

// Punto sul cerchio. L'angolo è in gradi, in senso orario partendo dall'alto.
// Serve a disegnare le linee divisorie nell'SVG.
function punto(raggio, angolo) {
  const rad = (angolo * Math.PI) / 180;
  return { x: raggio * Math.sin(rad), y: -raggio * Math.cos(rad) };
}

// 21 → "XXI" (per il medaglione centrale)
function numeroRomano(n) {
  const simboli = [[10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]];
  let risultato = "";
  for (const [valore, simbolo] of simboli) {
    while (n >= valore) {
      risultato += simbolo;
      n -= valore;
    }
  }
  return risultato;
}

/* ============================================================
   PIETRA — la runa rotonda con la sigla (usata da Ruota ed Elenco)
   ============================================================ */
function Pietra({ skill, selezionata, style }) {
  // (c) "selezionata" arriva già calcolata da chi usa la Pietra
  // (e) il colore NON si decide qui: usa la variabile --spec ereditata
  // "style" serve alla Ruota per tenere la sigla dritta (vedi sotto)
  return (
    <span
      style={style}
      className={`grid size-10 shrink-0 place-items-center rounded-full border-2 border-(--spec) font-display text-[0.62rem] font-bold tracking-[0.04em] uppercase transition-[background,color,box-shadow,scale] duration-200 ${
        selezionata
          ? "scale-[1.14] bg-(--spec) text-parchment-50 shadow-[0_0_0_3px_var(--color-parchment-50),0_0_0_5px_var(--spec),0_0_16px_var(--spec)]"
          : "bg-[radial-gradient(circle_at_35%_30%,var(--color-parchment-50),var(--color-parchment-300))] text-(--spec) group-hover:scale-[1.08]"
      }`}
    >
      {sigla(skill.nome)}
    </span>
  );
}

/* ============================================================
   ELENCO — versione mobile, divisa per specializzazione
   ============================================================ */
function Elenco({ skills, gruppi, selectedId, onSelect }) {
  // (d) visibile solo su schermi piccoli: md:hidden
  return (
    <div className="flex flex-col gap-7 md:hidden">
      {gruppi.map((gruppo) => (
        // (e) --spec impostata qui: titolo, pietre e nomi del gruppo la ereditano
        <section key={gruppo.nome} style={{ "--spec": colore(gruppo.nome) }}>
          {/* titolo con la riga che si allunga a destra (after:) */}
          <h2 className="mb-1.5 flex items-center gap-3 font-display text-[0.85rem] tracking-[0.25em] text-(--spec) uppercase after:flex-1 after:border-t after:border-current after:opacity-50 after:content-['']">
            {gruppo.nome}
          </h2>

          <ul>
            {/* le skill di questo gruppo: da "inizio" per "quante" posizioni */}
            {skills.slice(gruppo.inizio, gruppo.inizio + gruppo.quante).map((skill) => {
              const selezionata = skill.id === selectedId; // (c)
              return (
                <li key={skill.id}>
                  {/* (b) un bottone che avvisa la pagina */}
                  <button
                    type="button"
                    onClick={() => onSelect(skill.id)}
                    aria-pressed={selezionata}
                    className={`group tap flex min-h-12 w-full items-center gap-3.5 border-b border-dashed border-oak-400/60 px-2 py-2 text-left ${
                      selezionata ? "bg-linear-to-r from-(--spec)/15 to-transparent to-80%" : ""
                    }`}
                  >
                    <Pietra skill={skill} selezionata={selezionata} />
                    <span
                      className={`flex-1 font-display ${
                        selezionata ? "font-bold text-(--spec)" : "font-semibold text-oak-700 group-hover:text-(--spec)"
                      }`}
                    >
                      {skill.nome}
                    </span>
                    <span className="text-fluid-sm text-oak-400 italic">{skill.attribute}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}

/* ============================================================
   RUOTA — versione desktop, le rune disposte in cerchio
   ============================================================ */
function Ruota({ skills, gruppi, selectedId, onSelect }) {
  const idSvg = useId(); // id unici per i <path> dell'SVG (vedi testo in curva)
  const passo = 360 / skills.length; // gradi tra una runa e l'altra (21 skill → ~17°)

  // Fascia a settori: un tratto di colore per ogni gruppo.
  // Ogni gruppo va da inizio*passo a (inizio+quante)*passo gradi.
  const settori = gruppi
    .map((gruppo) => {
      const da = gruppo.inizio * passo;
      const a = (gruppo.inizio + gruppo.quante) * passo;
      return `color-mix(in srgb, ${colore(gruppo.nome)} 14%, transparent) ${da}deg ${a}deg`;
    })
    .join(", ");

  // Le maschere "bucano" il centro dei cerchi, lasciando visibile solo un anello
  const mascheraFascia = `radial-gradient(circle closest-side, transparent ${RAGGIO_MEDAGLIONE}rem, #000 calc(${RAGGIO_MEDAGLIONE}rem + 1px))`;
  const mascheraTacche = "radial-gradient(circle closest-side, transparent calc(100% - 0.45rem), #000 calc(100% - 0.45rem + 1px))";

  return (
    // (d) visibile solo da md in su
    <div className="relative mx-auto hidden aspect-square w-[36rem] md:block">
      {/* ---------- DECORAZIONI ---------- */}

      {/* fascia colorata a settori (parte da -passo/2 per centrare i settori sulle rune) */}
      <div
        aria-hidden="true"
        className="absolute rounded-full border border-oak-500"
        style={{
          inset: `calc(50% - ${RAGGIO_FASCIA}rem)`,
          background: `conic-gradient(from ${-passo / 2}deg, ${settori})`,
          maskImage: mascheraFascia,
          WebkitMaskImage: mascheraFascia,
        }}
      />

      {/* tacche dei gradi sul bordo */}
      <div
        aria-hidden="true"
        className="absolute rounded-full opacity-70"
        style={{
          inset: `calc(50% - ${RAGGIO_FASCIA}rem)`,
          background: "repeating-conic-gradient(var(--color-oak-500) 0 0.6deg, transparent 0.6deg 5deg)",
          maskImage: mascheraTacche,
          WebkitMaskImage: mascheraTacche,
        }}
      />

      {/* orbita tratteggiata su cui poggiano le rune */}
      <div
        aria-hidden="true"
        className="absolute rounded-full border border-dashed border-oak-400"
        style={{ inset: `calc(50% - ${RAGGIO_RUNE}rem)` }}
      />

      {/* linee divisorie e nomi delle specializzazioni in curva.
          viewBox -180..180: l'SVG è largo 36rem, quindi 1rem = 10 unità */}
      <svg aria-hidden="true" viewBox="-180 -180 360 360" className="pointer-events-none absolute inset-0 size-full overflow-visible">
        <defs>
          {/* due cerchi su cui "scorre" il testo:
              orario per la metà alta, antiorario per la metà bassa (così il testo non è capovolto) */}
          <path id={`${idSvg}-orario`} d="M 0,-53 A 53 53 0 1 1 0,53 A 53 53 0 1 1 0,-53" />
          <path id={`${idSvg}-antiorario`} d="M 0,-61 A 61 61 0 1 0 0,61 A 61 61 0 1 0 0,-61" />
        </defs>

        {gruppi.map((gruppo) => {
          // una linea al confine d'inizio di ogni gruppo
          const confine = gruppo.inizio * passo - passo / 2;
          const a = punto(RAGGIO_MEDAGLIONE * 10, confine);
          const b = punto(RAGGIO_FASCIA * 10, confine);
          return <line key={`linea-${gruppo.nome}`} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="var(--color-oak-500)" strokeWidth="1" />;
        })}

        {gruppi.map((gruppo) => {
          // il nome va al centro del settore
          const centro = (gruppo.inizio + (gruppo.quante - 1) / 2) * passo;
          const inBasso = centro > 90 && centro < 270;
          return (
            <text key={`nome-${gruppo.nome}`} fill={colore(gruppo.nome)} className="font-display text-[7px] font-bold tracking-[2px] uppercase">
              <textPath
                href={`#${idSvg}-${inBasso ? "antiorario" : "orario"}`}
                startOffset={`${((inBasso ? 360 - centro : centro) / 360) * 100}%`}
                textAnchor="middle"
              >
                {gruppo.nome}
              </textPath>
            </text>
          );
        })}
      </svg>

      {/* medaglione centrale, con la doppia cornice del sito */}
      <div
        aria-hidden="true"
        className="absolute grid place-content-center rounded-full border-2 border-oak-600 bg-[radial-gradient(circle_at_40%_30%,var(--color-parchment-50),var(--color-parchment-400))] text-center shadow-[0_0_0_3px_var(--color-parchment-400),0_0_0_5px_var(--color-oak-800),0_12px_24px_-12px_rgba(33,26,18,0.7)]"
        style={{ inset: "calc(50% - 4.1rem)" }}
      >
        <span className="text-[0.9rem] leading-none text-gold-500">✦</span>
        <span className="font-display text-[1.9rem] leading-tight font-black text-oak-800">{numeroRomano(skills.length)}</span>
        <span className="font-display text-[0.6rem] tracking-[0.3em] text-oak-500 uppercase">Abilità</span>
      </div>

      {/* ---------- LE RUNE ----------
          Ogni <li> è un "raggio" di dimensione zero piazzato al centro e ruotato.
          Dentro, il bottone è spostato verso destra di RAGGIO_RUNE: ruotando il raggio,
          il bottone finisce sul cerchio. */}
      <ul>
        {skills.map((skill, i) => {
          const angolo = i * passo;
          const ribalta = angolo > 180; // metà sinistra: il nome sarebbe a testa in giù
          const selezionata = skill.id === selectedId; // (c)

          return (
            <li
              key={skill.id}
              className="absolute top-1/2 left-1/2 size-0"
              style={{
                transform: `rotate(${angolo - 90}deg)`, // -90: l'angolo 0 è in alto, non a destra
                "--spec": colore(skill.specialization), // (e)
              }}
            >
              {/* (b) */}
              <button
                type="button"
                onClick={() => onSelect(skill.id)}
                aria-pressed={selezionata}
                className="group tap absolute top-0 flex -translate-y-1/2 items-center gap-3 whitespace-nowrap"
                style={{ left: `${RAGGIO_RUNE - 1.25}rem` }} // 1.25rem = metà pietra: la centra sull'orbita
              >
                {/* contro-rotazione: annulla la rotazione del raggio, la sigla resta dritta */}
                <Pietra skill={skill} selezionata={selezionata} style={{ rotate: `${90 - angolo}deg` }} />
                <span
                  style={ribalta ? { rotate: "180deg" } : undefined}
                  className={`font-display text-[0.68rem] font-bold tracking-[0.06em] uppercase transition-colors ${
                    selezionata ? "text-(--spec)" : "text-oak-600 group-hover:text-(--spec)"
                  }`}
                >
                  {skill.nome}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/* ============================================================
   ASTROLABIO — il componente esportato
   ============================================================ */
function Astrolabio({ skills, selectedId, onSelect }) {
  // (f) dati non ancora arrivati: non disegno niente
  if (!skills || skills.length === 0) return null;

  // i gruppi si calcolano UNA volta, qui, e vanno a entrambe le versioni
  const gruppi = raggruppa(skills);

  // (d) entrambe le versioni: Tailwind ne nasconde una in base allo schermo
  return (
    <nav aria-label="Le abilità">
      <Ruota skills={skills} gruppi={gruppi} selectedId={selectedId} onSelect={onSelect} />
      <Elenco skills={skills} gruppi={gruppi} selectedId={selectedId} onSelect={onSelect} />
    </nav>
  );
}

export default Astrolabio;
