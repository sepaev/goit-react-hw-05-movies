import { Route, Switch } from 'react-router-dom';
import HomeView from './views/HomeView';
import MoviesView from './views/MoviesView';
import MovieInfoView from './views/MovieInfoView';
import Navigation from './components/Navigation';
import NotFoundView from './views/NotFoundView';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Navigation />
      </header>
      <Switch>
        <Route path='/' exact>
          <HomeView />
        </Route>
        <Route path='/movies/:movieId'>
          <MovieInfoView />
        </Route>
        <Route path='/movies'>
          <MoviesView />
        </Route>
        <Route path='/'>
          <NotFoundView />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
