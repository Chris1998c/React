import React from "react";


function Message(){
    return(
        <div>
        <h2>Hello,World! </h2>

<p>"What a beautiful day!".</p>
</div>
)}


function App(){
  return(
    <div>
      <Message/>
      <Message/>
      <Message/>
    </div>
  )
}

export default App
