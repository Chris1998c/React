import React from 'react';
import { useForm } from './UseForm';

export function MyForm() {
  const { formValues, handleInputChange, resetForm } = useForm({
    username: '',
    password: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" value={formValues.username}onChange={handleInputChange}placeholder="Username"/>
      <input type="password" name="password" value={formValues.password} onChange={handleInputChange}
        placeholder="Password"/>
      <button type="submit">Submit</button>
      <button type="button" onClick={resetForm}>Reset</button>
    </form>
  );
}
