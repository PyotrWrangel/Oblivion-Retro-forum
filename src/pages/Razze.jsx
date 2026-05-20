import BaseCard from "../components/BaseCard.jsx";
import { Races } from "../data/races.js";
import CharacterCard from "../components/CharacterCard.jsx";
import { useState } from "react";
import ItemModal from "../components/ItemModal.jsx";


function Razze() {
    const [selectedRace, setSelectedRace] = useState(null);
    return ( 
        <div>
            <h2>In questa guida trovi tutte le razze di tamriel</h2>
            <BaseCard title="Le Razze di Tamriel"
            subtitle="In questa guida trovi tutte le razze utilizzabili">
                <div className="grid grid-cols-3 gap-4">
            {Races.map((item) => (
                <CharacterCard
                key={item.id}
                image={item.image}
                name={item.name}
                description={item.description}
                onClick={() => setSelectedRace(item)}
                className="cursor-pointer"
                >
                    {item.name}
                </CharacterCard>
            ))}

            {/* Modal per visualizzare i dettagli della razza selezionata */}
            {selectedRace && (
                <ItemModal
                item={selectedRace}
                onClose={() => setSelectedRace(null)}
                />
            )}
            </div>
            </BaseCard>
        </div>
     );
}

export default Razze;
