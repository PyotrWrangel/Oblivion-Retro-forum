import Ornament from "./Ornament";

/*
 * Codice degli Attributi: indice "da libro antico" con i puntini di guida.
 * Per ogni attributo elenca le skill che governa, ricavandole dalle stesse
 * skill che usa l'astrolabio (nessuna chiamata in più al backend).
 */

// Ordine classico degli attributi di Oblivion. La Fortuna non governa nessuna skill.
const ATTRIBUTI = ["Forza", "Intelligenza", "Volontà", "Agilità", "Velocità", "Resistenza", "Personalità"];
const NUMERI = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];

const COLORI = {
  Combattimento: "var(--color-combat)",
  Magia: "var(--color-magic)",
  Furtività: "var(--color-stealth)",
};

/* Una riga dell'indice: numero, nome, puntini, contenuto */
function Riga({ numero, nome, children }) {
  return (
    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 border-b border-dashed border-oak-400/60 py-2 sm:border-0">
      <dt className="font-display text-fluid-lg font-bold text-oak-800">
        <span className="inline-block w-[2.6rem] text-[0.75rem] tracking-[0.05em] text-gold-500">{numero}</span>
        {nome}
      </dt>
      {/* i puntini di guida: occupano lo spazio rimasto (nascosti su schermi stretti) */}
      <span aria-hidden="true" className="hidden min-w-8 flex-1 -translate-y-[0.3em] border-b-2 border-dotted border-oak-400 sm:block" />
      <dd className="m-0 flex w-full flex-wrap gap-x-4 gap-y-0.5 pl-[2.6rem] text-fluid-sm sm:w-auto sm:pl-0 sm:text-fluid-base">
        {children}
      </dd>
    </div>
  );
}

function CodiceAttributi({ skills }) {
  if (!skills || skills.length === 0) return null;

  return (
    // dentro la cornice della pagina: separato da una riga, come le sezioni delle quest
    <section aria-labelledby="codice-titolo" className="mt-8 border-t border-oak-600 pt-6 text-center sm:mt-10">
      <h2 id="codice-titolo" className="text-fluid-xl font-bold tracking-[0.04em]">
        Codice degli Attributi
      </h2>
      <Ornament />
      <p className="mx-auto mt-4 max-w-[36rem] text-oak-500 italic">
        Ogni attributo governa tre abilità. Più le alleni durante un livello, più alto sarà il
        moltiplicatore offerto per quell'attributo al momento di riposare.
      </p>

      <dl className="mx-auto mt-6 max-w-[50rem] text-left">
        {ATTRIBUTI.map((attributo, i) => (
          <Riga key={attributo} numero={NUMERI[i]} nome={attributo}>
            {skills
              .filter((skill) => skill.attribute === attributo)
              .map((skill) => (
                <span
                  key={skill.id}
                  className="whitespace-nowrap before:mr-1.5 before:inline-block before:size-[0.45rem] before:-translate-y-[0.1em] before:rotate-45 before:bg-(--spec) before:content-['']"
                  style={{ "--spec": COLORI[skill.specialization] ?? "var(--color-oak-500)" }}
                >
                  {skill.nome}
                </span>
              ))}
          </Riga>
        ))}

        <Riga numero={NUMERI[7]} nome="Fortuna">
          <em className="text-oak-400">nessuna &mdash; e tutte quante</em>
        </Riga>
      </dl>

      {/* legenda dei colori */}
      <ul className="mt-8 flex flex-wrap justify-center gap-x-7 gap-y-2 font-display text-[0.75rem] tracking-[0.15em] uppercase">
        {Object.entries(COLORI).map(([nome, colore]) => (
          <li
            key={nome}
            className="text-(--spec) before:mr-2 before:inline-block before:size-[0.55rem] before:rotate-45 before:bg-(--spec) before:content-['']"
            style={{ "--spec": colore }}
          >
            {nome}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CodiceAttributi;
