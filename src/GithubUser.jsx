import React, { useState } from "react";
import useGithubUser from "./useGithubUser";

export function GithubUser() {
    const [username, setUsername] = useState("");
    const { data, loading, error, fetchData } = useGithubUser();

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleFetchUser = () => {
        if (username) {
            fetchData(username);
        }
    };

    return (
        <div>
            <h1>Ricerca Utente </h1>
            <input type="text" placeholder="Username GitHub" value={username}
                onChange={handleUsernameChange} />
            <button onClick={handleFetchUser}>Cerca</button>
            {loading && <h3>Caricamento...</h3>}
            {error && <h3>Errore: {error.message}</h3>}
            {data && (
                <div>
                    <h2>Nome: {data.name}</h2>
                    <h3>Login: {data.login}</h3>
                    <img className="avatar" src={data.avatar_url} alt={data.login} />
                </div>
            )}
        </div>
    );
}
