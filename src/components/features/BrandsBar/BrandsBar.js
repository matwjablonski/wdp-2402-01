import React, { useState } from 'react';
import styles from './BrandsBar.module.scss';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Swipeable from '../../common/Swipeable/Swipeable';

const BrandsBar = () => {
  const [activePage, setActivePage] = useState(0);

  const brands = useSelector(state => state.brands);
  const rwd = useSelector(state => state.rwdMode);

  const caluclateBrandsPerPage = rwdMode => {
    if (rwdMode === 'wideScreen') return 6;
    if (rwdMode === 'desktop') return 5;
    if (rwdMode === 'tablet') return 4;
    if (rwdMode === 'smallTablet') return 3;
    if (rwdMode === 'mobile') return 2;
  };

  const brandsPerPage = caluclateBrandsPerPage(rwd);
  const pagesCount = Math.ceil(brands.length / brandsPerPage);

  const brandsToRender = brands.slice(
    activePage * brandsPerPage,
    (activePage + 1) * brandsPerPage
  );

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
              <div className='row'>
                {brandsToRender.map(brand => (
                  <div key={brand.id} className={styles.brand}>
                    <img src={brand.image} alt={brand.name} draggable='false' />
                  </div>
                ))}
              </div>
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
