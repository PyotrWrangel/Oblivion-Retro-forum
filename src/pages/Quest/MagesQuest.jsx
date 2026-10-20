import {useState, useEffect} from "react";
import BaseCard from "../../components/BaseCard.jsx";

function QuestSection({ title, children }) {
    return (
        <div className="mt-4 border-t border-oak-600 pt-3 text-left text-fluid-base leading-relaxed text-oak-600">
            <h3 className="mb-2 font-display text-fluid-lg font-bold text-oak-700">{title}</h3>
            {children}
        </div>
    );
}

function MagesQuest() {
    const [openCard, setOpenCard] = useState(null);
    const [data, setData] = useState([]);

    const handleToggle = (id) => setOpenCard((prev) => (prev === id ? null : id));  

    useEffect(() => {
        fetch("http://localhost/obl-forum-backend-provvisorio/get.php?table=mages_guild")
        .then((response) => response.json())
        .then((data) => setData(data));
    }, []);
    
    return (
        <BaseCard
            title="La Gilda dei Maghi"
            subtitle="Benvenuto nella Gilda dei Maghi, giovane apprendista. Qui troverai le missioni che ti permetteranno di affinare le tue abilità magiche e non dare al tuo dremora evocato un corpo di donna."
        >
            <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 sm:gap-6">
                {data.map((mage) => {
                    const isOpen = openCard === mage.id;
                    return (
                        <div key={mage.id}>
                            <button type="button"
                            onClick={() => handleToggle(mage.id)}
                            aria-expanded={isOpen}
                            className={`frame-thin tap w-full rounded-sm px-4 py-3 text-center font-display text-fluid-xl font-bold transition-colors duration-200 ${
                                isOpen
                                    ? "bg-oak-500 text-parchment-100"
                                    : "bg-parchment-300 text-oak-700 hover:bg-parchment-200"
                            }`}
                            >
                                {mage.title}
                            </button>
                            
                            {isOpen && (
                                <div className="mt-4 rounded-md border-2 border-oak-600 bg-parchment-300 p-3 sm:mt-6 sm:p-4">
                                    {mage.image && (
                                        <img
                                            src={mage.image}
                                            alt={mage.title}
                                            loading="lazy"
                                            className="mx-auto mb-4 w-full max-w-[500px] rounded-sm"
                                        />
                                    )}
                                    <p className="text-fluid-base leading-relaxed text-oak-600">{mage.text}</p>

                                    {mage.start && (
                                        <QuestSection title="Come si inizia">
                                            <p className="text-fluid-base leading-relaxed text-oak-600">{mage.start}</p>
                                        </QuestSection>
                                    )}
                                    {mage.location && (
                                        <QuestSection title="Dove si trova">
                                            <p className="text-fluid-base leading-relaxed text-oak-600">{mage.location}</p>
                                        </QuestSection>
                                    )}
                                    {mage.steps && (
                                            <QuestSection title="Cosa fare">
                                        <ol className="list-decimal space-y-1 pl-5">
                                            {mage.steps.split("\n").map((step, index) => (
                                                <li key={index}>{step}</li>
                                            ))}
                                        </ol>
                                    </QuestSection>
                                    )}
                                    {mage.reward && (
                                        <QuestSection title="Ricompensa">
                                            <p className="text-fluid-base leading-relaxed text-oak-600">{mage.reward}</p>
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

export default MagesQuest;