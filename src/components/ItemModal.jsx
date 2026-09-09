import { useEffect } from "react";
import SafeImage from "./SafeImage";

/** Finestra di dettaglio. Si chiude con Esc, col bottone o cliccando fuori. */
function ItemModal({ item, onClose, imgSize = "" }) {
  useEffect(() => {
    const onKeyDown = (e) => e.key === "Escape" && onClose?.();
    document.addEventListener("keydown", onKeyDown);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previous;
    };
  }, [onClose]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.name}
      onClick={onClose}
      className="fixed inset-0 z-100 flex items-end justify-center bg-oak-900/70 p-0 backdrop-blur-[2px] sm:items-center sm:p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[92dvh] w-full max-w-2xl flex-col overflow-hidden rounded-t-xl border-3 border-oak-800 bg-parchment-100 sm:max-h-[88dvh] sm:rounded-md"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Chiudi"
          className="tap absolute top-2 right-2 z-10 grid h-10 w-10 place-items-center rounded-full border-2 border-oak-800 bg-parchment-200 text-fluid-lg leading-none font-bold text-oak-700 transition-colors hover:bg-oak-500 hover:text-parchment-100"
        >
          ×
        </button>

        <div className="overflow-y-auto overscroll-contain p-4 sm:p-6">
          {item.image && (
            <SafeImage
              src={item.image}
              alt={item.name}
              className={`mx-auto mb-4 rounded-sm ${
                imgSize === "small"
                  ? "h-[100px] w-[100px] object-cover"
                  : "w-full max-w-md"
              }`}
            />
          )}

          <h3 className="mb-3 pr-10 text-center font-display text-fluid-xl font-bold text-oak-700">
            {item.name}
          </h3>

          <p className="text-left text-fluid-base whitespace-pre-line text-oak-600">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
