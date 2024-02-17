import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { changeCompare } from '../../../redux/productsRedux';
import { updateUserStars } from '../../../redux/productsRedux';

const ProductBox = ({
  id,
  name,
  price,
  promo,
  stars,
  isFavorite,
  isCompare,
  image,
  oldPrice,
}) => {
  const dispatch = useDispatch();
  const compareLength = useSelector(
    state => state.products.filter(item => item.isCompare).length
  );

  const buttonFavoriteActive = clsx('outline', { [styles.favorite]: isFavorite });

  const buttonCompareActive = clsx('outline', {
    [styles.favorite]: isCompare,
    [styles.disabled]: compareLength >= 4 && !isCompare,
  });

  const handleCompare = e => {
    e.preventDefault();
    dispatch(changeCompare(id));
  };

  const updateStars = (e, userStars, id) => {
    e.preventDefault();
    const changeStars = {
      id,
      userStars,
    };
    dispatch(updateUserStars(changeStars));
    console.log('updated stars', changeStars);
  };

  return (
    <div className={styles.root}>
      <div className={styles.photo} style={{ backgroundImage: `url(${image})` }}>
        {promo && <div className={styles.sale}>{promo}</div>}
        <div className={styles.buttons}>
          <Button variant='small'>Quick View</Button>
          <Button variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
      </div>
      <div className={styles.content}>
        <h5>{name}</h5>
        <div className={styles.stars}>
          {[1, 2, 3, 4, 5].map(i => (
            <Button
              key={i}
              onClick={e => {
                updateStars(e, i, id);
              }}
            >
              {i <= stars ? (
                <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
              ) : (
                <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
              )}
            </Button>
          ))}
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button variant='outline' className={buttonFavoriteActive}>
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button
            variant='outline'
            className={buttonCompareActive}
            onClick={handleCompare}
          >
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
        </div>
        <div className={styles.price}>
          {oldPrice ? <span className={styles.oldPrice}>${oldPrice}</span> : ''}
          <Button noHover className={styles.priceBtn} variant='small'>
            $ {price}
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductBox.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  isFavorite: PropTypes.bool,
  isCompare: PropTypes.bool,
  image: PropTypes.string,
  oldPrice: PropTypes.number,
};

export default ProductBox;
