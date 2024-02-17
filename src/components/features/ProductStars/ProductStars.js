import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ProductStars.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import Button from '../../common/Button/Button';
import { updateUserStars } from '../../../redux/productsRedux';

const ProductStars = ({ id, stars, userStars }) => {
  const dispatch = useDispatch();

  const [lastHover, setLastHover] = useState(0);

  let actualStars = stars;
  let styleStar = 'blackStar';

  if (userStars > 0) {
    actualStars = userStars;
  }

  if (userStars > 0 || lastHover > 0) {
    styleStar = 'brownStar';
  }

  const updateStars = (e, userStars, id) => {
    e.preventDefault();
    const changeStars = {
      id,
      userStars,
    };
    dispatch(updateUserStars(changeStars));
  };

  const updateStarsVievOn = (e, i) => {
    e.preventDefault();
    if (lastHover !== i) setLastHover(i);
  };

  const updateStarsVievOff = (e, i, actualStars) => {
    e.preventDefault();
    setLastHover(0);
  };

  return (
    <div className={styles[`${styleStar}`]}>
      {[1, 2, 3, 4, 5].map(i => (
        <Button
          key={i}
          onClick={e => {
            updateStars(e, i, id);
          }}
          onMouseOver={e => {
            updateStarsVievOn(e, i);
          }}
          onMouseOut={e => {
            updateStarsVievOff(e, i, actualStars);
          }}
        >
          {i <= actualStars || i <= lastHover ? (
            <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
          )}
        </Button>
      ))}
    </div>
  );
};

ProductStars.propTypes = {
  id: PropTypes.string,
  stars: PropTypes.number,
  userStars: PropTypes.number,
};

export default ProductStars;
