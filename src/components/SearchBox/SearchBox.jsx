import { useState } from 'react';
import css from './SearchBox.module.css';

function SearchBox({ onSearch }) {
  const [query, setQuery] = useState('');
  function onChange(e) {
    setQuery(e.target.value);
  }
  function onKeyDown(e) {
    if (e.code === 'Enter') onClick();
  }

  function onClick() {
    onSearch(query);
    setQuery('');
  }

  return (
    <div>
      <label htmlFor=''>
        <input
          type='text'
          onChange={onChange}
          onKeyDown={onKeyDown}
          className={css._searchInput}
          value={query}
          placeholder='Film name'
        />
      </label>
      <button className={css._searchButton} onClick={onClick}>
        Search
      </button>
    </div>
  );
}

export default SearchBox;
