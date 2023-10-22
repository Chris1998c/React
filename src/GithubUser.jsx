import React from "react";
import { useGithubUser } from "./useGithubUser";

export function GithubUser({ username }) {
  const data = useGithubUser(username);

  return (
    <div>
      {data ? (
        <div>
          <h1>Name: {data.name}</h1>
          <h3>Login: {data.login}</h3>
          <img className="avatar" src={data.avatar_url} alt="" />
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}