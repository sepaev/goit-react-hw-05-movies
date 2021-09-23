import { Route, Switch } from 'react-router';
import HomeView from './views/HomeView';
import MoviesView from './views/MoviesView';
import Navigation from './components/Navigation';
import NotFoundView from './views/NotFoundView';
import { SITE_URL } from './consts/consts';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Navigation />
      </header>
      <Switch>
        <Route path={SITE_URL + '/'} exact>
          <HomeView />
        </Route>
        <Route path={SITE_URL + '/movies'}>
          <MoviesView />
        </Route>
        <Route path={SITE_URL + '/'}>
          <NotFoundView />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
