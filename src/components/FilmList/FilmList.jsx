import { Link } from 'react-router-dom';
import css from './FilmList.module.css';

// function FilmList({ films, backFunc, response }) {
function FilmList({ films, pathBack = '/' }) {
  return (
    <ul className={css._filmList}>
      {films.map(film => (
        <li key={film.id} className={css._filmItem}>
          <Link to={{ pathname: 'movies/' + film.id, pathback: pathBack }} className={css._filmLink}>
            {film.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default FilmList;
