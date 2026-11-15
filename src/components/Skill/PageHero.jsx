import Ornament from "./Ornament";

function PageHero({ eyebrow, title, children }) {
  return (
    <header className="text-center pt-[clamp(2rem,6vw,3.5rem)] pb-[clamp(1.5rem,4vw,2.5rem)]">
      <p className="mb-[0.6rem] font-display text-[0.8rem] tracking-[0.3em] uppercase text-oak-400">
        {eyebrow}
      </p>
      <h1 className="font-black text-[clamp(2rem,1.2rem+3.5vw,3.6rem)] tracking-[0.02em] text-oak-800 text-shadow-[0_1px_0_var(--color-parchment-50)]">
        {title}
      </h1>
      <Ornament />
      <p className="mx-auto mt-6 max-w-[45rem] text-left text-fluid-lg/[1.7]">
        {children}
      </p>
    </header>
  );
}

export default PageHero;
