import React from 'react';
import styles from './BrandsBar.module.scss';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const BrandsBar = () => {
  const brands = useSelector(state => state.brands);

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.panelBar}>
          <div className='row align-items-center justify-content-between'>
            <div className={styles.leftArrow}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            {brands.map(brand => (
              <div key={brand.id} className={styles.brand}>
                <img src={brand.image} alt={brand.name} />
              </div>
            ))}
            <div className={styles.rightArrow}>
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandsBar;
