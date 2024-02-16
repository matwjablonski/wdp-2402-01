import React from 'react';
import PropTypes from 'prop-types';

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

const HotDeals = ({ name, price, stars, image, oldPrice }) => {
  return (
    <div className={styles.root}>
      <div className={styles.photo} style={{ backgroundImage: `url(${image})` }}>
        <div className={styles.button}>
          <Button variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
        <div className={'text-white ' + styles.timer}>
          <div className={styles.amount}>25 days</div>
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
          <Button variant='outline' className={styles.button}>
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button variant='outline' className={styles.button}>
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
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  stars: PropTypes.number,
  image: PropTypes.string,
  oldPrice: PropTypes.number,
};

export default HotDeals;
