import { useState } from "react";
import myImg from "/images/Header.jpg";
import { sections } from "../data/Links";
import { Link } from "react-router-dom";

function Header() {
  const [openSlug, setOpenSlug] = useState(null);

  return (
    <>
      <div className=" flex items-center ">
        <div className="mx-auto  inset-x-0 top-9 max-w-8xl">
          <Link to="/">
          <img className="w-800" src={myImg} alt="oblivion image"></img>
          </Link>
          <nav className="m-auto lg:flex lg:gap-x-6 mb-[20px] justify-center">
            <ul className="grid grid-cols-5 gap-6">
              {sections.map((cat) => (
                <li className="relative text-[25px]"
                  key={cat.slug}
                  onMouseEnter={() => setOpenSlug(cat.slug)}
                  onMouseLeave={() => setOpenSlug(null)}
                >
                  <button className="text-[#3A2D20] font-bold hover:bg-[#E6DAB9] px-2 py-1 hover:rounded hover:border-2 hover:border-black-500 hover:scale-105 transition-all duration-300 ease-in-out">
                    {cat.slug}
                  </button>

                  {openSlug === cat.slug && (
                    <ul className="absolute top-full bg-[#E6DAB9] border-5 border-[#32281E] z-50">
                      {cat.items.map((page) => (
                        <li className="text-black" key={page.path}>
                          <Link to={page.path}>
                            <p className="p-1 text-black">{page.label}</p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
