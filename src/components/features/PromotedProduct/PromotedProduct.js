import React from 'react';
import styles from './PromotedProduct.module.scss';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const PromotedProduct = () => {
  return (
    <div className={styles.root}>
      <div className={styles.ProInfo}>
        <img src={`images/products/bed_1.jpg`} alt={'bed_1'} />
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
        <Button variant='small'>
          <FontAwesomeIcon icon={faAngleLeft} />
        </Button>
        <Button variant='small'>
          <FontAwesomeIcon icon={faAngleRight} />
        </Button>
      </div>
    </div>
  );
};

export default PromotedProduct;
