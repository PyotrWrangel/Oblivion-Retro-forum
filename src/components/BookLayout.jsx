import { useState } from "react";
import { paginate } from "../data/paginate";

function BookLayout({ text }) {
    
  const [selectPage, setSelectPage] = useState(0);
  const pages = paginate (text, 150);

  const nextPage = () => {
    selectPage < pages.length - 1 ? setSelectPage(selectPage + 1) : "";
  };
  const previousPage = () => {
    selectPage > 0 ? setSelectPage(selectPage - 1) : "";
  };

  return (
    <>
      <div>{pages[selectPage]}
        <div className="flex">

      <button
        type="button"
        onClick={previousPage}
        className="tap flex w-full items-center justify-between gap-3 px-3 py-3 text-left font-display text-fluid-lg font-bold text-oak-700"
      >
        {" "}
        Indietro
      </button>
            <button
        type="button"
        onClick={nextPage}
        className="tap flex w-full items-center justify-between gap-3 px-3 py-3 text-left font-display text-fluid-lg font-bold text-oak-700"
      >
        {" "}
        Avanti
      </button>
      </div>
      </div>
    </>
  );
}
export default BookLayout;
