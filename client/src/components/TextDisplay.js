import { useState } from "react"
const TextDisplay = ({ text }) => {
    return (
        <div className="text_display">
            <p className="displayed_text">{text}</p>
        </div>
    )
}

export default TextDisplay