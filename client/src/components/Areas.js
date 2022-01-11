const Areas = ({ zone }) => {

    if (zone.playerCanWalk) {
        return (
            <div className="area_div">
                <h2>ACCESSIBLE AREAS:</h2>
                {zone.playerCanWalk.map((area) => (
                    <p className="area_name">{area}</p>
                ))}
            </div>
        )
    } else {
        return (
            <div className="area_div">
                <h2>ACCESSIBLE AREAS:</h2>
            </div>
        )
    }


}

export default Areas