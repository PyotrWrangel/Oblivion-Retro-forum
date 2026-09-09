import { useState } from "react";
import BaseCard from "../../components/BaseCard.jsx";
import CharacterCard from "../../components/CharacterCard.jsx";
import ItemModal from "../../components/ItemModal.jsx";
import { Regions } from "../../data/regions.js";

function Region() {
  const [selectedRegion, setSelectedRegion] = useState(null);

  return (
    <BaseCard
      title="Le Regioni di Tamriel"
      subtitle="In questa guida trovi tutte le regioni esplorabili"
    >
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-4">
        {Regions.map((region) => (
          <CharacterCard
            key={region.id}
            image={region.image}
            name={region.name}
            description={region.description}
            onClick={() => setSelectedRegion(region)}
          />
        ))}
      </div>

      {selectedRegion && (
        <ItemModal item={selectedRegion} onClose={() => setSelectedRegion(null)} />
      )}
    </BaseCard>
  );
}

export default Region;
