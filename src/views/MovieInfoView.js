import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import FilmInfo from '../components/FilmInfo';
import { fetchMoviesById } from '../services/api';
import NotFoundView from './NotFoundView';

function MovieInfoView() {
  const [film, setFilm] = useState(null);
  const [back, setBack] = useState(null);
  const [noPage, setNoPage] = useState(false);
  const filmId = useParams().movieId;
  const location = useLocation();

  if (parseInt(filmId).toString().length !== filmId.length && !noPage) setNoPage(true);

  function getPathBack() {
    const { pathback } = location;
    if (!pathback) return back;
    if (pathback !== back) setBack(pathback);
    return pathback ? pathback : '/';
  }

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
        if (error.response.status === 404) setNoPage(true);
        return null;
      }
    }
    fetchData();
  }, [filmId]);

  if (noPage) return <NotFoundView />;
  return <div className='container'>{filmId && <FilmInfo film={film} pathBack={getPathBack()} />}</div>;
}

export default MovieInfoView;
