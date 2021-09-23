import { Link } from 'react-router-dom';
import css from './FilmList.module.css';

function FilmList({ films }) {
  return (
    <ul className={css._filmList}>
      {films.map(film => (
        <li key={film.id} className={css._filmItem}>
          <Link to={`/movies/${film.id}`} className={css._filmLink}>
            {film.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default FilmList;
