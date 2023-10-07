import React from "react";

function AlertClock(onButtonClick){

   return(
    <div>

    <button onClick={(onButtonClick)=>alert(Date())}>Pulsante per la data</button>
    </div>
   ) 
}

export default AlertClock