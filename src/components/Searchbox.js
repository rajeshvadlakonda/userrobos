import React from "react";
const Searchbox = ({searchChange}) => {
    return(
        <input type = "search" placeholder= "search" onChange={searchChange} 
        className="pa3 ba b-green bg-light-blue"/>
    )
}
export default Searchbox;