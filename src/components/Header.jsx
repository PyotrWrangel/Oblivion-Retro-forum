import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { sections } from "../data/Links";
import headerImg from "/images/Header.jpg";

function Header() {
  const [openSlug, setOpenSlug] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef(null);

  // Navigare su una voce richiude sempre i menu
  const closeAll = useCallback(() => {
    setOpenSlug(null);
    setMobileOpen(false);
  }, []);

  // Esc chiude i menu; click fuori chiude il dropdown desktop
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeAll();
    };
    const onPointerDown = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenSlug(null);
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [closeAll]);

  // Blocca lo scroll del body quando il menu mobile è aperto
  useEffect(() => {
    if (!mobileOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [mobileOpen]);

  const toggle = (slug) => setOpenSlug((prev) => (prev === slug ? null : slug));

  return (
    <header className="w-full">
      {/* Banner */}
      <div className="page-x pt-3 pb-2 sm:pt-5">
        <Link
          to="/"
          onClick={closeAll}
          className="tap mx-auto block w-full max-w-[950px]"
          aria-label="Torna alla home"
        >
          <img
            src={headerImg}
            alt="Oblivion Retro Forum"
            width={950}
            height={200}
            className="w-full rounded-sm shadow-[0_10px_24px_-16px_rgba(33,26,18,0.8)]"
          />
        </Link>
      </div>

      <nav
        ref={navRef}
        aria-label="Navigazione principale"
        className="page-x relative pb-4 sm:pb-6"
      >
        {/* ---------- Barra mobile ---------- */}
        <div className="mx-auto flex w-full max-w-[950px] lg:hidden">
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="menu-mobile"
            className="tap title-bar flex w-full items-center justify-between gap-3 rounded-sm px-4 py-3 font-display text-fluid-lg font-bold tracking-wide text-parchment-100"
          >
            <span>{mobileOpen ? "Chiudi" : "Menù"}</span>
            <span aria-hidden="true" className="grid gap-[5px]">
              <span
                className={`block h-[3px] w-6 bg-parchment-100 transition-transform duration-200 ${
                  mobileOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[3px] w-6 bg-parchment-100 transition-opacity duration-200 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-[3px] w-6 bg-parchment-100 transition-transform duration-200 ${
                  mobileOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        {/* ---------- Pannello mobile (accordion) ---------- */}
        {mobileOpen && (
          <div
            id="menu-mobile"
            className="mx-auto mt-2 w-full max-w-[950px] overflow-hidden rounded-sm border-2 border-oak-800 bg-parchment-200 lg:hidden"
          >
            <ul className="max-h-[65dvh] overflow-y-auto overscroll-contain">
              {sections.map((cat) => {
                const isOpen = openSlug === cat.slug;
                return (
                  <li key={cat.slug} className="border-b border-oak-400/40 last:border-b-0">
                    <button
                      type="button"
                      onClick={() => toggle(cat.slug)}
                      aria-expanded={isOpen}
                      className="tap flex w-full items-center justify-between gap-3 px-4 py-3 text-left font-display text-fluid-lg font-bold text-oak-700"
                    >
                      {cat.slug.trim()}
                      <span
                        aria-hidden="true"
                        className={`text-oak-500 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        ▾
                      </span>
                    </button>

                    {isOpen && (
                      <ul className="bg-parchment-100 pb-1">
                        {cat.items.map((page) => (
                          <li key={page.path}>
                            <Link
                              to={page.path}
                              onClick={closeAll}
                              className="tap block px-6 py-3 text-fluid-base text-oak-600 active:bg-oak-500 active:text-parchment-100"
                            >
                              {page.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {/* ---------- Navigazione desktop ---------- */}
        <ul className="mx-auto hidden w-full max-w-[950px] flex-wrap items-stretch justify-center gap-1 lg:flex xl:gap-2">
          {sections.map((cat) => {
            const isOpen = openSlug === cat.slug;
            return (
              <li
                key={cat.slug}
                className="relative"
                onMouseEnter={() => setOpenSlug(cat.slug)}
                onMouseLeave={() => setOpenSlug(null)}
              >
                <button
                  type="button"
                  onClick={() => toggle(cat.slug)}
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  className={`tap rounded-sm border-2 px-3 py-1.5 font-display text-fluid-xl font-bold whitespace-nowrap text-oak-700 transition-colors duration-150 xl:px-4 ${
                    isOpen
                      ? "border-oak-800 bg-parchment-200"
                      : "border-transparent hover:border-oak-800 hover:bg-parchment-200"
                  }`}
                >
                  {cat.slug.trim()}
                </button>

                {isOpen && (
                  <ul className="absolute top-full left-1/2 z-50 min-w-[15rem] -translate-x-1/2 border-3 border-oak-800 bg-parchment-200 py-1 shadow-[0_16px_32px_-18px_rgba(33,26,18,0.9)]">
                    {cat.items.map((page) => (
                      <li key={page.path}>
                        <Link
                          to={page.path}
                          onClick={closeAll}
                          className="tap block px-3 py-2 text-fluid-base whitespace-nowrap text-oak-700 transition-colors duration-150 hover:bg-oak-500 hover:text-parchment-100"
                        >
                          {page.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
