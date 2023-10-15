

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

    const isPasswordValid = password.length >= 8;

    const buttonStyle = {
        backgroundColor: isPasswordValid ? 'green' : 'red',
        color: 'white',
        padding: '10px',
        border: 'none',
        cursor: 'pointer',
        width: '150px',
        borderRadius:'5px',
        margin: '7px'
      };


 

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input name="username" type="text" placeholder="Username" value={username} onChange={handleUsername} />

        <input name="password" type="password" placeholder="Password" value={password} onChange={handlePassword} />

        <input name="check" type="checkbox" checked={remember} onChange={handleRememberChange} />
        <button  type="button" onClick={handleReset}>Reset</button>

        <button  style={buttonStyle} disabled={!isPasswordValid} type="submit">Login</button>


      </form>
    </div>
  );
}