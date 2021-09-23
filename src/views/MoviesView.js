import { useEffect, useState } from 'react';
import FilmInfo from '../components/FilmInfo';
import SearchBox from '../components/SearchBox';
import { fetchMoviesById, fetchMoviesByName } from '../services/api';

function MovieView() {
  const [film, setFilm] = useState(null);
  const [searchMode, setSearchMode] = useState(true);
  const [query, setQuery] = useState('');
  function onSearch(query) {
    setQuery(query);
  }
  const newFilmId = 604;
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchMoviesById(newFilmId);
        if (response.status === 200) {
          const { id, title, poster_path, popularity, overview, genres, release_date } = response.data;
          //   console.dir(response.data);
          setFilm({ id, title, poster_path, popularity, overview, genres, release_date });
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

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchMoviesByName(query);
        if (response.status === 200) {
          //   const { id, title, poster_path, popularity, overview, genres, release_date } = response.data;
          console.dir(response.data);
          //   setFilm({ id, title, poster_path, popularity, overview, genres, release_date });
        } else {
          throw new Error('Error - ' + response.status);
        }
      } catch (error) {
        console.log('rejected   ' + error.message);
        return null;
      }
    }
    fetchData();
  }, [query]);

  if (searchMode) return <SearchBox onSearch={onSearch} />;
  return <div className='container'>{newFilmId && <FilmInfo film={film} />}</div>;
}

export default MovieView;