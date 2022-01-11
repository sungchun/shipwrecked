import React from 'react'

const PossibleCommands = () => {
    return (
        <div className='instructions'>
            <h3>USER COMMANDS:</h3>
            <div className="commands">
                <div className="command_div">
                    <h4>USE _</h4>
                    <h4>USE _ ON _</h4>
                </div>
                <div className="command_div">
                    <h4>COMBINE _ _ ...</h4>
                    <h4>TALKTO _</h4>
                </div>
                <div className="command_div">
                    <h4>GIVE _ TO _</h4>
                    <h4>EXAMINE _</h4>
                </div>
                <div className="command_div">
                    <h4>PICKUP _</h4>
                    <h4>WALKTO _</h4>
                </div>
            </div>
        </div>
    )
}

export default PossibleCommands

