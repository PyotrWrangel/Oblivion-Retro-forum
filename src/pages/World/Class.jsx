import { useState } from "react";
import BaseCard from "../../components/BaseCard.jsx";
import CharacterCard from "../../components/CharacterCard.jsx";
import ItemModal from "../../components/ItemModal.jsx";
import { Classes } from "../../data/Classes.js";

function Class() {
  const [selectedClass, setSelectedClass] = useState(null);

  return (
    <BaseCard
      title="Le Classi di Tamriel"
      subtitle="In questa guida trovi tutte le classi utilizzabili"
    >
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-4">
        {Classes.map((item) => (
          <CharacterCard
            key={item.id}
            image={item.image}
            name={item.name}
            description={item.description}
            onClick={() => setSelectedClass(item)}
          />
        ))}
      </div>

      {selectedClass && (
        <ItemModal item={selectedClass} onClose={() => setSelectedClass(null)} />
      )}
    </BaseCard>
  );
}

export default Class;
