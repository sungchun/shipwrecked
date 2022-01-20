import { useState, useEffect } from "react"
import axios from "axios"
import { getID, getToken } from "../helpers/auth"
import { getSaveID, setSaveID } from "../helpers/saveID"
import { setZoneID } from "../helpers/zoneID"
import SaveCard from "../components/SaveCard"
import { useNavigate } from "react-router"
import { zones } from "../objects/zones"
import items from "../objects/items"
import LogoutButton from "../components/LogoutButton"

const Saves = ({ setZone, setInventory }) => {
    const [savesList, setSavesList] = useState([])
    const [showPopup, setShowPopup] = useState(false)
    const [saveName, setSaveName] = useState('')

    const navigate = useNavigate()

    useEffect(() => {
        async function getSaves() {
            const config = {
                method: 'get',
                url: '/api/games/',
                header: {
                    Authorization: `Bearer ${getToken()}`,
                    'Content-Type': 'application/json',
                }
            }
            const response = await axios(config)
            console.log('the response dot data', response.data)
            console.log('the user ID', getID())
            const id = Number(getID())
            const saves = response.data.filter(save => save.user === id)
            console.log('the saves', saves)
            setSavesList(saves)
        }
        getSaves()
    }, [])

    function goToNewSave() {
        navigate('/new_save')
    }

    function cancel() {
        setShowPopup(false)
        setSaveID('')
    }

    async function startGame() {
        let config = {
            method: 'get',
            url: '/api/zones/',
            header: {
                Authorization: `Bearer ${getToken()}`,
                'Content-Type': 'application/json',
            }
        }
        const response = await axios(config)
        console.log('response.data:', response.data)
        const startZone = response.data.find(zone => zone.game === Number(getSaveID()))
        setZoneID(startZone.id)
        console.log('startZone:', startZone)
        setZone(zones[startZone.name.toLowerCase()])
        config = {
            method: 'get',
            url: '/api/items/',
            header: {
                Authorization: `Bearer ${getToken()}`,
                'Content-Type': 'application/json',
            }
        }
        const backendItems = await axios(config)
        const saveItems = []
        backendItems.data.forEach((thing) => {
            console.log('saveid:', getSaveID())
            if (thing.game === Number(getSaveID())) {
                console.log('item in backend:', thing)
                saveItems.push([thing.id, items[thing.name]])
            }
        })
        console.log('this saves items:', saveItems)
        setInventory(saveItems)
        navigate('/play')
    }
    return (
        <div className='saves'>
            <h1>SHIPWRECKED</h1>
            <ul>
                {
                    savesList.map((save) => (
                        <SaveCard id={save.id} key={save.id} name={save.name} timestamp={save.timestamp} setShowPopup={setShowPopup} setSaveName={setSaveName} />
                    ))
                }
            </ul>
            {showPopup ? (
                <div className='savedgames'>
                    <p>Are you sure you want to start {saveName}?</p>
                    <button className="button" onClick={startGame}>Start</button>
                    <button className="button" onClick={cancel}>Cancel</button>
                </div>
            ) : (
                <></>
            )

            }
            <LogoutButton />
            <button className="button" onClick={goToNewSave}>New Save</button>
        </div >
    )
}

export default Saves