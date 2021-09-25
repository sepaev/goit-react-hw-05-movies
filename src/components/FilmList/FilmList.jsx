import { Link, useRouteMatch } from 'react-router-dom';
import css from './FilmList.module.css';

function FilmList({ films, isMovies }) {
  const { path } = useRouteMatch();
  console.log(path);
  const urlLink = isMovies ? path : path + 'movies';
  return (
    <ul className={css._filmList}>
      {films.map(film => (
        <li key={film.id} className={css._filmItem}>
          <Link to={urlLink + '/' + film.id} className={css._filmLink}>
            {film.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default FilmList;
