import FilmList from '../FilmList';

function SearchList({ films, response, pathBack }) {
  return (
    <div className='container'>
      <h1>Search result</h1>
      {films && <FilmList films={films} pathBack={pathBack} response={response} />}
    </div>
  );
}

export default SearchList;
