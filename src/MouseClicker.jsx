import React from "react";

function MouseClicker({ name }) {
    const handleButtonClick = (event) => {
      console.log(event.currentTarget.getAttribute('name'));
    };
  
    const handleImageClick = (event) => {
      console.log(event.target.src);
      event.stopPropagation(); // Impedisce la propagazione dell'evento verso l'alto fino al pulsante
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