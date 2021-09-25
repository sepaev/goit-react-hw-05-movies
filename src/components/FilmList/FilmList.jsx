import { Link, useRouteMatch } from 'react-router-dom';
import css from './FilmList.module.css';
import { name } from '../../../package.json';

function FilmList({ films }) {
  const { url } = useRouteMatch();
  const pre = url.length === 1 ? url + name + '/' : url;
  return (
    <ul className={css._filmList}>
      {films.map(film => (
        <li key={film.id} className={css._filmItem}>
          <Link to={pre + 'movies/' + film.id} className={css._filmLink}>
            {film.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default FilmList;
