import { useState, useEffect } from "react"
import TextDisplay from "../components/TextDisplay"
import UserInput from "../components/UserInput"
import { zones } from "../objects/zones"
import items from "../objects/items"
import { getToken } from "../helpers/auth"
import { getZoneID, setZoneID } from "../helpers/zoneID"
import SecondTextDisplay from "../components/SecondTextDisplay"
import axios from "axios"
import { getSaveID } from "../helpers/saveID"
import ImageCard from "../components/ImageCard"
import PossibleCommands from "../components/PossibleCommands"
import Inventory from "../components/Inventory"
import Areas from "../components/Areas"
import LogoutButton from "../components/LogoutButton"
import SavesButton from "../components/SavesButton"
import Items from "../components/Items"
import SaveGameButton from "../components/SaveGameButton"

const Game = ({ zone, setZone, inventory, setInventory }) => {
    const [text, setText] = useState('')
    const [secondText, setSecondText] = useState('')
    const [input, setInput] = useState('')
    const [newItem, setNewItem] = useState(null)

    async function changeConnections() {
        let nextZone = ''
        for (const place in zones) {
            if (zones[place] === zone.next) {
                nextZone = place
            }
        }
        let config = {
            method: 'get',
            url: `/api/zones/${Number(getZoneID())}`,
            header: {
                Authorization: `Bearer ${getToken()}`,
                'Content-Type': 'application/json',
            }
        }
        const response = await axios(config)
        const currentZoneObject = response.data
        config = {
            method: 'put',
            url: `/api/zones/${Number(getZoneID())}`,
            header: {
                Authorization: `Bearer ${getToken()}`,
                'Content-Type': 'application/json',
            },
            data: {
                ...currentZoneObject,
                name: `${nextZone}`
            }
        }
        const updatedZone = await axios(config)
    }

    const commands = {
        'WALKTO':
            async function (location) {
                const config = {
                    method: 'get',
                    url: `/api/zones/${Number(getZoneID())}`,
                    header: {
                        Authorization: `Bearer ${getToken()}`,
                        'Content-Type': 'application/json',
                    }
                }
                const response = await axios(config)
                const currentZoneObject = response.data
                for (let i = 0; i < currentZoneObject.zones.length; i++) {
                    const config = {
                        method: 'get',
                        url: `/api/zones/${currentZoneObject.zones[i]}`,
                        header: {
                            Authorization: `Bearer ${getToken()}`,
                            'Content-Type': 'application/json',
                        },
                    }
                    const returnedZone = await axios(config)

                    if (zones[returnedZone.data.name] && zones[returnedZone.data.name].name === location.toLowerCase()) {
                        setZone(zones[returnedZone.data.name])
                        setZoneID(currentZoneObject.zones[i])
                        setSecondText(`You have walked to the ${zones[returnedZone.data.name].name}.`)
                        return
                    }
                }
                setSecondText(`You can\'t go there from here.`)
            },
        'USE':
            async function (item) {
                if (!item) {
                    setSecondText('Please complete the command.')
                    return
                }
                if (zone.solution) {
                    if (input.split(" ").length > 2 && input !== zone.solution.toLowerCase()) {
                        setSecondText('That won\'t work')
                        return
                    } else if (input === zone.solution.toLowerCase()) {
                        if (item !== 'stick' || item !== 'bogshoes') {
                            let itemID = null
                            const updatedInventory = inventory.filter((object) => {
                                if (object[1].name === item) {
                                    itemID = object[0]
                                } else {
                                    return object
                                }
                            })
                            setInventory(updatedInventory)
                            const config = {
                                method: 'delete',
                                url: `/api/items/${itemID}`,
                                header: {
                                    Authorization: `Bearer ${getToken()}`,
                                    'Content-Type': 'application/json',
                                }
                            }
                            const deleteResponse = await axios(config)
                            setSecondText(`The ${item} broke.`)
                        }
                        changeConnections()
                        setZone(zone.next)
                        return
                    }
                }
                const thing = items[item.toLowerCase()]
                const givenItem = inventory.find(stuff => stuff[1] === thing)
                if (!thing) {
                    setSecondText('There is no such thing')
                    return
                }
                if (!inventory.includes(givenItem)) {
                    setSecondText('You don\'t have one of those')
                    return
                }
                const useText = thing.use
                setSecondText(useText)
            },
        'EXAMINE':
            function (item) {
                if (!item) {
                    setSecondText('Please complete the command.')
                    return
                }
                const thing = items[item.toLowerCase()]
                const givenItem = inventory.find(stuff => stuff[1] === thing)
                if (!thing) {
                    setSecondText('There is no such thing')
                    return
                }
                if (inventory.length > 0) {
                    if (!inventory.includes(givenItem) && !zone.items.includes(thing)) {
                        setSecondText('There isn\'t one of those around')
                        return
                    }
                } else {
                    if (!zone.items.includes(thing)) {
                        setSecondText('There isn\'t one of those around')
                        return
                    }
                }
                if (zone.solution) {
                    if (input.toLowerCase() === zone.solution.toLowerCase()) {
                        changeConnections()
                        setZone(zone.next)
                    }
                }
                const examineText = thing.examine
                setSecondText(examineText)
            },
        'GIVE':
            async function (item) {
                if (!item) {
                    setSecondText('Please complete the command.')
                    return
                }
                const thing = items[item.toLowerCase()]
                const givenItem = inventory.find(stuff => stuff[1] === thing)
                if (!givenItem) {
                    setSecondText('You don\'t have one of those')
                    return
                }
                if (input.toLowerCase() === zone.solution.toLowerCase()) {
                    const newInventory = inventory.filter(stuff => stuff[1] !== thing)
                    setInventory(newInventory)
                    let config = {
                        method: 'delete',
                        url: `/api/items/${givenItem[0]}`,
                        header: {
                            Authorization: `Bearer ${getToken()}`,
                            'Content-Type': 'application/json',
                        }
                    }
                    const deletedItems = await axios(config)
                    changeConnections()
                    setZone(zone.next)
                } else if (input.split(" ").length > 2) {
                    setSecondText('That won\'t work')
                    return
                }
                if (!thing) {
                    setSecondText('There is no such thing')
                    return
                }
            },
        'PICKUP':
            async function (item) {
                if (!item) {
                    setSecondText('Please complete the command.')
                    return
                }
                const thing = items[item.toLowerCase()]
                if (!thing) {
                    setSecondText('There is no such thing')
                    return
                }
                if (!zone.items || !zone.items.includes(thing)) {
                    setSecondText('There isn\'t one of those around here')
                    return
                }
                if (!thing.canPickUp) {
                    setSecondText(thing.pickUp)
                    return
                }
                const config = {
                    method: 'post',
                    url: '/api/items/',
                    header: {
                        Authorization: `Bearer ${getToken()}`,
                        'Content-Type': 'application/json',
                    },
                    data: {
                        name: item,
                        game: Number(getSaveID())
                    }
                }
                const createdItem = await axios(config)
                setNewItem([createdItem.data.id, thing])
                setSecondText(thing.pickUp)
                if (zone.solution) {
                    if (input.toLowerCase() === zone.solution.toLowerCase()) {
                        changeConnections()
                        setZone(zone.next)
                    }
                }
            },
        'TALKTO':
            function (item) {
                if (!item) {
                    setSecondText('Please complete the command.')
                    return
                }
                const thing = items[item.toLowerCase()]
                const givenItem = inventory.find(stuff => stuff[1] === thing)
                if (!thing) {
                    setSecondText('There is no such thing')
                    return
                }
                if (!inventory.includes(givenItem) && !zone.items.includes(thing)) {
                    setSecondText('There isn\'t one of those around')
                    return
                }
                setSecondText(thing.talkTo)
            },
        'COMBINE': async function () {
            const splitCommand = input.toLowerCase().split(" ").slice(1)
            const firstItem = items[splitCommand[0]]
            const combiningThings = splitCommand.slice(1)
            if (!firstItem.combinesWith) {
                setSecondText(`The ${firstItem.name} doesn\'t combine with anything.`)
                return
            }
            for (let j = 0; j < combiningThings.length; j++) {
                if (!firstItem.combinesWith.includes(combiningThings[j])) {
                    setSecondText('Those don\'t go together')
                    return
                }
            }
            if (combiningThings.length !== firstItem.combinesWith.length) {
                setSecondText('That\'s not going to work.')
                return
            }
            let itemName = ''
            let itemToCreateName = ''
            let newInventory = inventory.slice()

            let num = inventory.length
            for (let i = 0; i < num; i++) {
                if (!inventory[i]) {
                    break
                }
                for (const item in items) {
                    if (items[item] === inventory[i][1]) {

                        itemName = item
                    }
                    if (item === firstItem.creates) {

                        itemToCreateName = item
                    }
                }
                if (splitCommand.includes(itemName)) {
                    let config = {
                        method: 'delete',
                        url: `/api/items/${inventory[i][0]}`,
                        header: {
                            Authorization: `Bearer ${getToken()}`,
                            'Content-Type': 'application/json',
                        }
                    }
                    const deletedItem = await axios(config)
                    const itemIndex = newInventory.indexOf(inventory[i])
                    newInventory.splice(itemIndex, 1)
                }
            }
            let config = {
                method: 'post',
                url: '/api/items/',
                header: {
                    Authorization: `Bearer ${getToken()}`,
                    'Content-Type': 'application/json',
                },
                data: {
                    name: itemToCreateName,
                    game: Number(getSaveID())
                }
            }
            const createdItem = await axios(config)

            newInventory.push([createdItem.data.id, items[createdItem.data.name]])
            setInventory(newInventory)
            setSecondText(`You created a ${itemToCreateName}!`)
        }
    }

    function readCommand(str) {
        const splitCommand = str.split(' ')
        const command = splitCommand.splice(0, 1)
        if (!commands[command[0].toUpperCase()]) {
            if (input.toLowerCase() === zone.solution.toLowerCase()) {
                changeConnections()
                setZone(zone.next)
                return
            } else {
                setSecondText('Command not found')
                return
            }
        }
        commands[command[0].toUpperCase()](splitCommand[0])
    }



    useEffect(async () => {

        if (!zone) {
            return
        }
        setText(zone.text)
        if (zone.name === 'epilogue') {
            setSecondText('Congratulations! You have completed Shipwrecked.')
        }
    }, [zone])

    useEffect(() => {
        if (!newItem) {
            return
        }

        if (!inventory.includes(newItem)) {
            setInventory([...inventory, newItem])
        }
    }, [newItem])

    useEffect(() => {
        if (!input) {
            return
        }
        setSecondText('')
        readCommand(input)
    }, [input])

    return (
        <div className="game_box">
            <ImageCard zone={zone} />
            <div className="text_div">
                <TextDisplay text={text} />
                <SecondTextDisplay secondText={secondText} />
            </div>
            <UserInput setInput={setInput} />
            <div className="ui">
                <Inventory inventory={inventory} />
                <Items zone={zone} />
                <Areas zone={zone} />
                <PossibleCommands />
                <div className="user_buttons">
                    <LogoutButton />
                    <SavesButton />
                    <SaveGameButton setSecondText={setSecondText} />
                </div>
            </div>
        </div  >
    )
}

export default Game