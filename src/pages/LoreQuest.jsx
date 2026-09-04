import Card from "../components/Card";
import { useState } from "react";
import Lore from "../data/lore.js";
import BaseCard from "../components/BaseCard";

function LoreQuest () {

    const [openCard, setOpenCard] = useState(null);

    const handleToggle = (key ) => {
        setOpenCard(prev => (prev === key ? null : key));
    };


        console.log("card utilizzata:", openCard);

    return (

        <div className="flex flex-col items-center justify-center min-h-screen">
            <BaseCard title="La storia di Tamriel"
            subtitle="In questa guida trovi tutte le storie e le leggende di Tamriel">
                {Lore.map((lore) => (
                    <Card
                    key={lore.id}
                    title={lore.title}
                    onClick={() => handleToggle(lore.key)}
                    style={{ border : '1px solid #ccc', marginBottom: '10px', cursor: 'pointer' }}>
                    
                    {openCard === lore.key && (
                        <div className="p-4">
                            <p>{lore.text}</p>
                        </div>
                    )}
                    </Card>
                ))}
            </BaseCard>

            </div>
    )


}

export default LoreQuest;  