import { useState } from "react";

import BaseCard from "../components/BaseCard.jsx";
import { Regions } from "../data/regions.js";
import CharacterCard from "../components/CharacterCard.jsx";
import ItemModal from "../components/ItemModal.jsx";

function Region() {
    const [selectedRegion, setSelectedRegion] = useState(null);
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <BaseCard title="Le Regioni di Tamriel"
            subtitle="In questa guida trovi tutte le regioni esplorabili">
                <div className="grid grid-cols-3 gap-4">
                    {Regions.map((region) => (
                        <CharacterCard
                        key={region.id}
                        image={region.image}
                        name={region.name}
                        description={region.description}
                        onClick={() => setSelectedRegion(region)}
                        >
                            {region.name}
                        </CharacterCard>
                    ))}

                    {/*Modal */}
                    {selectedRegion && (
                        <ItemModal
                        item={selectedRegion}
                        onClose={() => setSelectedRegion(null)} /*riporta a null per chiudere la finestra */
                        />
                    )}
                    </div>
            </BaseCard>
        </div>
    );
}

export default Region;