import React from 'react'

const ImageCard = ({ zone }) => {
    return (
        <div className='image_div'>
            <img src={zone.image} />
        </div>
    )
}

export default ImageCard
