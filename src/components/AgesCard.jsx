function AgesCard({ image, name, description, onClick }) {
    return (
        
        <div
            className=" m-auto w-[280px] min-h-[420px] bg-[#e2d7b7] rounded-lg overflow-hidden cursor-pointer hover:scale-102 transition-transform shadow-lg
            "
            onClick={onClick}
        >
            <img className=" w-full h-[240px] object-fit" src={image} alt={name}/>

            <div className="p-3">
                <h3 className="text-center text-[18px] underline mb-2 font-bold">
                    {name}
                </h3>

                <p className="text-center text-[16px] flex-1 overflow-hidden">
                    {description}
                </p>
            </div>
        </div>
    );
}

export default AgesCard;