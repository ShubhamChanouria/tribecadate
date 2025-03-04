import React from 'react'
import Image from 'next/image'

const DynamicImage = ({ image, alt, width, height }) => {
    return (
        <div>
            <Image src={image} alt={alt} width={width} height={height} className='' />
        </div>
    )
}

export default DynamicImage