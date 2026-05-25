function ItemModal ({ item, onClose, imgSize= "" }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={onClose}>
            <div className="bg-[#EEE2BF] p-4 rounded">
                <img className={` m-auto mb-2 ${imgSize === "small" ? "w-[100px] h-[100px]" : "max-w-4xl"}`} src={item.image} alt={item.name} />
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-left text-[14px]">{item.description}</p>
            </div>
        </div>
    )
                }

export default ItemModal;