function ItemSide({ sign, onMouseLeave }) {
    return (
        <div className="w-full items-center justify-center" onMouseLeave={onMouseLeave}>
            <div className="ml-6 mt-18 p-4 rounded">
                 <img className="w-full max-w-xl h-auto mb-2" src={sign.image} alt={sign.name} />
                 <div className="ml-6">
                <h3 className="text-2xl font-bold mb-2">{sign.name}</h3>
                <p className="text-left text-[18px] max-w-xl">{sign.description}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemSide;