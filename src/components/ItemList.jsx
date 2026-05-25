function ItemList ({ sign, onMouseEnter }) {
    return (
        <div className="hover:bg-[#68513A] hover:text-[#F5E9D2]" onMouseEnter={onMouseEnter}>
            <h3 className="text-xl font-bold mb-2 p-1 ">{sign.name}</h3>
        </div>
    );
}

export default ItemList;