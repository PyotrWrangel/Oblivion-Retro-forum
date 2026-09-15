import SafeImage from "./SafeImage";

/** Scheda cliccabile usata per razze, classi, regioni e principi daedrici. */
function CharacterCard({ image, name, description, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="tap group flex h-full w-full flex-col overflow-hidden rounded-md border-2 border-oak-600 bg-parchment-300 text-left shadow-[0_10px_20px_-14px_rgba(33,26,18,0.9)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_16px_28px_-14px_rgba(33,26,18,0.9)] focus-visible:-translate-y-1"
    >
      <SafeImage
        src={image}
        alt={name}
        loading="lazy"
        className="aspect-square w-full object-fill object-top transition-transform duration-300 group-hover:scale-105"
      />

      <div className="flex flex-1 flex-col gap-2 p-3">
        <h3 className="text-center font-display text-fluid-lg font-bold text-oak-700 underline decoration-oak-400 underline-offset-4">
          {name}
        </h3>
        <p className="line-clamp-5 text-center text-fluid-sm text-oak-600">
          {description}
        </p>
      </div>
    </button>
  );
}

export default CharacterCard;
