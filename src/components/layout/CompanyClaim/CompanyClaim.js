import React from 'react';
// import PropTypes from 'prop-types';

import styles from './CompanyClaim.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { getCount } from '../../../redux/cartRedux';

const CompanyClaim = () => {
  const cartCount = useSelector(state => getCount(state));

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row align-items-top align-items-md-center flex-wrap flex-row-reverse flex-md-row'>
          <div className={`col-12 col-md-4 text-left ${styles.phoneNumber}`}>
            <p>
              <FontAwesomeIcon className={styles.icon} icon={faMobileAlt} /> 2300 - 3560
              - 222
            </p>
          </div>
          <div className={`col-6 col-md-4 row-2 text-center ${styles.logo}`}>
            <a href='#'>
              <img src='/images/logo.png' alt='Bazar' />
            </a>
          </div>
          <div className={`col-6 col-md-4 text-right ${styles.cart}`}>
            <a href='#' className={styles.cartBox}>
              <div className={styles.cartIcon}>
                <FontAwesomeIcon className={styles.icon} icon={faShoppingBasket} />
                <div className={styles.cartCounter}>
                  <p>{cartCount}</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// CompanyClaim.propTypes = {};

export default CompanyClaim;
