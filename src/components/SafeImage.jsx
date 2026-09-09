import { useState } from "react";

/**
 * <img> che, se la risorsa non esiste, degrada in un riquadro a tema
 * invece di mostrare l'icona di immagine rotta del browser.
 */
function SafeImage({ src, alt = "", className = "", ...rest }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`grid place-items-center border border-dashed border-oak-400/60 bg-oak-500/10 ${className}`}
      >
        <span className="px-2 py-6 text-center font-display text-fluid-sm text-oak-500/70">
          {alt || "Immagine non disponibile"}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className={className}
      {...rest}
    />
  );
}

export default SafeImage;
