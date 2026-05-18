import BaseCard from "../components/BaseCard.jsx";
import { Races } from "../data/races.js";
import RacesCard from "../components/RacesCard.jsx";
import { useState } from "react";
import RaceModal from "../components/RaceModal.jsx";


function Razze() {
    const [selectedRace, setSelectedRace] = useState(null);
    return ( 
        <div>
            <h2>In questa guida trovi tutte le razze di tamriel</h2>
            <BaseCard title="Le Razze di Tamriel">
            {Races.map((race) => (
                <RacesCard
                key={race.id}
                image={race.image}
                name={race.name}
                description={race.description}
                onClick={() => setSelectedRace(race)}
                className="cursor-pointer"
                >
                    {race.name}
                </RacesCard>
            ))}

            {/* Modal per visualizzare i dettagli della razza selezionata */}
            {selectedRace && (
                <RaceModal
                race={selectedRace}
                onClose={() => setSelectedRace(null)}
                />
            )}
            </BaseCard>
        </div>
     );
}

export default Razze;
