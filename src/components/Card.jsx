import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";


function Card ({ title, text, image, imgTitle, logo, imagePosition = "bottom", date}) {

        return (
        <>

        <div className="pt-2 bg-[#dacca3] w-200 mt-[20px] mb-[50px] md-[20px] border-4 border-[#5b4732] ring-4 ring-[#3a2a1a] ring-offset-4 ring-offset-[#dacca3] p-4">
            <div className=" bg-[#68513a]">
                <p className="font-serif text-center font-[700] text-[26px] text-[#EEE2BF]">{ title }</p>
                </div>
                 {imagePosition === "top" &&
                <img className="pt-1 pl-[20px] px-[20px] w-[500px] m-auto pb-[15px]" src={image} alt={imgTitle}></img>}
                <div className="flex flex-cols-2 m-2"> 
                    {logo &&
                   <img src={logo} alt="oblivion logo" className="w-30"></img>}
                   <div className="text-left px-2 pr-8 text-[#5b4732] text-[18px] leading-tight whitespace-pre-line">
                   <ReactMarkdown rehypePlugins={[rehypeRaw]}>{ text }</ReactMarkdown>
                   </div>
                </div>
                {/* posizionamento immagine */}
                {imagePosition === "bottom" && 
                <img className="w-[500px] max-w-[750px] m-auto" src={image} alt={imgTitle}></img>}
                <p className="text-sm text-left p-2 text-[16px] prose">{date}</p>
            </div>
        
        </>
    )
}

export default Card