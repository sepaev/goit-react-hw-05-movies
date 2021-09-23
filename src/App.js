import { Route, Switch, useRouteMatch } from 'react-router-dom';
import HomeView from './views/HomeView';
import MoviesView from './views/MoviesView';
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
        <Route path={url + '/'} exact>
          <HomeView />
        </Route>
        <Route path={url + '/movies'}>
          <MoviesView />
        </Route>
        <Route path={url + '/'}>
          <NotFoundView />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
