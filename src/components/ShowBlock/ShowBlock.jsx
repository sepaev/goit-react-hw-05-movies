import Cast from '../Cast';
import Reviews from '../Reviews';

function ShowBlock({ block, blockData }) {
  if (!blockData) return <h3>loading...</h3>;
  const { cast = [], results = [], page = 1 } = blockData;
  if (cast.length > 0) return <Cast cast={cast} />;
  if (results.length > 0) return <Reviews reviews={results} page={page} />;
  return <h3>loading...</h3>;
}

export default ShowBlock;
