import React from "react";

function MouseClicker({name}){
const handleClick= (event)=>{
    console.log(event.target.name);
};

return(
    <button name={name} onClick={handleClick}> click button</button>
)
}

export default MouseClicker