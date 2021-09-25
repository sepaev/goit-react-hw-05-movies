import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

function Navigation() {
  return (
    <nav className={css._nav}>
      <NavLink exact to={'/'} className={css._link} activeClassName={css._activeLink}>
        Home
      </NavLink>
      <NavLink to={'/movies'} className={css._link} activeClassName={css._activeLink}>
        Movies
      </NavLink>
    </nav>
  );
}

export default Navigation;
