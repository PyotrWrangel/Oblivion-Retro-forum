import BaseCard from "../components/BaseCard.jsx";
import AddTable from "../components/AddTable.jsx";
import { useState } from "react";

// Script del backend provvisorio che popolano le tabelle.
// `script: null` = importer non ancora scritto (il pulsante resta disabilitato).
const importers = [
  { tabella: "datiCard", label: "Card della Homepage", script: "insert.php" },
  { tabella: "ages", label: "Le Ere di Tamriel", script: "importerAges.php" },
  { tabella: "daedric", label: "I Principi Daedra", script: "importerDaedric.php" },
  { tabella: "lore", label: "Storia Principale", script: "importerLore.php" },
  { tabella: "dark_brotherhood", label: "Fratellanza Oscura", script: "importerdarkBrotherhood.php" },
  { tabella: "races", label: "Le Razze", script: null },
  { tabella: "classes", label: "Le Classi", script: "importerClasses.php" },
  { tabella: "regions", label: "Le Regioni", script: "importerRegions.php" },
  { tabella: "signs", label: "I Segni Zodiacali", script: null },
  { tabella: "books", label: "I Libri", script: "importerBooks.php" },
  { tabella: "misc_quest", label: "Le Quest Secondarie", script: "importerMiscellaneousQuest.php" },
  { tabella: "sanctuary_quest", label: "Le Quest del Santuario", script: "importerSanctuaryQuest.php" },
  { tabella: "mages_guild", label: "Le Quest dei Maghi", script: "importerMagesQuest.php" },
  { tabella: "thieves_guild", label: "Le Quest dei Ladri", script: "importerThievesQuest.php" },
  { tabella: "fighters_guild", label: "Le Quest dei Guerrieri", script: "importerFightersQuest.php" },
  // ordine obbligato dalle foreign key: attribute e level prima di skills, skills prima di bonus
  { tabella: "attribute", label: "Gli Attributi", script: "importerAttribute.php" },
  { tabella: "level", label: "I Livelli", script: "importerLevel.php" },
  { tabella: "skills", label: "Le Abilità", script: "importerSkills.php" },
  { tabella: "bonus", label: "I Bonus", script: "importerBonus.php" },
];



function Admin() { 

  const [mex, setMex] = useState("");

  const handleClick = async() => {
    try {
         await fetch("http://localhost/obl-forum-backend-provvisorio/tables.php");
      setMex("Tabelle aggiornate con successo")
    } catch (err) {
      setMex("Errore: " + err.message)
    }
  }

  return (
    <BaseCard
      title="Popola il Database"
      subtitle="Pagina di servizio: lancia gli importer del backend provvisorio senza aprirli a mano"
    >
      <div className="mb-4 flex items-center justify-center gap-4 sm:mb-6">
        <button type="click" onClick={handleClick} className="frame-thin tap rounded-sm bg-oak-500 px-4 py-3 text-center font-display text-fluid-xl font-bold text-parchment-100 transition-colors duration-200 hover:bg-oak-600">
          Aggiorna tabelle
        </button>
        {mex && (
          <p className="ml-4 text-fluid-base text-oak-600">{mex}</p>
        )}
      </div>
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 sm:gap-6">
        <p className="text-center text-fluid-sm text-oak-600">
          Ogni import inserisce le righe nuove e aggiorna quelle già esistenti:
          puoi premere lo stesso pulsante più volte senza creare duplicati.
        </p>

        {importers.map((importer) => (
          <AddTable
            key={importer.tabella}
            tabella={importer.tabella}
            label={importer.label}
            script={importer.script}
          />


        ))}
      </div>
    </BaseCard>
  );
}

export default Admin;
