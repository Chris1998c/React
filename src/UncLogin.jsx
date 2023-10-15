import React from "react";

// L'API FormData è semplice e facile da usare però non è ideale per i componenti controllati, anche se credo potrebbe variare in base al progetto il suo utilizzo.

export function UncLogin({ unLogin }) {

  const handleLogin = (event) => {
    
    event.preventDefault ();

const formData= new FormData(event.target);
const username= formData.get("username");
const password= formData.get("password");
const remember = formData.get("check");


    unLogin({ username, password, remember });
    console.log(username,password,remember)

    event.target.reset();
  };


  return (
    <div>
      <form onSubmit={handleLogin}>

        <input name="username" type="text" placeholder="Username"  />

        <input name="password" type="password" placeholder="Password"  />

        <input name="check" type="checkbox"  />

        <button type="button" onClick={(event)=>event.target.reset}>Reset</button>

        <button className="bottone" type="submit" onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
  }