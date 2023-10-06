import React, { useEffect } from 'react';
import getMusics from '../services/musicsAPI';

function Album() {
  useEffect(() => {
    async function fetchUserName() {
      try {
        const data = await getMusics('guilherme');
        return data;
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    }
    fetchUserName();
  });
  return (<h1> </h1>);
}
export default Album;
