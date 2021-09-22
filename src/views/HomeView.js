import { useState } from 'react';
import { Link } from 'react-router-dom';

function HomeView() {
  const [films, setFilms] = useState(null);

  return (
    <>
      <h1>Trending today</h1>
      {films &&
        films.map(film => (
          <li key={film.id}>
            <Link to={`/movies/${film.id}`}>{film.title}</Link>
          </li>
        ))}
    </>
  );
}

export default HomeView;
