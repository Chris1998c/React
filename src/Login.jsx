

import { useState } from "react";


export function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword]=useState("")
    const [remember, setRemember] = useState("");

    const handleUsername = (event) => {
        setUsername(event.target.value)

    };

    const handlePassword=(event)=>{
        setPassword(event.target.value)
    }

    const handleRememberChange = () => {
        setRemember(!remember);
      };



    return (
        <div>
            <input type="text" placeholder="Username" value={username} onChange={handleUsername}
            />

            <input type="password" placeholder="Password" value={password} onChange={handlePassword} />

            <input type="checkbox" checked="remeber" onChange={handleRememberChange} />
            <button type="submit">sumbit</button>
        </div>
    )
}

