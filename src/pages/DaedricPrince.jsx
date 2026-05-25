import { useState } from "react";

import BaseCard from "../components/BaseCard";
import CharacterCard from "../components/CharacterCard";
import { Daedric } from "../data/daedric.js";
import ItemModal from "../components/ItemModal.jsx";


function DaedricPrince() {
    const [selectedPrince, setSelectedPrince] = useState(null);
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <BaseCard title="I Principi Daedrici"
            subtitle="In questa guida trovi tutti i Principi Daedrici, ognuno delle quali ha il suo piano dell'Oblivion">
                <div className="grid grid-cols-3 gap-4">
                    {Daedric.map((daedric) => (
                        <CharacterCard
                        key={daedric.id}
                        name={daedric.name}
                        image={daedric.image}
                        description={daedric.description}
                        onclick={() => setSelectedPrince(daedric)}
                        >
                            {daedric.name}
                        </CharacterCard>
                    ))}

                    {selectedPrince && (
                        <ItemModal
                        item={selectedPrince}
                        onClose={() => setSelectedPrince(null)}
                        />
                    )}
            </div>
            </BaseCard>
            </div>
    );
}

export default DaedricPrince;