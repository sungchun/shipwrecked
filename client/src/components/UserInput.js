import { useState } from "react"

const UserInput = ({ setInput }) => {
    const [command, setCommand] = useState('')

    function handleChange(event) {
        setCommand(event.target.value)
        console.log(command)
    }

    function handleSubmit(event) {
        event.preventDefault()
        setInput(command)
        event.target.value = ''
    }

    return (
        <form onChange={handleChange} onSubmit={handleSubmit} className="user_input">
            <input spellCheck="false" type='text' placeholder="What would you like to do?"></input>
        </form>
    )
}

export default UserInput