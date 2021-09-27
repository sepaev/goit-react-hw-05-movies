import { NavLink, useLocation } from 'react-router-dom';
import css from './Navigation.module.css';

function Navigation() {
  const location = useLocation();
  return (
    <nav className={css._nav}>
      <NavLink exact to={'/'} className={css._link} activeClassName={css._activeLink}>
        Home
      </NavLink>
      <NavLink
        to={{ pathname: '/movies', state: { pathback: location } }}
        className={css._link}
        activeClassName={css._activeLink}
      >
        Movies
      </NavLink>
    </nav>
  );
}

export default Navigation;
