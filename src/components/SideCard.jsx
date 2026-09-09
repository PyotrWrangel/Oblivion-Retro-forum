import ReactMarkdown from "react-markdown";
import SafeImage from "./SafeImage";
import { withLineBreaks } from "../lib/markdown";

/** Riquadro laterale della homepage (avvisi, links, ecc.). */
function SideCard({ title, img, imgtitle, description }) {
  return (
    <aside className="frame-ornate w-full bg-parchment-400 p-2 sm:p-3">
      <div className="title-bar px-2 py-2">
        <h2 className="text-center font-display text-fluid-lg font-bold tracking-wide text-parchment-100">
          {title}
        </h2>
      </div>

      {img && (
        <SafeImage
          src={img}
          alt={imgtitle || ""}
          loading="lazy"
          className="mx-auto my-3 w-20"
        />
      )}

      <div className="prose-oblivion prose-oblivion--compact prose mt-2 max-w-none text-left">
        <ReactMarkdown>{withLineBreaks(description)}</ReactMarkdown>
      </div>
    </aside>
  );
}

export default SideCard;
