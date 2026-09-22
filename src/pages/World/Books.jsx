import { useState, useEffect } from "react";
import BaseCard from "../../components/BaseCard";
import ItemSide from "../../components/ItemSide";
import ItemList from "../../components/ItemList";
import BookLayout from "../../components/BookLayout";

function Books() {
    const [data, setData] = useState([]);
    const [selectedSlug, setSelectedSlug] = useState(null);
    const [openId, setOpenId] = useState(null);
    const selected = data.find((s) =>s.slug === selectedSlug) ?? data[0];

    useEffect(() => {
    fetch("http://localhost/obl-forum-backend-provvisorio/get.php?table=books")
    .then((response) => response.json())
    .then((data) => setData(data.map((b) => ({ ...b, name: b.title, description: b.contentFile}))));

    }, []);   // creo dei nuovi oggetti ...b e la proprietà name avra dentro title


   return (
    <BaseCard
      title="I Libri di Tamriel"
      subtitle="In questa guida trovi tutti i libri di Tamriel">
        
      {/* --- Mobile / tablet: elenco a fisarmonica --- */}
      <ul className="flex flex-col gap-2 lg:hidden">
        {data.map((sign) => {
          const isOpen = openId === sign.slug;
          return (
            <li
              key={sign.slug}
              className="overflow-hidden rounded-sm border-2 border-oak-600 bg-parchment-300"
            >
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : sign.slug)}
                aria-expanded={isOpen}
                className="tap flex w-full items-center justify-between gap-3 px-3 py-3 text-left font-display text-fluid-lg font-bold text-oak-700"
              >
                {sign.title}
                <span
                  aria-hidden="true"
                  className={`text-oak-500 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  ▾
                </span>
              </button>

              {isOpen && (
                <div className="border-t-2 border-oak-600 bg-parchment-100 p-3">

                  <p className="text-left text-fluid-base text-oak-600">
                    {sign.description}
                  </p>
                </div>
              )}
            </li>
          );
        })}
      </ul>

      {/* --- Desktop: elenco + anteprima affiancata --- */}
      <div className="hidden gap-6 lg:grid lg:grid-cols-[minmax(14rem,20rem)_1fr]">
        <div className="flex flex-col gap-1">
          {data.map((sign) => (
            <ItemList
              key={sign.slug}
              sign={sign}
              active={selected?.slug === sign.slug}
              onSelect={(e) => e.type === "click" && setSelectedSlug(sign.slug)}
              //onselect va solo se type è click non piu mouseenter o focus
            />
          ))}
        </div>

        {selected && (
          <div className="self-start lg:sticky lg:top-4">
            
           <BookLayout key={selected.slug} text={selected.description}></BookLayout>
          </div>
        )}
       
      </div>
      
    </BaseCard>
  );
}

export default Books;
