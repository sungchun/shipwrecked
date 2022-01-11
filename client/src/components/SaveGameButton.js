import { getZoneID } from "../helpers/zoneID"
import { getSaveID } from "../helpers/saveID"
import { getToken } from "../helpers/auth"
import axios from "axios"

const SaveGameButton = ({ setSecondText }) => {
    async function saveGame() {
        let config = {
            method: "get",
            url: `/api/zones/`,
            header: {
                Authorization: `Bearer ${getToken()}`,
                'Content-Type': 'application/json',
            },
        }
        const response = await axios(config)
        const currentSaveZone = response.data.find((zone) => zone.game === Number(getSaveID()))
        console.log('current save zone:', currentSaveZone)
        config = {
            method: "put",
            url: `/api/zones/${currentSaveZone.id}`,
            header: {
                Authorization: `Bearer ${getToken()}`,
                'Content-Type': 'application/json',
            },
            data: {
                ...currentSaveZone,
                game: null
            }
        }
        const updatedSaveZone = await axios(config)
        console.log('updated original save zone', updatedSaveZone)
        config = {
            method: "get",
            url: `/api/zones/`,
            header: {
                Authorization: `Bearer ${getToken()}`,
                'Content-Type': 'application/json',
            },
        }
        const responseTwo = await axios(config)
        const currentZone = response.data.find((zone) => zone.id === Number(getZoneID()))
        config = {
            method: "put",
            url: `/api/zones/${Number(getZoneID())}`,
            header: {
                Authorization: `Bearer ${getToken()}`,
                'Content-Type': 'application/json',
            },
            data: {
                ...currentZone,
                game: Number(getSaveID())
            }
        }
        const newSaveZone = await axios(config)
        console.log('created new save zone:', newSaveZone)
        setSecondText('Game saved.')
    }

    return (
        <button className="button" onClick={saveGame}>SAVE GAME</button>
    )
}

export default SaveGameButton