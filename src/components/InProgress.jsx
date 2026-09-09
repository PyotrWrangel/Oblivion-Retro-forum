import { Link } from "react-router-dom";

function InProgress() {
  return (
    <div className="page-x flex min-h-[50dvh] w-full items-center justify-center py-10">
      <div className="frame-ornate w-full max-w-xl bg-parchment-400 p-6 text-center sm:p-10">
        <h1 className="font-display text-fluid-2xl font-bold text-oak-700">
          Pagina in costruzione
        </h1>
        <p className="mx-auto mt-4 max-w-md text-fluid-base text-oak-600">
          Stiamo lavorando per portarti nuovi contenuti. Resta sintonizzato!
        </p>
        <Link
          to="/"
          className="tap mt-6 inline-block rounded-sm border-2 border-oak-800 bg-oak-500 px-5 py-2.5 font-display text-fluid-base font-bold text-parchment-100 transition-colors hover:bg-oak-700"
        >
          Torna alla home
        </Link>
      </div>
    </div>
  );
}

export default InProgress;
