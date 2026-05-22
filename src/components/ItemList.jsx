function ItemList ({ sign, onMouseEnter }) {
    return (
        <div className="" onMouseEnter={onMouseEnter}>
            <h3 className="text-xl font-bold mb-2">{sign.name}</h3>
        </div>
    );
}

export default ItemList;