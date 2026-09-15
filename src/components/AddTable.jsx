import { useState } from "react";
import { BACKEND_URL } from "../api.js";
import ConfirmModal from "./ConfirmModal.jsx";

/**
 * Pulsante che lancia lo script PHP di import per una singola tabella,
 * al posto di eseguirlo a mano dal browser.
 */
function AddTable({ tabella, label, script }) {
  // idle | caricamento | ok | errore
  const [stato, setStato] = useState("idle");
  const [messaggio, setMessaggio] = useState("");
  const [confermaAperta, setConfermaAperta] = useState(false);

  const disponibile = Boolean(script);

  // gli importer fanno solo INSERT: chiedo conferma per evitare doppioni
  async function popola() {
    setConfermaAperta(false);
    setStato("caricamento");
    setMessaggio("");

    try {
      const risposta = await fetch(`${BACKEND_URL}/${script}`);
      // gli importer rispondono in testo semplice, non in JSON
      const testo = (await risposta.text()).trim();

      if (!risposta.ok) {
        throw new Error(`Il server ha risposto ${risposta.status}`);
      }

      setStato("ok");
      setMessaggio(testo || "Import eseguito.");
    } catch (errore) {
      setStato("errore");
      setMessaggio(errore.message);
    }
  }

  return (
    <div className="frame-thin rounded-sm bg-parchment-300 p-3 sm:p-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="font-display text-fluid-xl font-bold text-oak-700">{label}</p>
          <p className="text-fluid-sm text-oak-600">
            tabella <code>{tabella}</code>
            {disponibile ? ` — ${script}` : " — importer non ancora disponibile"}
          </p>
        </div>

        <button
          type="button"
          onClick={() => setConfermaAperta(true)}
          disabled={!disponibile || stato === "caricamento"}
          className="frame-thin tap rounded-sm bg-oak-500 px-4 py-3 text-center font-display text-fluid-lg font-bold text-parchment-100 transition-colors duration-200 hover:bg-oak-600 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {stato === "caricamento" ? "Popolamento…" : "Popola la tabella"}
        </button>
      </div>

      {messaggio && (
        <p
          role="status"
          className={`mt-3 max-h-40 overflow-y-auto rounded-sm px-3 py-2 text-fluid-sm whitespace-pre-line ${
            stato === "errore"
              ? "bg-parchment-100 text-red-800"
              : "bg-parchment-100 text-oak-700"
          }`}
        >
          {messaggio}
        </p>
      )}

      {confermaAperta && (
        <ConfirmModal
          messaggio="Stai per popolare la tabella, sei sicuro di voler procedere?"
          onConfirm={popola}
          onCancel={() => setConfermaAperta(false)}
        />
      )}
    </div>
  );
}

export default AddTable;
