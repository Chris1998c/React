

import { useState } from "react";

export function Login({ onLogin }) {
    const [username, setUsername] = useState("");

    const [password, setPassword] = useState("");

    const [remember, setRemember] = useState(""); 
  
    const handleUsername = (event) => {
      setUsername(event.target.value);
    };
  
    const handlePassword = (event) => {
      setPassword(event.target.value);
    };
  
    const handleRememberChange = () => {
      setRemember(!remember); 
    };
  
    const handleLogin = (event) => {
        console.log(username, password, remember)
        event.preventDefault()

      };
     
    const handleReset = () => {
      setUsername("");
      setPassword("");
      setRemember(""); 
    };


     const loginDisable = username === "" && password === ""; 

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input name="username" type="text" placeholder="Username" value={username} onChange={handleUsername} />

        <input name="password" type="password" placeholder="Password" value={password} onChange={handlePassword} />

        <input name="check" type="checkbox" checked={remember} onChange={handleRememberChange} />
        <button  type="button" onClick={handleReset}>Reset</button>

        <button className="bottone" type="submit" disabled={loginDisable}>Login</button>


      </form>
    </div>
  );
}