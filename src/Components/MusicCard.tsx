function MuscicCard(prop) {
  const { musica } = prop;
  return (
    <div>
      <ul>
        <li>
          {musica.trackId }
        </li>
        <li>
          {musica.trackName }
        </li>
        <li>
          <audio data-testid="audio-component" src="{musica.previewUrl}" controls>
            <track kind="captions" />
            O seu navegador não suporta o elemento
            {' '}
            {' '}
            <code>audio</code>
            .
          </audio>
        </li>
        <li>
          {musica.kind }
        </li>
      </ul>
    </div>
  );
}
export default MuscicCard;
