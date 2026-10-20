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

function FightersQuest() {
    const [openCard, setOpenCard] = useState(null);
    const [data, setData] = useState([]);

    const handleToggle = (id) => setOpenCard((prev) => (prev === id ? null : id));  

    useEffect(() => {
        fetch("http://localhost/obl-forum-backend-provvisorio/get.php?table=fighters_guild")
        .then((response) => response.json())
        .then((data) => setData(data));
    }, []);
    
    return (
        <BaseCard
            title="La Gilda dei Guerrieri"
            subtitle="Benvenuto nella Gilda dei Guerrieri, giovane recluta. Qui troverai le missioni che ti permetteranno di affinare le tue abilità combattive, umiliare la Compagnia Blackwood e scoprire che i ratti di Anvil non sono per niente un lavoretto facile."
        >
            <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 sm:gap-6">
                {data.map((fighter) => {
                    const isOpen = openCard === fighter.id;
                    return (
                        <div key={fighter.id}>
                            <button type="button"
                            onClick={() => handleToggle(fighter.id)}
                            aria-expanded={isOpen}
                            className={`frame-thin tap w-full rounded-sm px-4 py-3 text-center font-display text-fluid-xl font-bold transition-colors duration-200 ${
                                isOpen
                                    ? "bg-oak-500 text-parchment-100"
                                    : "bg-parchment-300 text-oak-700 hover:bg-parchment-200"
                            }`}
                            >
                                {fighter.title}
                            </button>
                            
                            {isOpen && (
                                <div className="mt-4 rounded-md border-2 border-oak-600 bg-parchment-300 p-3 sm:mt-6 sm:p-4">
                                    {fighter.image && (
                                        <img
                                            src={fighter.image}
                                            alt={fighter.title}
                                            loading="lazy"
                                            className="mx-auto mb-4 w-full max-w-[500px] rounded-sm"
                                        />
                                    )}
                                    <p className="text-fluid-base leading-relaxed text-oak-600">{fighter.text}</p>

                                    {fighter.start && (
                                        <QuestSection title="Come si inizia">
                                            <p className="text-fluid-base leading-relaxed text-oak-600">{fighter.start}</p>
                                        </QuestSection>
                                    )}
                                    {fighter.location && (
                                        <QuestSection title="Dove si trova">
                                            <p className="text-fluid-base leading-relaxed text-oak-600">{fighter.location}</p>
                                        </QuestSection>
                                    )}
                                    {fighter.steps && (
                                            <QuestSection title="Cosa fare">
                                        <ol className="list-decimal space-y-1 pl-5">
                                            {fighter.steps.split("\n").map((step, index) => (
                                                <li key={index}>{step}</li>
                                            ))}
                                        </ol>
                                    </QuestSection>
                                    )}
                                    {fighter.reward && (
                                        <QuestSection title="Ricompensa">
                                            <p className="text-fluid-base leading-relaxed text-oak-600">{fighter.reward}</p>
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

export default FightersQuest;