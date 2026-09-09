/** Voce dell'elenco (colonna sinistra della vista segni zodiacali). */
function ItemList({ sign, active = false, onSelect }) {
  return (
    <button
      type="button"
      onMouseEnter={onSelect}
      onFocus={onSelect}
      onClick={onSelect}
      aria-current={active || undefined}
      className={`tap w-full rounded-sm border-l-4 px-3 py-2.5 text-left font-display text-fluid-lg font-bold transition-colors duration-150 ${
        active
          ? "border-blood-600 bg-oak-500 text-parchment-100"
          : "border-transparent text-oak-700 hover:bg-oak-500 hover:text-parchment-100"
      }`}
    >
      {sign.name}
    </button>
  );
}

export default ItemList;
