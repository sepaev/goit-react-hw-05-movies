import PropTypes from 'prop-types';
import FilmList from '../FilmList';

function SearchList({ films, response, pathBack }) {
  if (!films) return <h2>loading...</h2>;
  return (
    <div className='container'>
      <h1>Search result</h1>
      {films && <FilmList films={films} pathBack={pathBack} response={response} />}
      {films.length === 0 && <h2>Not found. Please search another film.</h2>}
    </div>
  );
}

export default SearchList;

SearchList.propTypes = {
  films: PropTypes.array,
  response: PropTypes.object,
  pathBack: PropTypes.string,
};
