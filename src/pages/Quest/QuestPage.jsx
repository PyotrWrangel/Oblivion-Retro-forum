import {useState, useEffect} from 'react';
import BaseCard from '../../components/BaseCard.jsx';
import QuestSection from '../../components/QuestSection.jsx';

const API_URL = "http://localhost/obl-forum-backend-provvisorio/get.php";

function QuestPage({ title, subtitle, table }) {

    const [openCard, setOpenCard] = useState(null);
    const [data, setData] = useState([]);

    const handleToggle = (id) => setOpenCard((prev) => (prev === id ? null : id));

    useEffect(() => {
        fetch(`${API_URL}?table=${table}`)
        .then((response) => response.json())
        .then((data) => setData(data));
    }, [table]);

    return (
        <BaseCard title ={title} subtitle={subtitle}>
            <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 sm:gap-6">
                {data.map((quest) => {
                    const isOpen = openCard === quest.id;
                    return (
                        <div key={quest.id}>
                            <button type="button"
                            onClick={() => handleToggle(quest.id)}
                            aria-expanded={isOpen}
                            className={`frame-thin tap w-full rounded-sm px-4 py-3 text-center font-display text-fluid-xl font-bold transition-colors duration-200 ${
                                isOpen
                                    ? "bg-oak-500 text-parchment-100"
                                    : "bg-parchment-300 text-oak-700 hover:bg-parchment-200"
                            }`}
                            >
                                {quest.title}
                            </button>
                            
                            {isOpen && (
                                <div className="mt-4 rounded-md border-2 border-oak-600 bg-parchment-300 p-3 sm:mt-6 sm:p-4">
                                    {quest.image && (
                                        <img
                                            src={quest.image}
                                            alt={quest.title}
                                            loading="lazy"
                                            className="mx-auto mb-4 w-full max-w-[500px] rounded-sm"
                                        />
                                    )}
                                    <p className="text-fluid-base leading-relaxed whitespace-pre-line text-oak-600">{quest.text}</p>

                                    {quest.start && (
                                        <QuestSection title="Come si inizia">
                                            <p className="text-fluid-base leading-relaxed text-oak-600">{quest.start}</p>
                                        </QuestSection>
                                    )}
                                    {quest.location && (
                                        <QuestSection title="Dove si trova">
                                            <p className="text-fluid-base leading-relaxed text-oak-600">{quest.location}</p>
                                        </QuestSection>
                                    )}
                                    {quest.steps && (
                                            <QuestSection title="Cosa fare">
                                        <ol className="list-decimal space-y-1 pl-5">
                                            {quest.steps.split("\n").map((step, index) => (
                                                <li key={index}>{step}</li>
                                            ))}
                                        </ol>
                                    </QuestSection>
                                    )}
                                    {quest.reward && (
                                        <QuestSection title="Ricompensa">
                                            <p className="text-fluid-base leading-relaxed text-oak-600">{quest.reward}</p>
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

export default QuestPage;