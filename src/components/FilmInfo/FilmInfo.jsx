import css from './FilmInfo.module.css';
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { fetchActorsByMovieId, fetchReviewsByMovieId } from '../../services/api';
import ShowBlock from '../ShowBlock';

function FilmInfo({ film }) {
  const [block, setBlock] = useState(null);
  const [blockData, setBlockData] = useState(null);
  const { goBack } = useHistory();

  function changeBlock(e) {
    e.preventDefault();
    const blockName = e.target.innerText.toLowerCase();
    if (!block || block !== blockName) {
      setBlock(blockName);
      return;
    }
    if (block === blockName) {
      setBlock(null);
      return;
    }
  }
  function getYear(dateString) {
    return dateString.split('-')[0];
  }
  useEffect(() => {
    if (!film) return <h1>loading...</h1>;
    const { id } = film;

    async function fetchData(block) {
      try {
        let response;
        if (block === 'cast') {
          response = await fetchActorsByMovieId(id);
        } else if (block === 'reviews') {
          response = await fetchReviewsByMovieId(id);
        } else {
          setBlockData(null);
          return;
        }
        if (response.status === 200) {
          setBlockData(response.data);
        } else {
          throw new Error('Error - ' + response.status);
        }
      } catch (error) {
        console.log('rejected   ' + error.message);
        return null;
      }
    }
    fetchData(block);
  }, [film, block]);

  if (!film) return <h1>loading...</h1>;
  const { id, title, poster_path, popularity, overview, genres, release_date } = film;
  const year = getYear(release_date);
  console.log(year);
  const genresString = genres.map(({ name }) => name).join(', ');

  return (
    <div>
      <button className={css._goBackButton} onClick={goBack}>
        Go Back
      </button>
      <section key={id} className={css._infoSection}>
        <h1 className='visually-hidden'>Film info</h1>
        <div className={css._imageWrapper}>
          <img src={'https://image.tmdb.org/t/p/w500' + poster_path} alt={title} className={css._posterImage} />
        </div>
        <div>
          <h2>{`${title} (${year})`}</h2>
          <p>User Score: {popularity.toFixed(0)} %</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          <p>{genresString}</p>
        </div>
      </section>
      <hr />
      <section>
        <h1>Additional information</h1>
        <ul>
          <li>
            <Link to='++/cast' onClick={changeBlock}>
              Cast
            </Link>
          </li>
          <li>
            <Link to='++/reviews' onClick={changeBlock}>
              Reviews
            </Link>
          </li>
        </ul>
      </section>
      <hr />
      <section>{block && <ShowBlock block={block} blockData={blockData} />}</section>
    </div>
  );
}

export default FilmInfo;
