import { removeToken } from "../helpers/auth"
import { useNavigate } from "react-router-dom"

const LogoutButton = () => {
    const navigate = useNavigate()

    function logout() {
        removeToken()
        navigate('/')
    }

    return (
        <button className="button" onClick={logout}>LOGOUT</button>
    )
}

export default LogoutButton