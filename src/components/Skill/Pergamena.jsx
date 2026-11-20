/*
 * La scheda della skill selezionata (ex "pergamena").
 * Stile del sito: cornice frame-thin + barra del titolo in legno (title-bar),
 * come le schede delle altre pagine.
 *
 * Riceve:
 * - skill:  la skill selezionata (con i suoi bonus)
 * - levels: tutti i livelli (Novizio → Maestro), per la tabella dei gradi
 *
 * Come l'Astrolabio, non ha stato: mostra quello che riceve.
 */

const COLORI = {
  Combattimento: "var(--color-combat)",
  Magia: "var(--color-magic)",
  Furtività: "var(--color-stealth)",
};

// Testo del grado quando la skill non ha un bonus a quel livello
function testoSenzaBonus(skill, level) {
  // le scuole di magia non hanno bonus: a ogni grado sblocchi gli incantesimi di quel grado
  if (skill.specialization === "Magia" && skill.bonus.length === 0) {
    return `Puoi lanciare gli incantesimi di grado ${level.nome}.`;
  }
  return "Nessun bonus a questo grado.";
}

function Pergamena({ skill, levels }) {
  if (!skill) return null;

  return (
    <div
      className="frame-thin w-full overflow-hidden bg-parchment-200"
      style={{ "--spec": COLORI[skill.specialization] ?? "var(--color-oak-500)" }}
    >
      {/* key={skill.id}: cambiando skill, React ricrea il contenuto e l'animazione riparte */}
      <article key={skill.id} aria-live="polite" className="animate-unfurl">
        {/* barra del titolo in legno, come nel resto del sito */}
        <header className="title-bar flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 px-3 py-2 sm:px-4">
          <h2 className="font-display text-fluid-xl font-bold tracking-wide text-parchment-100">{skill.nome}</h2>
          <span className="font-display text-[0.7rem] tracking-[0.18em] text-parchment-200 uppercase">
            {skill.specialization}
          </span>
        </header>

        <div className="p-3 sm:p-4">
          {/* attributo, con il rombo del colore della specializzazione */}
          <p className="text-fluid-sm text-oak-500 italic before:mr-2 before:inline-block before:size-2 before:-translate-y-[0.1em] before:rotate-45 before:bg-(--spec) before:content-['']">
            Governata da <b className="text-oak-700 not-italic">{skill.attribute}</b>
          </p>

          <p className="mt-2 text-left text-fluid-base text-oak-600">{skill.description}</p>

          {/* gradi di maestria: stessa intestazione delle sezioni delle quest */}
          <h3 className="mt-4 border-t border-oak-600 pt-3 font-display text-fluid-lg font-bold text-oak-700">
            Gradi di maestria
          </h3>

          <dl className="mt-1">
            {levels.map((level, i) => {
              const bonus = skill.bonus.find((b) => b.level === level.nome);
              const maestro = i === levels.length - 1;
              const intervallo = level.min === level.max ? level.min : `${level.min}–${level.max}`;

              return (
                <div
                  key={level.id}
                  className="grid gap-x-4 border-b border-dashed border-oak-400/60 py-2 last:border-b-0 sm:grid-cols-[12rem_1fr]"
                >
                  <dt className="whitespace-nowrap font-display text-[0.85rem] font-bold tracking-[0.06em] text-oak-700 uppercase">
                    {maestro && <span className="mr-1 text-gold-500">✦</span>}
                    {level.nome}
                    <small className="ml-2 font-body text-[0.8rem] font-normal tracking-normal text-oak-400 normal-case">
                      {intervallo}
                    </small>
                  </dt>
                  <dd className={`m-0 text-fluid-sm ${bonus ? "text-oak-600" : "text-oak-400 italic"}`}>
                    {bonus ? bonus.descrizione : testoSenzaBonus(skill, level)}
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </article>
    </div>
  );
}

export default Pergamena;
