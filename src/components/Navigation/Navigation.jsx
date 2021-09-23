import { NavLink, useRouteMatch } from 'react-router-dom';
import css from './Navigation.module.css';
import { name } from '../../../package.json';

function Navigation() {
  const { url } = useRouteMatch();
  return (
    <nav className={css._nav}>
      <NavLink exact to={url + name + '/'} className={css._link} activeClassName={css._activeLink}>
        Home
      </NavLink>
      <NavLink to={url + name + '/movies'} className={css._link} activeClassName={css._activeLink}>
        Movies
      </NavLink>
    </nav>
  );
}

export default Navigation;
