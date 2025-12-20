


function Card ({ title, text, image, logo }) {

    return (
        <>
        <div className="mx-auto pt-2 bg-[#dacca3] w-120 mt-[20px] md-[20px] border-1 border-solid border-black">
            <div className=" bg-[#68513a]">
                <p className="text-center font-[700] text-[13px]  ">{ title }</p>
                </div>
                <div className="flex flex-cols-2 m-2">
                   <img className="" src={logo} alt="oblivion logo"></img>
                   <p className="px-2 pr-8 text-[#5b4732] text-xs text-left whitespace-pre-line">{ text }</p>
                </div>
                <img className="max-w-[330px] m-auto pb-[15px]" src={image} alt="oblivion image"></img>
            </div>
        
        </>
    )
}

export default Card