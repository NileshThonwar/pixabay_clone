import PixabayContext from "./PixabayContext";
import React, { useEffect, useState } from 'react'

const PixabayState = (props) => {
    const [images, setImages] = useState([])
    const [query, setQuery] = useState("london")
    useEffect(() => {
        const api_key = "46153168-df51ec7f2da68f02899a6b4c7"
        const fetchData = async ()=>{
            const api =await fetch(`https://pixabay.com/api/?key=${api_key}&q=${query}&image_type=photo&pretty=true&per_page=6`)
            const data = await api.json()
            console.log(data.hits)
            setImages(data.hits)
        }
        fetchData()
    }, [query]);
    const fetchDataByCat = async (cat)=>{
        const api =await fetch(`https://pixabay.com/api/?key=46153168-df51ec7f2da68f02899a6b4c7&category=${cat}&image_type=photo&pretty=true&per_page=6`)
        const data = await api.json()
        console.log(data.hits)
        await setImages(data.hits)
    
};
    
  return (
    <PixabayContext.Provider value={{images,fetchDataByCat,setQuery}}>{props.children}</PixabayContext.Provider>
  )
}

export default PixabayState;