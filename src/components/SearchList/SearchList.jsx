import FilmList from '../FilmList';

function SearchList({ films, response, isMovies = false }) {
  return (
    <div className='container'>
      <h1>Search result</h1>
      {films && <FilmList films={films} isMovies={isMovies} response={response} />}
    </div>
  );
}

export default SearchList;
