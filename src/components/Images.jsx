import React, { useContext } from 'react'
import PixabayContext from '../context/PixabayContext'

const Images = () => {
    const {images} = useContext(PixabayContext)
    // console.log(useContext(PixabayContext))
    // console.log(dataofImage)
    return (
        <div className="container my-5">
            <div className="imagesContainer">
                {images
                .map((data) => <div key={data.id}>
                    <div className='itemsImg' >
                        <img src={data.largeImageURL} alt="" />
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default Images