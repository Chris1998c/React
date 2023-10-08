import React from "react";

function MouseClicker({ name }) {
    const handleButtonClick = (event) => {
      console.log(event.currentTarget.getAttribute('name'));
    };
  
    const handleImageClick = (event) => {

      if (event.target.tagName !== 'IMG') {
        console.log(event.target.getAttribute('name'));
      }
    };

return (
    <div>
      <button name={name} onClick={handleButtonClick}>
        <img src="https://images.photowall.com/products/63176/lower-manhattan-skyline.jpg?h=699&q=85" alt="IMMAGINE1" 
        onClick={handleImageClick}/>
        Click
        </button>
    </div>
  );
}

export default MouseClicker