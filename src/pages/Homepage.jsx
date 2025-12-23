import Card from "../components/Card";
import { datiCard } from "../data/datiCard";

function Homepage() {

    const nuoviDati = [...datiCard];
    nuoviDati.sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
    <>

    {nuoviDati.map((news) => (
        <Card
        key={news.id}
        title={news.title}
        text={news.text}
        image={news.image}
        logo={news.logo}
        date={news.date}
        imagePosition={news.imagePosition}
        ></Card>
    ))}
    </>
    )
}

export default Homepage;