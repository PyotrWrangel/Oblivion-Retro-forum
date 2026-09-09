import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import SafeImage from "./SafeImage";
import { withLineBreaks } from "../lib/markdown";

/** Notizia della homepage. */
function Card({
  title,
  text,
  image,
  imgTitle,
  logo,
  imagePosition,
  date,
}) {
  // Il DB puo' restituire null: il default di destructuring scatta solo su undefined.
  const position = (imagePosition || "bottom").trim().toLowerCase();

  const picture = image && (
    <SafeImage
      src={image}
      alt={imgTitle || title || ""}
      loading="lazy"
      className="mx-auto my-3 w-full max-w-[500px] rounded-sm"
    />
  );

  return (
    <article className="frame-ornate w-full bg-parchment-400 p-2 sm:p-4">
      <div className="title-bar px-3 py-2">
        <h2 className="text-center font-display text-fluid-xl font-bold text-parchment-100">
          {title}
        </h2>
      </div>

      {position === "top" && picture}

      <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:gap-4">
        {logo && (
          <SafeImage
            src={logo}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="w-16 shrink-0 self-center sm:w-24 sm:self-start"
          />
        )}
        <div className="prose-oblivion prose max-w-none flex-1 text-left">
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>
            {withLineBreaks(text)}
          </ReactMarkdown>
        </div>
      </div>

      {position === "bottom" && picture}

      {date && (
        <p className="mt-2 border-t border-oak-400/40 pt-2 text-left text-fluid-sm text-oak-500">
          {date}
        </p>
      )}
    </article>
  );
}

export default Card;
