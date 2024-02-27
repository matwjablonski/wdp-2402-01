import React, { useState } from 'react';
import styles from './PromotedProduct.module.scss';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Swipeable from '../../common/Swipeable/Swipeable';

const PromotedProduct = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const images = [
    'images/products/bed_1.jpg',
    'images/products/bed_2.jpg',
    'images/products/bed_3.jpg',
  ];

  const scrollLeft = event => {
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    if (!isAnimating && currentImageIndex > 0) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentImageIndex(prevIndex => prevIndex - 1);
        setIsAnimating(false);
      }, 500);
    }
  };

  const scrollRight = event => {
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    if (!isAnimating && currentImageIndex < images.length - 1) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentImageIndex(prevIndex => prevIndex + 1);
        setIsAnimating(false);
      }, 500);
    }
  };

  return (
    <Swipeable leftAction={scrollLeft} rightAction={scrollRight}>
      <div className={`${styles.root} ${isAnimating ? styles.fade : ''}`}>
        <div className={styles.ProInfo}>
          <img src={images[currentImageIndex]} alt={`bed_${currentImageIndex + 1}`} />
          <div className={styles.infoBar}>
            <div className={styles.infoTexts}>
              <p className={styles.mainTitle}>
                indoor <b>furniture</b>
              </p>
              <p className={styles.subtitle}>save up to 50% of all furniture</p>
            </div>
            <div className={styles.button}>
              <Button>Shop now</Button>
            </div>
          </div>
        </div>
        <div className={styles.buttons}>
          <Button variant='small' onClick={scrollLeft}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </Button>
          <Button variant='small' onClick={scrollRight}>
            <FontAwesomeIcon icon={faAngleRight} />
          </Button>
        </div>
      </div>
    </Swipeable>
  );
};

export default PromotedProduct;
