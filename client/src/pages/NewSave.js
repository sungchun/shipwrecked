import { getID, getToken } from "../helpers/auth"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router"
import { zones, levels } from "../objects/zones"
import loadGif from "../images/IntroScreen.gif"

const NewSave = () => {
    const [saveData, setSaveData] = useState({
        name: '',
        user: getID()
    })
    const [loading, setLoading] = useState(false)
    const [loadingText, setLoadingText] = useState('')

    const navigate = useNavigate()

    async function makeSave(event) {
        event.preventDefault()
        setLoading(true)
        setLoadingText('Creating Save...')
        let config = {
            method: "post",
            url: `/api/games/`,
            header: {
                Authorization: `Bearer ${getToken()}`,
                'Content-Type': 'application/json',
            },
            data: saveData,
        }
        const gameResponse = await axios(config)
        let gameZones = []
        setLoadingText('Creating levels...')
        for (let i = 0; i < levels.length; i++) {
            const config = {
                method: "post",
                url: `/api/levels/`,
                header: {
                    Authorization: `Bearer ${getToken()}`,
                    'Content-Type': 'application/json',
                },
                data: {
                    name: `level${i}`,
                    game: gameResponse.data.id
                },
            }
            const newLevel = await axios(config)
            console.log('levels', levels[i])
            for (let j = 0; j < levels[i].length; j++) {
                if (i === 0 && j === 0) {
                    const config = {
                        method: "post",
                        url: `/api/zones/`,
                        header: {
                            Authorization: `Bearer ${getToken()}`,
                            'Content-Type': 'application/json',
                        },
                        data: {
                            name: `${levels[i][j]}`,
                            level: newLevel.data.id,
                            game: gameResponse.data.id
                        }
                    }
                    const newZone = await axios(config)
                    gameZones.push(newZone.data)
                } else {
                    const config = {
                        method: "post",
                        url: `/api/zones/`,
                        header: {
                            Authorization: `Bearer ${getToken()}`,
                            'Content-Type': 'application/json',
                        },
                        data: {
                            name: `${levels[i][j]}`,
                            level: newLevel.data.id,
                        }
                    }
                    const newZone = await axios(config)
                    gameZones.push(newZone.data)
                }
            }
        }
        setLoadingText('Creating connections...')
        for (let i = 0; i < gameZones.length; i++) {
            console.log('gamezone:', gameZones[i])
            console.log('zone:', zones[gameZones[i].name])
            if (zones[gameZones[i].name].connectedTo) {
                console.log('connecting this zone')
                const connectedZones = gameZones.filter((zone) => {
                    if (zones[gameZones[i].name].connectedTo.includes(zone.name)) {
                        return zone
                    }
                })
                const zoneIDs = connectedZones.map((zone) => {
                    return zone.id
                })
                console.log('the connected zones:', connectedZones)
                const config = {
                    method: "put",
                    url: `/api/zones/${gameZones[i].id}/`,
                    header: {
                        Authorization: `Bearer ${getToken()}`,
                        'Content-Type': 'application/json',
                    },
                    data: {
                        ...gameZones[i],
                        zones: zoneIDs
                    }
                }
                const updatedZone = await axios(config)
                console.log(updatedZone)
            }
        }
        navigate('/saves')
    }

    function handleChange(event) {
        const { name, value } = event.target
        setSaveData({
            ...saveData,
            [name]: value
        })
    }

    return (
        <div>
            <form className="new_save_form" onSubmit={makeSave}>
                <h1>SHIPWRECKED</h1>
                <h2>Name your new save:</h2>
                <input type='text' name='name' placeholder="New save name" onChange={handleChange} />
                {loading ? (
                    <>
                        <p>{loadingText}</p>
                        <img src={loadGif} />
                    </>
                ) : (
                    <></>
                )}
            </form>
        </div >
    )
}

export default NewSave