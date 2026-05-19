function CharacterCard({ image, name, description, onClick }) {
    return (
        <div
            className=" m-auto w-[280px] min-h-[420px] flex flex-col bg-[#e2d7b7] rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform shadow-lg
            "
            onClick={onClick}
        >
            <img
                className=" w-full h-[240px] object-fit" src={image} alt={name}
            />

            <div className="flex flex-col flex-1 p-3">
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

export default CharacterCard;