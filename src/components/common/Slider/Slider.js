import React from 'react';
import styles from './Slider.module.scss';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Slider = () => {
  const slider = useSelector(state => state.gallery);

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.panelBar}>
          <div className='row align-items-center'>
            <div className={styles.leftArrow}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            {slider.map(products => (
              <div key={products.id} className={styles.slider}>
                <img src={products.image} alt={products.name} />
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

export default Slider;
