import { Route, Switch } from 'react-router';
import HomeView from './views/HomeView';
import MoviesView from './views/MoviesView';
import Navigation from './components/Navigation';
import NotFoundView from './views/NotFoundView';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Navigation />
        <Switch>
          <Route path='/' exact>
            <HomeView />
          </Route>
          <Route path='/movies'>
            <MoviesView />
          </Route>
          <Route path='/'>
            <NotFoundView />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
