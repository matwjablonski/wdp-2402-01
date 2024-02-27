import React from 'react';
import PropTypes from 'prop-types';
import styles from './GalleryBox.module.scss';
import Slider from '../Slider/Slider.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEye,
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../../common/Button/Button.js';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const GalleryBox = ({
  id,
  image,
  price,
  stars,
  oldPrice,
  name,
  isFavorite,
  isCompare,
}) => {
  return (
    <div className={styles.root}>
      <div className={'col-auto ' + styles.heading}>
        <h3>FURNITURE GALLERY</h3>
      </div>
      <div className={styles.galleryBox}>
        <div className={styles.menu}>
          <ul>
            <li>
              <a href='#'>FEATURED</a>
            </li>
            <li>
              <a href='#'>TOP SELLER</a>
            </li>
            <li>
              <a href='#'>SALE OFF</a>
            </li>
            <li>
              <a href='#'>TOP RATED</a>
            </li>
          </ul>
        </div>
        <div className={styles.thumbnail}>
          <img src={image} alt={`Product ${id}`} />
          <div className={styles.newPrice}>
            <div className={styles.priceWrapper}>
              <div className={styles.price}>${price}</div>
              <div className={styles.oldPrice}>${oldPrice}</div>
            </div>
          </div>
          <div className={styles.titleBox}>
            <h4>{name}</h4>
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
          <div className={styles.actions}>
            <div className={styles.outlines}>
              <Button
                variant='outline'
                className={styles.button}
                data-tooltip-id='my-tooltip-4'
              > 
                <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
              </Button>
              <Tooltip id='my-tooltip-4' content='Add to favorite' />
              <Button
                variant='outline'
                className={styles.button}
                data-tooltip-id='my-tooltip-3'
              >
                <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
              </Button>
              <Tooltip id='my-tooltip-3' content='Add to compare' />
              <Button
                variant='outline'
                className={styles.button}
                data-tooltip-id='my-tooltip-2'
              >
                <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
              </Button>
              <Tooltip id='my-tooltip-2' content='Add to watch' />
              <Button
                variant='outline'
                className={styles.button}
                data-tooltip-id='my-tooltip-1'
              >
                <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon>
              </Button>
              <Tooltip id='my-tooltip-1' content='Add to cart' />
            </div>
          </div>
        </div>
        <div>
          <Slider />
        </div>
      </div>
    </div>
  );
};

GalleryBox.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number,
  stars: PropTypes.number.isRequired,
  oldPrice: PropTypes.number,
  name: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  isCompare: PropTypes.bool.isRequired,
};

export default GalleryBox;
