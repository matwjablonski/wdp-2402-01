import React from 'react';
import PropTypes from 'prop-types';
import { toggleFavorite } from '../../../redux/productsRedux';
import clsx from 'clsx';
import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { changeCompare } from '../../../redux/productsRedux';
import ProductStars from '../../features/ProductStars/ProductStars';

const ProductBox = ({
  id,
  name,
  price,
  promo,
  stars,
  userStars,
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

  const handleFavoriteClick = e => {
    e.preventDefault();
    dispatch(toggleFavorite(id));
  };

  const handleCompare = e => {
    e.preventDefault();
    dispatch(changeCompare(id));
  };

  return (
    <div className={styles.root}>
      <div className={styles.photo} style={{ backgroundImage: `url(${image})` }}>
        {promo && <div className={styles.sale}>{promo}</div>}
        <div className={styles.buttons}>
          <Button variant='small'>Quick View</Button>
          <Button variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO BASKET
          </Button>
        </div>
      </div>
      <div className={styles.content}>
        <h5>{name}</h5>
        <ProductStars stars={stars} userStars={userStars} id={id} />
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button
            variant='outline'
            className={buttonFavoriteActive}
            onClick={handleFavoriteClick}
          >
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
  userStars: PropTypes.number,
  isFavorite: PropTypes.bool,
  isCompare: PropTypes.bool,
  image: PropTypes.string,
  oldPrice: PropTypes.number,
};

export default ProductBox;
