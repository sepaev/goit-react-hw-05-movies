import { Route, Switch, useRouteMatch } from 'react-router-dom';
import HomeView from './views/HomeView';
import SearchMoviesView from './views/SearchMoviesView';
import MovieInfoView from './views/MovieInfoView';
import Navigation from './components/Navigation';
import NotFoundView from './views/NotFoundView';
import { name } from '../package.json';

function App() {
  const { url } = useRouteMatch();
  return (
    <div className='App'>
      <header className='App-header'>
        <Navigation />
      </header>
      <Switch>
        <Route path={url + '/'} exact>
          <HomeView />
        </Route>
        <Route path={url + name + '/'} exact>
          <HomeView />
        </Route>
        <Route path={url + name + '/movies/:movieId'}>
          <MovieInfoView />
        </Route>
        <Route path={url + name + '/movies'}>
          <SearchMoviesView />
        </Route>
        <Route path={url + name + '/'}>
          <NotFoundView />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
