function AgesCard({ image, name, description, onClick }) {
    return (
        
        <div
            className=" m-auto mt-8 w-[680px] min-h-[420px] rounded-lg overflow-hidden cursor-pointer hover:scale-102 transition-transform 
            "
            onClick={onClick}
        >
            <img className="w-[380px] h-[280px] m-auto" src={image} alt={name}/>

            <div className="p-3">
                <h3 className="text-center text-[18px] text-[#990000] underline mb-2 font-bold">
                    {name}
                </h3>

                <p className="text-left text-[18px] flex-1 overflow-hidden whitespace-pre-line">
                    {description}
                </p>
            </div>
        </div>
    );
}

export default AgesCard;