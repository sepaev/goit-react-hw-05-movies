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
      </header>
      <Switch>
        <Route path='/goit-react-hw-05-movies/' exact>
          <HomeView />
        </Route>
        <Route path='/goit-react-hw-05-movies/movies'>
          <MoviesView />
        </Route>
        <Route path='/goit-react-hw-05-movies/'>
          <NotFoundView />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
