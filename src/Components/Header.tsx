import React, { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { getUser } from '../services/userAPI';

function Layout() {
  const [userName, setUserName] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchUserName() {
      try {
        const data = await getUser();
        setUserName(data.name);
      } catch (error) {
        console.error('Erro ao buscar o nome do usuário:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchUserName();
  }, []);

  return (
    <header data-testid="header-component">
      <NavLink data-testid="link-to-search" to="/search">Search</NavLink>
      <NavLink data-testid="link-to-favorites" to="/favorites">Favoritos</NavLink>
      <NavLink data-testid="link-to-profile" to="/profile">Profile</NavLink>

      {isLoading ? (
        <p data-testid="header-user-name">Carregando...</p>
      ) : (
        <p data-testid="header-user-name">
          Bem-vindo,
          {' '}
          {userName}
        </p>
      )}
    </header>
  );
}

export default Layout;
