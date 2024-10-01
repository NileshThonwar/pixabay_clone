import React, { useContext, useState } from "react";
import PixabayContext from "../context/PixabayContext";
const SearchBar = () => {
    const [val, setVal] = useState("")
const {setQuery} = useContext(PixabayContext)
    const subHandle = (e)=>{
        e.preventDefault()
        setQuery(val)
        // alert("submitted")
    }
    return (
        <>
            <form onSubmit={subHandle}>
                <div className="search">
                    <input type="text" value={val} onChange={(e)=>setVal(e.target.value)}/>
                    {/* <input type="text" onChange={(e)=>setQuery(e.target.value)}/> */}
                <button className="btnSearch">Serach</button>
                </div>
            </form>
        </>
    )

}
export default SearchBar

// import React from 'react'

// const SearchBar = () => {
//     return (
//         <div>SearchBar</div>
//     )
// }

// export default SearchBar