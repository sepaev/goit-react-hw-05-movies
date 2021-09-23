import { Link } from 'react-router-dom';
import css from './FilmList.module.css';
import { SITE_URL } from '../../consts/consts';

function FilmList({ films }) {
  return (
    <ul className={css._filmList}>
      {films.map(film => (
        <li key={film.id} className={css._filmItem}>
          <Link to={SITE_URL + '/movies/' + film.id} className={css._filmLink}>
            {film.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default FilmList;
