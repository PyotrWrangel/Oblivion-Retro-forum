/**
 * Contenitore principale delle pagine-guida.
 * Larghezza fluida: piena su mobile, limitata a --container-content su desktop.
 */
function BaseCard({ title, subtitle, children }) {
  return (
    <section className="page-x w-full py-2 sm:py-4">
      <div className="frame-ornate mx-auto w-full max-w-content bg-parchment-400 p-2 sm:p-4">
        {title && (
          <div className="title-bar px-3 py-2 sm:px-4 sm:py-3">
            <h1 className="text-center font-display text-fluid-2xl font-bold tracking-wide text-parchment-100">
              {title}
            </h1>
          </div>
        )}

        {subtitle && (
          <p className="mx-auto mt-4 max-w-3xl text-center font-display text-fluid-lg font-bold text-oak-600 sm:mt-6">
            {subtitle}
          </p>
        )}

        <div className="mt-4 sm:mt-6">{children}</div>
      </div>
    </section>
  );
}

export default BaseCard;
