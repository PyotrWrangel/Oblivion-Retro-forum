import { useState } from "react";
import { Signs } from "../data/signs.js";

import CharacterCard from "../components/CharacterCard";
import ItemModal from "../components/ItemModal";
import BaseCard from "../components/BaseCard";
import ItemSide from "../components/ItemSide";
import ItemList from "../components/ItemList";

function BirthSign() {
    const [hoveredSign, setHoveredSign] = useState(null);
    
    return (
        <BaseCard title="I segni zodiacali di Tamriel"
        subtitle="In questa guida trovi tutti i segni zodiacali di Tamriel">
            <div className="text-left flex ">
                <div className="w-[480px] flex flex-col gap-4 ">
                {Signs.map((sign) => (
                    <ItemList
                    key={sign.id}
                    sign={sign}
                    onMouseEnter={() => {
                        console.log("Hovering over " + sign.name);
                        setHoveredSign(sign)}}
                    >
                        {sign.name}
                    </ItemList>
                   
                ))}
                          </div> 

                {/*componente accanto */}
                {hoveredSign?.name && (
                    <ItemSide
                    sign={hoveredSign} />

                )}
      </div>
        </BaseCard>

    )
}

export default BirthSign;