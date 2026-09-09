import { useState, useEffect } from "react";
import BaseCard from "../../components/BaseCard.jsx";
import CharacterCard from "../../components/CharacterCard.jsx";
import ItemModal from "../../components/ItemModal.jsx";

function Razze() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost/obl-forum-backend-provvisorio/getRaces.php")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const [selectedRace, setSelectedRace] = useState(null);

  return (
    <BaseCard
      title="Le Razze di Tamriel"
      subtitle="In questa guida trovi tutte le razze utilizzabili"
    >
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-4">
        {data.map((item) => (
          <CharacterCard
            key={item.id}
            image={item.image}
            name={item.name}
            description={item.description}
            onClick={() => setSelectedRace(item)}
          />
        ))}
      </div>

      {selectedRace && (
        <ItemModal item={selectedRace} onClose={() => setSelectedRace(null)} />
      )}
    </BaseCard>
  );
}

export default Razze;
