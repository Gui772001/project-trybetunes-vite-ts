import React, { useState } from 'react';

function MusicCard(props) {
  const { musica } = props;
  const [favoritada, setFavoritada] = useState(false);

  const handleCheckboxChange = () => {
    setFavoritada(!favoritada);
  };

  return (
    <div>
      <ul>
        <li>{musica.trackId}</li>
        <li>{musica.trackName}</li>
        <li>
          <audio data-testid="audio-component" src={ musica.previewUrl } controls>
            <track kind="captions" />
            O seu navegador não suporta o elemento
            {' '}
            <code>audio</code>
            .
          </audio>
        </li>
        <li>{musica.kind}</li>
        <li>
          <label
            data-testid={ `checkbox-music-${musica.trackId}` }
          >
            <input
              type="checkbox"
              checked={ favoritada }
              onChange={ handleCheckboxChange }
            />
            <img
              src={ favoritada
                ? '/src/images/checked_heart.png'
                : '/src/images/empty_heart.png' }
              alt="favorite"
            />
          </label>
        </li>
      </ul>
    </div>
  );
}

export default MusicCard;
