import { useState } from "react";
import CharacterCard from "../components/CharacterCard";
import { Classes } from "../data/Classes.js";
import BaseCard from "../components/BaseCard.jsx";
import ItemModal from "../components/ItemModal.jsx";

function Class() {
    const [selectedClass, setSelectedClass] = useState(null);
    return (
        <div>
            <BaseCard 
            title="Le Classi di Tamriel" 
            subtitle="In questa guida trovi tutte le classi utilizzabili">
              <div className="grid grid-cols-3 gap-4">
            {Classes.map((item) => (
                <CharacterCard
                key={item.id}
                image={item.image}
                name={item.name}
                description={item.description}
                onClick={() => setSelectedClass(item)}
                className="cursor-pointer"
                >
                {item.name}
                </CharacterCard>   
            ))}
            {selectedClass && (
                <ItemModal
                item={selectedClass}
                onClose={() => setSelectedClass(null)}
                />
            )}
            </div>
            </BaseCard>
        </div>
    );
}

export default Class;