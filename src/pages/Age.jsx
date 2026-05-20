import { useState } from "react";
import BaseCard from "../components/BaseCard.jsx";
import { Ages } from "../data/ages.js";
import AgesCard from "../components/AgesCard.jsx";


function Age() {
    const [open, setOpen] = useState(null);
    return (

            <BaseCard title="Le Ere di Tamriel" subtitle="In questa guida trovi tutte le ere di Tamriel">
                <div className="flex flex-col">
                {Ages.map((age) => (
                    <div className="m-8" key={age.id}>
                    <button className="text-[24px] font-bold underline border-2 border-[#5b4732] ring-4 ring-[#3a2a1a] ring-offset-4 ring-offset-[#BFB69C] p-4  w-100 hover:scale-105 transition-transform" onClick={() => setOpen(open === age.id ? null : age.id)}>
                        {age.name}
                    </button>
                    {open === age.id && (
                        <AgesCard
                            image={age.image}
                            name={age.name}
                            description={age.description}/>
                    )}
                    </div>
                ))}
                </div>
            </BaseCard>

    )
}

export default Age;