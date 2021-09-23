function Cast({ cast }) {
  if (!cast) return;
  return (
    <div>
      <ul>
        {cast.map(({ id, name, character, profile_path }) => {
          return (
            <>
              <img
                src={'https://image.tmdb.org/t/p/w300' + profile_path}
                alt={name + ' as ' + character}
                width='100px'
              />
              <li key={id}>
                <p>{name}</p>
                <p>{character}</p>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default Cast;
