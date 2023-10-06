import React, { useState } from 'react';
import { createUser } from '../services/userAPI';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setForm] = useState({
    name: '',
  });
  const navigate = useNavigate();
  const handleChange = (event :React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({
      ...formData,
      [name]: value,
    });
  };
  const [loading, SetLoading] = useState(false);

  const handlebutton = async () => {
    SetLoading(true);

    await createUser(formData);
    SetLoading(false);
    navigate('/search');
  };
  const forma = formData.name.length >= 3;
  if (loading) {
    return (
      <h1>Carregando...</h1>
    );
  }
  return (
    <div>
      <label>
        Nome
        <input
          data-testid="login-name-input"
          type="text"
          name="name"
          value={ formData.name }
          onChange={ handleChange }
        />
      </label>
      <button
        data-testid="login-submit-button"
        onClick={ handlebutton }
        disabled={ !forma }
      >
        Entrar
      </button>

    </div>
  );
}

export default Login;
