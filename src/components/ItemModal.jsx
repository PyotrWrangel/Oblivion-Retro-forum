function ItemModal ({ item, onClose }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={onClose}>
            <div className="bg-white p-4 rounded">
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-left text-[14px]">{item.description}</p>
            </div>
        </div>
    )
                }

export default ItemModal;