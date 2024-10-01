import React, { useContext } from 'react'
import PixabayContext from '../context/PixabayContext'
const Navbar = () => {
    const {fetchDataByCat,setQuery} = useContext(PixabayContext)
    console.log(fetchDataByCat)
    return (
        <>
            <div className="Navbar"> 
                <button type="button" onClick={()=>fetchDataByCat("nature")} className="btn btn-outline-warning" >Nature</button>
                <button type="button" onClick={()=>fetchDataByCat("science")} className="btn btn-outline-primary">Science</button>
                <button type="button" onClick={()=>fetchDataByCat("places")} className="btn btn-outline-success">Places</button>
                <button type="button" onClick={()=>fetchDataByCat("travel")} className="btn btn-outline-danger">Travel</button>
                <button type="button" onClick={()=>fetchDataByCat("buildings")} className="btn btn-outline-warning">Building</button>
                <button type="button" onClick={()=>fetchDataByCat("sports")} className="btn btn-outline-info">Sports</button>
                <button type="button" onClick={()=>fetchDataByCat("fashion")} className="btn btn-outline-light">Fashion</button>
              <button type="button" onClick={()=>fetchDataByCat("music")} className="btn btn-outline-info">Music</button>
            </div>
            {/* <input type="text" onChange={(e)=>setQuery(e.target.value)}/> */}

        </>
    )
}

export default Navbar