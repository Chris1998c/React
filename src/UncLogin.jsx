import React from "react";



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

        <button className="bottone" type="submit" onClick={unLogin}>Login</button>
      </form>
    </div>
  );
  }