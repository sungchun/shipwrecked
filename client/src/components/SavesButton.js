import { useNavigate } from "react-router-dom"

const SavesButton = () => {
    const navigate = useNavigate()
    function goToSaves() {
        navigate('/saves')
    }
    return (
        <button className="button" onClick={goToSaves}>BACK TO SAVES</button>
    )
}

export default SavesButton