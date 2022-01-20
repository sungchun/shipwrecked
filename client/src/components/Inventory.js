import React from 'react'

const Inventory = ({ inventory }) => {

    return (
        <div className="inventory">
            <h2>INVENTORY:</h2>
            <div className='inventory-items'>
                {inventory.map((item) => (

                    <p>{item[1].name}</p>

                ))}
            </div>
        </div>
    )
}

export default Inventory