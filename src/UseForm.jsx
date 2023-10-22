import { useState } from 'react';

 export function useForm(initialValues = { username: '', password: '' }) {
  const [formValues, setFormValues] = useState(initialValues);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const resetForm = () => {
    setFormValues(initialValues);
  };

  return {
    formValues,
    handleInputChange,
    resetForm,
  };
}
