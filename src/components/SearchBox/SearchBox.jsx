import css from './SearchBox.module.css';

function SearchBox({ onSearch }) {
  return (
    <div>
      <label htmlFor=''>
        <input type='text' className={css._searchInput} placeholder='Film name' />
      </label>
      <button className={css._searchButton} onClick={onSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchBox;
