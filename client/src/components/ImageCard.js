import React from 'react'
import zones from '../objects/zones.js'
import { Link } from 'react-router-dom'
import { useState } from "react"
import { getZoneID } from '../helpers/zoneID.js'

const ImageCard = ({ zone }) => {
    return (
        <div className='image_div'>
            <img src={zone.image} />
        </div>
    )
}

export default ImageCard
