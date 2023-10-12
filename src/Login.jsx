

import { useState } from "react";


export function Login({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    const [remember, setRemember] = useState("");

    const handleUsername = (event) => {
        setUsername(event.target.value)

    };

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleRememberChange = () => {
        setRemember(!remember);
    };

    const handleLogin = () => {
        onLogin({ username, password, remember });
    };

    const handleReset=()=>{
        setUsername("");
        setPassword("");
        setRemember("");
    }

     const loginDisable = username === "" && password === ""


    return (
    <div>
            <input type="text" placeholder="Username" value={username} onChange={handleUsername}
            />

            <input type="password" placeholder="Password" value={password} onChange={handlePassword} />

            <input type="checkbox" checked="remeber" onChange={handleRememberChange} />

            <button onClick={handleLogin} disabled={loginDisable} type="submit">Login</button>
            <button onClick={handleReset}>reset</button>
        </div>
    )
}

