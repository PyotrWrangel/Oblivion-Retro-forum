import { useState, useEffect } from "react";
import BaseCard from "../../components/BaseCard.jsx";
import AgesCard from "../../components/AgesCard.jsx";

function Age() {
  const [open, setOpen] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost/obl-forum-backend-provvisorio/get.php?table=ages")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <BaseCard
      title="Le Ere di Tamriel"
      subtitle="In questa guida trovi tutte le ere di Tamriel"
    >
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 sm:gap-6">
        {data.map((age) => {
          const isOpen = open === age.id;
          return (
            <div key={age.id}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : age.id)}
                aria-expanded={isOpen}
                className={`frame-thin tap w-full rounded-sm px-4 py-3 text-center font-display text-fluid-xl font-bold transition-colors duration-200 ${
                  isOpen
                    ? "bg-oak-500 text-parchment-100"
                    : "bg-parchment-300 text-oak-700 hover:bg-parchment-200"
                }`}
              >
                {age.name}
              </button>

              {isOpen && (
                <AgesCard
                  image={age.image}
                  name={age.name}
                  description={age.description}
                />
              )}
            </div>
          );
        })}
      </div>
    </BaseCard>
  );
}

export default Age;
