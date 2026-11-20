import { useEffect, useState } from "react";
import BaseCard from "../../components/BaseCard.jsx";
import Astrolabio from "../../components/Skill/Astrolabio";
import Pergamena from "../../components/Skill/Pergamena";
import CodiceAttributi from "../../components/Skill/CodiceAttributi";

const API_URL = "http://localhost/obl-forum-backend-provvisorio/get/getSkill.php";

function Skill() {
    const [selectedId, setSelectedId] = useState(null);
    const [skills, setSkills] = useState([]);
    const [levels, setLevels] = useState([]);

    useEffect(() => {
    fetch(`${API_URL}`)
    .then((response) => response.json())
    .then((data) => {
        setSkills(data.skills)
        setLevels(data.levels)
        setSelectedId(data.skills[0]?.id ?? null) // ?. evita l'errore se la lista arriva vuota
    })
    }, []);

    // la skill selezionata, cercata tra tutte con il suo id
    const selected = skills.find((skill) => skill.id === selectedId);

    return (
        // la stessa cornice delle altre pagine (titolo nella barra di legno)
        <BaseCard
            title="L'Astrolabio delle Abilità"
            subtitle="Le ventuno abilità di Cyrodiil, divise nelle tre vie"
        >
        <p className="mx-auto max-w-3xl text-left text-fluid-base text-oak-600">
            In Cyrodiil non si cresce uccidendo mostri, ma <em>facendo</em>: ogni colpo di spada, ogni
            serratura forzata, ogni incantesimo lanciato affina un'abilità. Ciascuna è governata da un
            attributo. Scegli una runa sull'astrolabio per leggerne la scheda.
        </p>

        {/* astrolabio e scheda: affiancati su schermi grandi, uno sotto l'altro sugli altri */}
        <section className="mt-6 grid gap-8 xl:grid-cols-[36rem_minmax(0,1fr)] xl:items-start xl:gap-10">
            <Astrolabio skills={skills} selectedId={selectedId} onSelect={setSelectedId}/>
            <div className="xl:sticky xl:top-6">
                <Pergamena skill={selected} levels={levels} />
            </div>
        </section>

        <CodiceAttributi skills={skills} />
        </BaseCard>
    )
}

export default Skill;
