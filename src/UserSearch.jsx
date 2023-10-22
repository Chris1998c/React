import { useState } from "react";


export function UserSearch({ onSearch }) {
    const [username, setUsername] = useState('');
  
    const handleSearch = () => {
      onSearch(username);
    };
  
    return (
      <div>
        <h3>Serch Users</h3>
        <input type="text" placeholder="Enter GitHub username" value={username} onChange={(e) => setUsername(e.target.value)}/>
        <button onClick={handleSearch}>Search</button>
      </div>
    );
  }