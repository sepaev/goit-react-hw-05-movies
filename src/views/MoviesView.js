import { useEffect, useState } from 'react';
import SearchBox from '../components/SearchBox';
import { fetchMoviesByName } from '../services/api';
import { useHistory, useLocation } from 'react-router-dom';
import SearchList from '../components/SearchList';

function MoviesView() {
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
  const search_query = query ? query : historyQuery;

  useEffect(() => {
    if (!search_query) return;
    if (response && response.search_query === search_query) return;
    async function fetchData() {
      try {
        const response = await fetchMoviesByName(search_query, 1);
        if (response.status === 200) {
          const { page, total_pages, results, total_results } = response.data;
          setResponse({ page, total_pages, total_results, search_query });
          setFilms(results);
          history.push({ ...location, search: `query=${search_query}` });
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
  }, [history, location, response, search_query]);

  return (
    <>
      <SearchBox onSearch={onSearch} />
      {historyQuery && <SearchList films={films} response={response} />}
    </>
  );
}

export default MoviesView;
