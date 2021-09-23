import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { SITE_URL } from '../../consts/consts';

function Navigation() {
  return (
    <nav className={css._nav}>
      <NavLink exact to={SITE_URL + '/'} className={css._link} activeClassName={css._activeLink}>
        Home
      </NavLink>
      <NavLink to={SITE_URL + '/movies'} className={css._link} activeClassName={css._activeLink}>
        Movies
      </NavLink>
    </nav>
  );
}

export default Navigation;
