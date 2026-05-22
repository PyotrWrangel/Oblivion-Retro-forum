function ItemSide({ sign, onMouseLeave }) {
    return (
        <div className=" flex items-center justify-center" onMouseLeave={onMouseLeave}>
            <div className=" p-4 rounded">
                <h3 className="text-xl font-bold mb-2">{sign.name}</h3>
                <img className="w-full max-w-xs h-auto mb-2" src={sign.image} alt={sign.name} />
                <p className="text-left text-[14px]">{sign.description}</p>
            </div>
        </div>
    )
}

export default ItemSide;