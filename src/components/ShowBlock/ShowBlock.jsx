import { useHistory, useLocation } from 'react-router-dom';
import Cast from '../Cast';
import Reviews from '../Reviews';

function ShowBlock({ block, blockData }) {
  const history = useHistory();
  const location = useLocation();
  console.log(history);
  console.log(location);
  // history.push({ ...location, pathname: block });
  if (!blockData) return <h3>loading...</h3>;
  const { cast = [], results = [], page = 1 } = blockData;
  if (block === 'cast') return <Cast cast={cast} />;
  if (results.length > 1) return <Reviews reviews={results} page={page} />;
  return <h3>We don't have any reviews for this movie.</h3>;
}

export default ShowBlock;
