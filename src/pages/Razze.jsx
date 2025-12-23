import BaseCard from "../components/BaseCard.jsx";
import { Races } from "../data/races.js";
import RacesCard from "../components/RacesCard.jsx";

function Razze() {
    return ( 
        <div>
            <h2>In questa guida trovi tutte le razze di tamriel</h2>
            <BaseCard title="Le Razze di Tamriel">
            {Races.map((race) => (
                <RacesCard
                key={race.id}
                image={race.image}
                name={race.name}
                description={race.description}
                ></RacesCard>
            ))}
            </BaseCard>
        </div>
     );
}

export default Razze;
