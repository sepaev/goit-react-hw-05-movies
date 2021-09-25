import FilmList from '../FilmList';

function SearchList({ films, response }) {
  return (
    <div className='container'>
      <h1>Search result</h1>
      {films && <FilmList films={films} />}
    </div>
  );
}

export default SearchList;
