import {useState, useEffect} from "react";
import BaseCard from "../../components/BaseCard.jsx";

function QuestSection({ title }) {
    return (
        <div className="mt-4 text-left text-fluid-base leading-relaxed text-oak-600">
                {title}
        </div>
    );
}

function SanctuaryQuest() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost/obl-forum-backend-provvisorio/get.php?table=sanctuary")
            .then(response => response.json())
            .then(data => setData(data))
    }, []);

    return (
        <BaseCard
            title="Santuari Daedrici"
            subtitle="Da Azura a Meridia, i santuari Daedrici sono luoghi di potere e mistero. Esplora questi templi e scopri le missioni che ti attendono."
        >
            <div className="mx-auto flex w-full">
                {data.map((sanctuary) => {
                    return (
                        <div key={sanctuary.id}>
                            <button 
                                type="button"
                                
                        </div>
                }
                    }
                </div>
    )