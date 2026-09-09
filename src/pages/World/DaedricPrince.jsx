import { useState } from "react";
import BaseCard from "../../components/BaseCard.jsx";
import CharacterCard from "../../components/CharacterCard.jsx";
import ItemModal from "../../components/ItemModal.jsx";
import { Daedric } from "../../data/daedric.js";

function DaedricPrince() {
  const [selectedPrince, setSelectedPrince] = useState(null);

  return (
    <BaseCard
      title="I Principi Daedrici"
      subtitle="In questa guida trovi tutti i Principi Daedrici, ognuno dei quali ha il suo piano dell'Oblivion"
    >
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-4">
        {Daedric.map((daedric) => (
          <CharacterCard
            key={daedric.id}
            image={daedric.image}
            name={daedric.name}
            description={daedric.description}
            onClick={() => setSelectedPrince(daedric)}
          />
        ))}
      </div>

      {selectedPrince && (
        <ItemModal item={selectedPrince} onClose={() => setSelectedPrince(null)} />
      )}
    </BaseCard>
  );
}

export default DaedricPrince;
