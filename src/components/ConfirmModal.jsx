import { useEffect } from "react";

/** Finestra di conferma. Si chiude con Esc, con Annulla o cliccando fuori. */
function ConfirmModal({ messaggio, onConfirm, onCancel }) {
  useEffect(() => {
    const onKeyDown = (e) => e.key === "Escape" && onCancel?.();
    document.addEventListener("keydown", onKeyDown);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previous;
    };
  }, [onCancel]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Conferma"
      onClick={onCancel}
      className="fixed inset-0 z-100 flex items-end justify-center bg-oak-900/70 p-0 backdrop-blur-[2px] sm:items-center sm:p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg rounded-t-xl border-3 border-oak-800 bg-parchment-100 p-4 sm:rounded-md sm:p-6"
      >
        <p className="text-center font-display text-fluid-xl font-bold text-oak-700">
          {messaggio}
        </p>

        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={onConfirm}
            className="frame-thin tap rounded-sm bg-oak-500 px-4 py-3 font-display text-fluid-lg font-bold text-parchment-100 transition-colors duration-200 hover:bg-oak-600"
          >
            Procedi
          </button>

          <button
            type="button"
            onClick={onCancel}
            className="frame-thin tap rounded-sm bg-parchment-300 px-4 py-3 font-display text-fluid-lg font-bold text-oak-700 transition-colors duration-200 hover:bg-parchment-200"
          >
            Annulla
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
