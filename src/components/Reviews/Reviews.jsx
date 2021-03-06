import PropTypes from 'prop-types';
import Comment from '../Comment';
import css from './Reviews.module.css';

function Reviews({ reviews, page }) {
  if (!reviews || reviews.length < 1) return <h3>We don't have any reviews for this movie.</h3>;
  return (
    <ul>
      {reviews.map(({ id, author, content, url }) => {
        const comment = content.split('\r\n\r\n');
        return (
          <li key={id}>
            <p className={css._autorName}>
              Author:
              <a href={url} className={css._autorLink}>
                {' '}
                {author}{' '}
              </a>
            </p>
            <Comment comment={comment} />
          </li>
        );
      })}
    </ul>
  );
}

export default Reviews;

Reviews.propTypes = {
  reviews: PropTypes.array,
  page: PropTypes.number,
};
