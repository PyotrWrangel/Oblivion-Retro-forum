import  { useState, useEffect } from "react";
import BaseCard from "../../components/BaseCard.jsx";
import Darkimage from "/public/images/DarkQuest.jpeg";

function QuestSection({ title, children }) {
    return (
        <div className="mt-4 border-t border-oak-600 pt-3 text-left text-fluid-base leading-relaxed text-oak-600">
            <h3 className="mb-2 font-display text-fluid-lg font-bold text-oak-700">{title}</h3>
            {children}
        </div>
    );
}

function DarkQuest() {
    const [openCard, setOpenCard] = useState(null);
    const [data, setData] = useState([]);

    const handleToggle = (id) => setOpenCard((prev) => (prev === id ? null : id));

    useEffect(() => {
        fetch("http://localhost/obl-forum-backend-provvisorio/get.php?table=dark_brotherhood")
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);
    return (
        <BaseCard
            title="La Confraternita Oscura"
            subtitle="Benvenuto nella tua nuova famiglia, giovane assassino. Qui troverai le missioni che ti permetteranno di salire di grado e guadagnare la fiducia dei tuoi compagni."
        >
            <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 sm:gap-6">
                <img src={Darkimage}
                    alt="Dark Quest"
                    loading="lazy"
                    className="mx-auto mb-4 w-full max-w-[900px] rounded-sm"
                />
            {data.map((dark) => {
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

                                {dark.start && (
                                    <QuestSection title="Come si inizia">
                                        <p>{dark.start}</p>
                                    </QuestSection>
                                )}
                                {dark.location && (
                                    <QuestSection title="Dove andare">
                                        <p>{dark.location}</p>
                                    </QuestSection>
                                )}
                                {dark.steps && (
                                    <QuestSection title="Cosa fare">
                                        {/* nel db i passaggi sono separati da un a capo */}
                                        <ol className="list-decimal space-y-1 pl-5">
                                            {dark.steps.split("\n").map((step, index) => (
                                                <li key={index}>{step}</li>
                                            ))}
                                        </ol>
                                    </QuestSection>
                                )}
                                {dark.reward && (
                                    <QuestSection title="Ricompensa">
                                        <p>{dark.reward}</p>
                                    </QuestSection>
                                )}
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