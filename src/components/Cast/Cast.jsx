import PropTypes from 'prop-types';
import { Fragment } from 'react';
import nophoto from '../../images/no-image-available.png';
function Cast({ cast }) {
  if (!cast) return;
  return (
    <div>
      <ul>
        {cast.map(({ id, name, character, profile_path }) => {
          const imgLink = profile_path ? 'https://image.tmdb.org/t/p/w300' + profile_path : nophoto;
          return (
            <Fragment key={id + '_0'}>
              <img src={imgLink} alt={name + ' as ' + character} width='100px' key={id + '_1'} />
              <li key={id + '_2'}>
                <p key={id + '_3'}>{name}</p>
                <p key={id + '_4'}>{character}</p>
              </li>
            </Fragment>
          );
        })}
      </ul>
    </div>
  );
}

export default Cast;

Cast.propTypes = {
  cast: PropTypes.array,
};
