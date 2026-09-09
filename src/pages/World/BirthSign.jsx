import { useState } from "react";
import { Signs } from "../../data/signs.js";
import BaseCard from "../../components/BaseCard.jsx";
import ItemSide from "../../components/ItemSide.jsx";
import ItemList from "../../components/ItemList.jsx";
import SafeImage from "../../components/SafeImage.jsx";

function BirthSign() {
  const [selectedId, setSelectedId] = useState(Signs[0]?.id ?? null);
  const [openId, setOpenId] = useState(null);

  const selected = Signs.find((s) => s.id === selectedId) ?? Signs[0];

  return (
    <BaseCard
      title="I segni zodiacali di Tamriel"
      subtitle="In questa guida trovi tutti i segni zodiacali di Tamriel"
    >
      {/* --- Mobile / tablet: elenco a fisarmonica --- */}
      <ul className="flex flex-col gap-2 lg:hidden">
        {Signs.map((sign) => {
          const isOpen = openId === sign.id;
          return (
            <li
              key={sign.id}
              className="overflow-hidden rounded-sm border-2 border-oak-600 bg-parchment-300"
            >
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : sign.id)}
                aria-expanded={isOpen}
                className="tap flex w-full items-center justify-between gap-3 px-3 py-3 text-left font-display text-fluid-lg font-bold text-oak-700"
              >
                {sign.name}
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
                  {sign.image && (
                    <SafeImage
                      src={sign.image}
                      alt={sign.name}
                      loading="lazy"
                      className="mx-auto mb-3 w-full max-w-xs rounded-sm"
                    />
                  )}
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
          {Signs.map((sign) => (
            <ItemList
              key={sign.id}
              sign={sign}
              active={selected?.id === sign.id}
              onSelect={() => setSelectedId(sign.id)}
            />
          ))}
        </div>

        {selected && (
          <div className="self-start lg:sticky lg:top-4">
            <ItemSide sign={selected} />
          </div>
        )}
      </div>
    </BaseCard>
  );
}

export default BirthSign;
