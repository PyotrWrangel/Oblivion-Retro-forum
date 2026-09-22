import { useState, useEffect } from "react";
import BaseCard from "../../components/BaseCard.jsx";
import CharacterCard from "../../components/CharacterCard.jsx";
import ItemModal from "../../components/ItemModal.jsx";

function Region() {
  const [data, setData] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState(null);

  useEffect(() => {
    fetch("http://localhost/obl-forum-backend-provvisorio/get.php?table=regions")
    .then((response) => response.json())
    .then((data) => setData(data));
  }, []);

  

  return (
    <BaseCard
      title="Le Regioni di Tamriel"
      subtitle="In questa guida trovi tutte le regioni esplorabili"
    >
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-4">
        {data.map((item) => (
          <CharacterCard
            key={item.id}
            image={item.image}
            name={item.name}
            description={item.description}
            onClick={() => setSelectedRegion(item)}
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
