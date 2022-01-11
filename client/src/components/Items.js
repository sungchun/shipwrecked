const Items = ({ zone }) => {

    if (zone.items) {
        return (
            <div className="interactables">
                <h2>INTERACTABLES:</h2>
                <div className="interactable_items">
                    {zone.items.map((item) => (
                        <p>{item.name}</p>
                    ))}
                </div>
            </div >

        )
    } else {
        return (
            <div className="interactables">
                <h2>INTERACTABLES:</h2>
            </div >
        )
    }
}

export default Items