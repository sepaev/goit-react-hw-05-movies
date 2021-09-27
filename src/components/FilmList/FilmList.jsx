import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import css from './FilmList.module.css';

function FilmList({ films }) {
  const location = useLocation();
  return (
    <ul className={css._filmList}>
      {films.map(film => (
        <li key={film.id} className={css._filmItem}>
          <Link to={{ pathname: 'movies/' + film.id, state: { pathback: location } }} className={css._filmLink}>
            {film.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default FilmList;

FilmList.propTypes = {
  films: PropTypes.array,
};
