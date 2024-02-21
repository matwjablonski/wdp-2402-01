import React, { useState } from 'react';
import styles from './BrandsBar.module.scss';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Swipeable from '../../common/Swipeable/Swipeable';

const BrandsBar = () => {
  const brands = useSelector(state => state.brands);
  const [activePage, setActivePage] = useState(0);
  const brandsPerPage = 6;

  const pagesCount = Math.ceil(brands.length / brandsPerPage);

  const handleRight = () => {
    if (activePage < pagesCount - 1) setActivePage(activePage + 1);
    else setActivePage(0);
  };

  const handleLeft = () => {
    if (activePage > 0) setActivePage(activePage - 1);
    else setActivePage(pagesCount - 1);
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.panelBar}>
          <Swipeable leftAction={handleLeft} rightAction={handleRight}>
            <div className='row align-items-center justify-content-between'>
              <div className={styles.leftArrow} onClick={handleLeft}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </div>
              {brands
                .slice(activePage * brandsPerPage, (activePage + 1) * brandsPerPage)
                .map(brand => (
                  <div key={brand.id} className={styles.brand}>
                    <img src={brand.image} alt={brand.name} draggable='false' />
                  </div>
                ))}
              <div className={styles.rightArrow} onClick={handleRight}>
                <FontAwesomeIcon icon={faChevronRight} />
              </div>
            </div>
          </Swipeable>
        </div>
      </div>
    </div>
  );
};

export default BrandsBar;
