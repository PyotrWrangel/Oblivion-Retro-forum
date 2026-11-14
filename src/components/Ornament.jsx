/**
 * Separatore decorativo: doppia riga — ✦ — doppia riga.
 * Usa `className` per adattare i margini dove serve (es. "mt-6").
 */
function Ornament({ className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`mx-auto mt-[0.9rem] flex max-w-[22rem] items-center justify-center gap-3 text-gold-500 ${className}`}
    >
      <span className="h-0 flex-1 border-y border-oak-400 pt-[2px]" />
      <span className="text-[0.9rem]">✦</span>
      <span className="h-0 flex-1 border-y border-oak-400 pt-[2px]" />
    </div>
  );
}

export default Ornament;
