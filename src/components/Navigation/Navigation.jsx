import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

function Navigation() {
  return (
    <nav className={css._nav}>
      <NavLink exact to='/goit-react-hw-05-movies/' className={css._link} activeClassName={css._activeLink}>
        Home
      </NavLink>
      <NavLink to='/goit-react-hw-05-movies/movies' className={css._link} activeClassName={css._activeLink}>
        Movies
      </NavLink>
    </nav>
  );
}

export default Navigation;
