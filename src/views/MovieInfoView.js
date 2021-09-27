import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import FilmInfo from '../components/FilmInfo';
import { fetchMoviesById } from '../services/api';
import NotFoundView from './NotFoundView';

function MovieInfoView() {
  const [film, setFilm] = useState(null);
  const [noPage, setNoPage] = useState(false);
  const filmId = useParams().movieId;

  if (parseInt(filmId).toString().length !== filmId.length && !noPage) setNoPage(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchMoviesById(parseInt(filmId));
        if (response.status === 200) {
          const { id, title, poster_path, popularity, overview, genres, release_date } = response.data;
          setFilm({ id, title, poster_path, popularity, overview, genres, release_date });
          setNoPage(false);
        } else {
          throw new Error('Error - ' + response.status);
        }
      } catch (error) {
        console.log('rejected   ' + error.message);
        if (error.response && error.response.status === 404) setNoPage(true);
        return null;
      }
    }
    fetchData();
  }, [filmId]);

  if (noPage) return <NotFoundView />;
  return <div className='container'>{filmId && <FilmInfo film={film} />}</div>;
}

export default MovieInfoView;
