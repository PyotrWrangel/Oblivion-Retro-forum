import Card from "../components/Card";
import SideCard from "../components/SideCard";
import { sidebarinfo } from "../data/sidebarinfo";
import { useState, useEffect } from "react";

function Homepage() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost/obl-forum-backend-provvisorio/get.php?table=datiCard")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const news = [...data].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="page-x w-full py-2 sm:py-4">
      <div className="mx-auto grid w-full max-w-content gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start lg:gap-10">
        {/* Notizie */}
        <div className="flex flex-col gap-8 sm:gap-12">
          {news.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              text={item.text}
              image={item.image}
              logo={item.logo}
              date={item.date}
              imagePosition={item.imagePosition}
            />
          ))}
        </div>

        {/* Barra laterale: sotto le notizie su mobile, a fianco su desktop */}
        <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap lg:flex-col lg:flex-nowrap">
          {sidebarinfo.map((item) => (
            <div key={item.id} className="flex-1 sm:min-w-[16rem] lg:flex-none">
              <SideCard
                title={item.title}
                img={item.img}
                imgtitle={item.imgTitle}
                description={item.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
