import  { useState } from "react";
import BaseCard from "../../components/BaseCard.jsx";
import { DarkBrotherhood as Brotherhood } from "../../data/darkquest.js";
import Darkimage from "/public/images/DarkQuest.jpeg";

function DarkQuest() {
    const [openCard, setOpenCard] = useState(null);

    const handleToggle = (id) => setOpenCard((prev) => (prev === id ? null : id));

    return (
        <BaseCard
            title="La storia di Tamriel"
            subtitle="In questa guida trovi tutte le storie e le leggende di Tamriel"
        >
            <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 sm:gap-6">
                <img src={Darkimage}
                    alt="Dark Quest"
                    loading="lazy"
                    className="mx-auto mb-4 w-full max-w-[900px] rounded-sm"
                />
            {Brotherhood.map((dark) => {
                const isOpen = openCard === dark.id;
                return (
                    <div key={dark.id}>
                        <button type="button" 
                        onClick={() => handleToggle(dark.id)}
                        aria-expanded={isOpen}
                        className={`frame-thin tap w-full rounded-sm px-4 py-3 text-center font-display text-fluid-xl font-bold transition-colors duration-200 ${
                            isOpen
                                ? "bg-oak-500 text-parchment-100"
                                : "bg-parchment-300 text-oak-700 hover:bg-parchment-200"
                }`}
                        >
                            {dark.title}
                        </button>
                        
                        {isOpen && (
                            <div className="mt-4 rounded-md border-2 border-oak-600 bg-parchment-300 p-3 sm:mt-6 sm:p-4">
                                {dark.image && (
                                    <img
                                        src={dark.image}
                                        alt={dark.title}
                                        loading="lazy"
                                        className="mx-auto mb-4 w-full max-w-[500px] rounded-sm"
                                    />
                                )}
                                <p className="text-left text-fluid-base leading-relaxed whitespace-pre-line text-oak-600">
                                    {dark.text}
                                </p>
                            </div>
                        )}
                    </div>
                );
            })}
                </div>
            </BaseCard>

    );
}

export default DarkQuest;