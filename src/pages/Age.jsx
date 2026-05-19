import { useState } from "react";
import BaseCard from "../components/BaseCard.jsx";
import { Ages } from "../data/ages.js";
import AgesCard from "../components/AgesCard.jsx";


function Age() {
    const [open, setOpen] = useState(null);
    return (

            <div className="w-full max-w-4xl m-auto border-4 border-[#5b4732] ring-4 ring-[#3a2a1a] ring-offset-4 ring-offset-[#BFB69C] p-4 ">
                <h2 className="text-[26px] mt-16">In questa guida trovi la storia di Tamriel</h2>
                {Ages.map((age) => (
                    <div className="" key={age.id}>
                    <button className="text-[24px] font-bold underline border-2 border-[#5b4732] ring-4 ring-[#3a2a1a] ring-offset-4 ring-offset-[#BFB69C] p-4 m-16 w-100 hover:scale-105 transition-transform" onClick={() => setOpen(open === age.id ? null : age.id)}>
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

    )
}

export default Age;