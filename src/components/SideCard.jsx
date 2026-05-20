import ReactMarkdown from "react-markdown";

function SideCard ({ title, img, imgtitle, description }) {

    return (

        <div className="w-[280px] h-auto border-4 border-[#32271d] ring-4 ring-[#3a2a1a] ring-offset-4 ring-offset-[#dacca3] p-2 mb-6">
            <div className="bg-[#68513a]">
                <p className="font-serif text-center font-[700] text-[26px] text-[#EEE2BF]">{ title }</p>
                </div>
               {img && 
            <img className="w-[80px] m-auto" src={img} alt={imgtitle}></img>
                }
            <div className="space-y-3 leading-relaxed text-[18px]">
                 <ReactMarkdown>{ description }</ReactMarkdown>
            </div>

        </div>
    )
}
    export default SideCard;