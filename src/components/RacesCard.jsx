function RacesCard({ image, name, description }) {
    return (
        <>
        <div className="max-w-[150px] m-auto p-auto">
            <img className="w-full max-h-[215px]" src={image} alt="imageRace"></img>
            <h3 className="text-center text-[14px] underline">{name}</h3>
            <p className="text-left text-[14px]">{description}</p>
        </div>
        </>
    )
}

export default RacesCard;