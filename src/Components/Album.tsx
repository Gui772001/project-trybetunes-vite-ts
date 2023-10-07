import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getMusics from '../services/musicsAPI';
import MuscicCard from './MusicCard';

function Album() {
  const [SalvarAlbum, setSalvarAlbum] = useState([]);
  const [SalvarMusica, setSalvarMusica] = useState([]);
  const { id } = useParams<{ id?:string } >();
  useEffect(() => {
    async function fetchUserName() {
      if (id) {
        try {
          const data = await getMusics(id);
          const Album = data[0];
          setSalvarAlbum(Album);
          const musica = data.slice(1);
          setSalvarMusica(musica);
        } catch (error) {
          console.error('Erro ao buscar dados:', error);
        }
      }
    }
    fetchUserName();
  }, [id]);
  return (
    <>
      <p data-testid="album-name">{SalvarAlbum.collectionName}</p>
      <ul data-testid="artist-name">
        {SalvarAlbum.artistName}
      </ul>
      {SalvarMusica.map((musica, index) => (
        <MuscicCard key={ index } musica={ musica } />))}
    </>

  );
}
export default Album;
