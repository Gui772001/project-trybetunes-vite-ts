import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Header from './Header';
import Album from './Album';

function Search() {
  const [FormArtis, setFormArtis] = useState({
    name: '',
  });
  const [resposta, setResposta] = useState([]);
  const [resultadoTexto, setResultadoTexto] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const handdleartista = (event: { target: { name: any; value: any; }; }) => {
    const { name, value } = event.target;
    setFormArtis({
      ...FormArtis,
      [name]: value,
    });
  };

  const handleSearchClick = async () => {
    setIsLoading(true);

    try {
      const data2 = await searchAlbumsAPI(FormArtis.name);
      setResposta(data2);
      if (data2.length === 0) {
        setResultadoTexto('Nenhum álbum foi encontrado');
      } else {
        setResultadoTexto(`Resultado de álbuns de: ${FormArtis.name}`);
      }
      setFormArtis({ name: '' });
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <label>
        Procura
        <input
          data-testid="search-artist-input"
          type="text"
          name="name"
          value={ FormArtis.name }
          onChange={ handdleartista }
          disabled={ isLoading }
        />
      </label>
      <button
        data-testid="search-artist-button"
        onClick={ handleSearchClick }
        disabled={ isLoading }
      >
        Pesquisar
      </button>
      {isLoading ? (
        <p>Carregando...</p>
      ) : (
        <p>{resultadoTexto}</p>
      )}
      {resposta.length > 0 && (
        <ul>
          {resposta.map((respo) => (

            <Link
              data-testid={ `link-to-album-${respo.collectionId}` }
              to={ `/album/${respo.collectionId}` }
              key={ nanoid() }
            >
              {' '}
              <li>
                {respo.collectionName}
              </li>
            </Link>
          ))}
        </ul>
      )}
      <Album />
      <Header />
    </div>
  );
}

export default Search;
