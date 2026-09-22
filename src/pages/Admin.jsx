import BaseCard from "../components/BaseCard.jsx";
import AddTable from "../components/AddTable.jsx";

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
  { tabella: "books", label: "I Libri", script: "importerBooks.php" }
];

function Admin() { 
  return (
    <BaseCard
      title="Popola il Database"
      subtitle="Pagina di servizio: lancia gli importer del backend provvisorio senza aprirli a mano"
    >
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 sm:gap-6">
        <p className="text-center text-fluid-sm text-oak-600">
          Attenzione: ogni import fa solo INSERT, quindi premere due volte lo
          stesso pulsante duplica le righe nella tabella.
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
