import SafeImage from "./SafeImage";

/** Pannello di dettaglio affiancato all'elenco. */
function ItemSide({ sign }) {
  return (
    <div className="rounded-md p-4">
      {sign.image && (
        <SafeImage
          src={sign.image}
          alt={sign.name}
          loading="lazy"
          className="mx-auto mb-4 w-full max-w-md rounded-sm"
        />
      )}
      <h3 className="mb-2 font-display text-fluid-xl font-bold text-oak-700">
        {sign.name}
      </h3>
      <p className="text-left text-fluid-base text-oak-600">{sign.description}</p>
    </div>
  );
}

export default ItemSide;
