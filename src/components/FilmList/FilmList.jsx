import { Link, useRouteMatch } from 'react-router-dom';
import css from './FilmList.module.css';

function FilmList({ films }) {
  const { url } = useRouteMatch();
  return (
    <ul className={css._filmList}>
      {films.map(film => (
        <li key={film.id} className={css._filmItem}>
          <Link to={url + '/' + film.id} className={css._filmLink}>
            {film.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default FilmList;
