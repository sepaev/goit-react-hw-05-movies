import PropTypes from 'prop-types';

function Comment({ comment }) {
  if (!comment) return <h3>no comments</h3>;
  return comment.map((phrase, index) => {
    return <p key={index}>{phrase}</p>;
  });
}

export default Comment;

Comment.propTypes = {
  cast: PropTypes.array,
};
