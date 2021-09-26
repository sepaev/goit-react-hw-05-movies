import { useEffect, useState } from 'react';
import SearchBox from '../components/SearchBox';
import { fetchMoviesByName } from '../services/api';
import { useHistory, useLocation } from 'react-router-dom';
import SearchList from '../components/SearchList';

function MoviesView({ backFunc }) {
  const [query, setQuery] = useState('');
  const [films, setFilms] = useState(null);
  const [response, setResponse] = useState(null);
  const history = useHistory();
  const location = useLocation();
  const historyQuery = new URLSearchParams(location.search).get('query');

  function onSearch(query) {
    setQuery(query);
    setResponse(null);
  }

  useEffect(() => {
    let q = historyQuery;
    if (!q) q = query;
    if (!q) return;
    if (response) return;
    async function fetchData() {
      try {
        const response = await fetchMoviesByName(q, 1);
        if (response.status === 200) {
          const { page, total_pages, results, total_results } = response.data;
          setResponse({ page, total_pages, total_results });
          setFilms(results);
          history.push({ ...location, search: `query=${q}` });
        } else {
          throw new Error('Error - ' + response.status);
        }
      } catch (error) {
        console.log('rejected   ' + error.message);
        setResponse(null);
        setFilms(null);
        return null;
      }
    }
    fetchData();
  }, [history, historyQuery, location, query, response]);

  function getPathBack() {
    return '/movies?query=' + historyQuery;
  }
  return (
    <>
      <SearchBox onSearch={onSearch} />
      {historyQuery && <SearchList films={films} response={response} pathBack={getPathBack()} />}
    </>
  );
}

export default MoviesView;
