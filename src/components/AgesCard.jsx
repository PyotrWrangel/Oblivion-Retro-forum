import SafeImage from "./SafeImage";

/** Pannello espandibile di una Era di Tamriel. */
function AgesCard({ image, name, description, onClick }) {
  return (
    <div
      className="mx-auto mt-4 w-full rounded-md border-2 border-oak-600 bg-parchment-300 p-3 sm:mt-6 sm:p-4"
      onClick={onClick}
    >
      {image && (
        <SafeImage
          src={image}
          alt={name}
          loading="lazy"
          className="mx-auto mb-4 w-full max-w-[380px] rounded-sm object-cover"
        />
      )}

      <h3 className="mb-3 text-center font-display text-fluid-lg font-bold text-blood-600 underline underline-offset-4">
        {name}
      </h3>

      <p className="text-left text-fluid-base whitespace-pre-line text-oak-600">
        {description}
      </p>
    </div>
  );
}

export default AgesCard;
