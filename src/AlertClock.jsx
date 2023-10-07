import React from "react";

function AlertClock(){
   return(
    <button onClick={()=>alert(Date())}>Pulsante per la data</button>
   ) 
}

export default AlertClock