import React from "react";


//  un secondo metodo per accedere ai dati potrebbe essere document.getelementbyid

export function UncLogin() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target; 
    const username = form.elements.username.value;
    const password = form.elements.password.value;
    const remember = form.elements.check.checked;

    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Remember:", remember);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="username" type="text" placeholder="Username" />
        <input name="password" type="password" placeholder="Password" />
        <input name="check" type="checkbox" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
