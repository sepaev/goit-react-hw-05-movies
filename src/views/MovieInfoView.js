import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import FilmInfo from '../components/FilmInfo';
import { fetchMoviesById } from '../services/api';

function MovieInfoView() {
  const [film, setFilm] = useState(null);
  const filmId = useParams().movieId;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchMoviesById(filmId);
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
  }, [filmId]);

  return <div className='container'>{filmId && <FilmInfo film={film} />}</div>;
}

export default MovieInfoView;
