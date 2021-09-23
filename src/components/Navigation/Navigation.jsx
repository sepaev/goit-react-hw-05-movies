import { NavLink, useRouteMatch } from 'react-router-dom';
import css from './Navigation.module.css';

function Navigation() {
  const { url } = useRouteMatch();
  return (
    <nav className={css._nav}>
      <NavLink exact to={url + '/'} className={css._link} activeClassName={css._activeLink}>
        Home
      </NavLink>
      <NavLink to={url + '/movies'} className={css._link} activeClassName={css._activeLink}>
        Movies
      </NavLink>
    </nav>
  );
}

export default Navigation;
