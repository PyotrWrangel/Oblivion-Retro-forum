import Card from "../components/Card";
import SideCard from "../components/SideCard";
import { datiCard } from "../data/datiCard";
import { sidebarinfo } from "../data/sidebarinfo";


function Homepage() {

    const nuoviDati = [...datiCard];
    nuoviDati.sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
    <>
<div className="flex gap-12 w-full max-w-6xl m-auto">
    <div>
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
    </div>
      <div className="mt-5">
    {sidebarinfo.map((item) => (
        <SideCard
            key={item.id}
            title={item.title}
            img={item.img}
            imgtitle={item.imgTitle}
            description={item.description}
        />
    ))}
        </div>
</div>
    </>
    )
}

export default Homepage;