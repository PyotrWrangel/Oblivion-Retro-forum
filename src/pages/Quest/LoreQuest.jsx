import { useState } from "react";
import BaseCard from "../../components/BaseCard.jsx";
import SafeImage from "../../components/SafeImage.jsx";
import Lore from "../../data/lore.js";

function LoreQuest() {
  const [openCard, setOpenCard] = useState(null);

  const handleToggle = (id) => setOpenCard((prev) => (prev === id ? null : id)); 

  return (
    <BaseCard
      title="La storia di Tamriel"
      subtitle="In questa guida trovi tutte le storie e le leggende di Tamriel"
    >
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 sm:gap-6">
        {Lore.map((lore) => {
          const isOpen = openCard === lore.id;
          return (
            <div key={lore.id}>
              <button
                type="button"
                onClick={() => handleToggle(lore.id)}
                aria-expanded={isOpen}
                className={`frame-thin tap w-full rounded-sm px-4 py-3 text-center font-display text-fluid-xl font-bold transition-colors duration-200 ${
                  isOpen
                    ? "bg-oak-500 text-parchment-100"
                    : "bg-parchment-300 text-oak-700 hover:bg-parchment-200"
                }`}
              >
                {lore.title}
              </button>

              {isOpen && (
                <div className="mt-4 rounded-md border-2 border-oak-600 bg-parchment-300 p-3 sm:mt-6 sm:p-4">
                  {lore.image && (
                    <SafeImage
                      src={lore.image}
                      alt={lore.title}
                      loading="lazy"
                      className="mx-auto mb-4 w-full max-w-[500px] rounded-sm"
                    />
                  )}
                  <p className="text-left text-fluid-base leading-relaxed whitespace-pre-line text-oak-600">
                    {lore.text}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </BaseCard>
  );
}

export default LoreQuest;
