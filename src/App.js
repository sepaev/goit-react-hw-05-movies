import { Route, Switch, useRouteMatch } from 'react-router-dom';
import HomeView from './views/HomeView';
import SearchMoviesView from './views/SearchMoviesView';
import MovieInfoView from './views/MovieInfoView';
import Navigation from './components/Navigation';
import NotFoundView from './views/NotFoundView';

function App() {
  const { url } = useRouteMatch();
  return (
    <div className='App'>
      <header className='App-header'>
        <Navigation />
      </header>
      <Switch>
        <Route path={'/'} exact>
          <HomeView />
        </Route>
        <Route path={'/'} exact>
          <HomeView />
        </Route>
        <Route path={'/movies/:movieId'}>
          <MovieInfoView />
        </Route>
        <Route path={'/movies'}>
          <SearchMoviesView />
        </Route>
        <Route path={'/'}>
          <NotFoundView />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
