import { useState } from "react";
import CharacterCard from "../components/CharacterCard";
import { Classes } from "../data/Classes.js";
import BaseCard from "../components/BaseCard.jsx";
import ItemModal from "../components/ItemModal.jsx";

function Class() {
    const [selectedClass, setSelectedClass] = useState(null);
    return (
        <div>
            <h2>In questa guida trovi tutte le classi utilizzabili</h2>
            <BaseCard title="Le Classi di Tamriel">
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
            </BaseCard>
        </div>
    );
}

export default Class;