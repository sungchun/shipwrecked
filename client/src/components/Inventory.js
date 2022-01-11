import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import inventory from '../pages/Game.js'

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