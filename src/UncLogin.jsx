import React from "react";



 export function UncLogin({ unLogin }) {
  let usernameInput = React.createRef();
  let passwordInput = React.createRef();
  let checkInput = React.createRef();

  const handleLogin = (event) => {
    event.preventDefault();

    const username = usernameInput.current.value;
    const password = passwordInput.current.value;
    const remember = checkInput.current.checked;

    unLogin({ username, password, remember });
    console.log(username, password, remember);

    event.target.reset();
  };


  return (
    <div>
      <form onSubmit={handleLogin}>

        <input ref={usernameInput} type="text" placeholder="Username"  />

        <input ref={passwordInput} type="password" placeholder="Password"  />

        <input ref={checkInput} type="checkbox"  />

        <button type="button" onClick={(event)=>event.target.reset}>Reset</button>

        <button className="bottone" type="submit">Login</button>
      </form>
    </div>
  );
  }