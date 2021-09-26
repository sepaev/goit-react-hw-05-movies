import { useEffect, useState } from 'react';
import FilmList from '../components/FilmList/FilmList';
import { fetchTrandingMovies } from '../services/api';

function HomeView() {
  const [films, setFilms] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchTrandingMovies();
        if (response.status === 200) {
          setFilms(response.data.results);
        } else {
          throw new Error('Error - ' + response.status);
        }
      } catch (error) {
        console.log('rejected   ' + error.message);
        return null;
      }
    }
    fetchData();
  }, []);

  return (
    <div className='container'>
      <h1>Trending today</h1>
      {films && <FilmList films={films} />}
    </div>
  );
}

export default HomeView;
