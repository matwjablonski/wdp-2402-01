import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { changeCompare } from '../../../redux/productsRedux';
import clsx from 'clsx';

import styles from './HotDeals.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../../common/Button/Button';
import { addProduct } from '../../../redux/cartRedux';

const HotDeals = ({
  id,
  name,
  price,
  stars,
  image,
  oldPrice,
  isCompare,
  isFavorite,
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

  const handleAddToCart = e => {
    e.preventDefault();
    const data = {
      id,
      name,
      price,
      amount: 1,
    };
    dispatch(addProduct(data));
  };

  const handleCompare = e => {
    e.preventDefault();
    dispatch(changeCompare(id));
  };

  return (
    <div className={styles.root}>
      <div className={styles.photo} style={{ backgroundImage: `url(${image})` }}>
        <div className={styles.button}>
          <Button variant='small' onClick={handleAddToCart}>
            <FontAwesomeIcon icon={faShoppingBasket} /> ADD TO CART
          </Button>
        </div>
        <div className={'text-white ' + styles.timer}>
          <div className={styles.amount}> 25 days</div>
          <div className={styles.amount}> 10 hrs</div>
          <div className={styles.amount}> 45 mins</div>
          <div className={styles.amount}> 30 secs</div>
        </div>
      </div>
      <div className={styles.content}>
        <h5>{name}</h5>
        <div className={styles.stars}>
          {[1, 2, 3, 4, 5].map(i => (
            <a key={i} href='#'>
              {i <= stars ? (
                <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
              ) : (
                <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
              )}
            </a>
          ))}
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button variant='outline' className={styles.button}>
            <FontAwesomeIcon icon={faEye}>Watch</FontAwesomeIcon>
          </Button>
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

HotDeals.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  stars: PropTypes.number,
  image: PropTypes.string,
  oldPrice: PropTypes.number,
  isCompare: PropTypes.bool,
  isFavorite: PropTypes.bool,
};

export default HotDeals;
