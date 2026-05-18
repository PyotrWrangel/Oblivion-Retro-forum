function RacesCard({ image, name, description, onClick }) {
    return (
        <>
        <div className="max-w-[150px] m-auto p-auto cursor-pointer hover:scale-105 transition-transform" onClick={onClick}>
            <img className="w-full max-h-[215px]" src={image} alt="imageRace"></img>
            <h3 className="text-center text-[14px] underline">{name}</h3>
            <p className="text-left text-[14px]">{description}</p>
            <p>prova 2</p>
        </div>
        </>
    )
}

export default RacesCard;