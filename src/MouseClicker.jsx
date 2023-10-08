import React from "react";

function MouseClicker({name}){
const handleClick= (event)=>{
    if (event.target.nodeName === 'BUTTON' || event.target.nodeName === 'IMG') {
        console.log(event.currentTarget.getAttribute('name'));
      }
    };
return(
      <button name={name} onClick={handleClick}>
        <img src="https://images.photowall.com/products/63176/lower-manhattan-skyline.jpg?h=699&q=85" alt="IMMAGINE1" />
        Click
      </button>
)
}

export default MouseClicker