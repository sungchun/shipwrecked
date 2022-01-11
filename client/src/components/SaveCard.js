import { setSaveID } from "../helpers/saveID"
const SaveCard = ({ id, name, timestamp, setShowPopup, setSaveName }) => {

    function handleClick() {
        console.log('id', id)
        setSaveID(id)
        setShowPopup(true)
        setSaveName(name)
    }
    return (
        <li className='save_card' key={id} onClick={handleClick}>
            <p>{name}</p>
            <p>{timestamp}</p>
            <button className="button">START</button>
        </li>
    )
}
export default SaveCard