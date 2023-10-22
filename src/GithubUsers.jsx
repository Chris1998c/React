import React, { useState } from 'react';
import { UserSearch } from './UserSearch';
import { GithubUser } from './GithubUser';


export function GithubUsers() {
  const [user, setUser] = useState(null);

  const handleUserSearch = (username) => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
  };

  return (
    <div>
      <UserSearch onSearch={handleUserSearch} />
      {user && <GithubUser username={user.login} />}
    </div>
  );
}




  

