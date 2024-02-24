import React, { useState, useEffect, useRef } from 'react';
import styles from './Promoted.module.scss';
import { useSelector } from 'react-redux';
import { allPromoted } from '../../../redux/promotedRedux';
import HotDeals from '../HotDeals/HotDeals';
import PromotedProduct from '../PromotedProduct/PromotedProduct';

const Promoted = () => {
  const [deal, setDeal] = useState(0);
  const [autoplayPaused, setAutoplayPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const promotedProducts = useSelector(allPromoted);
  const intervalRef = useRef(null);

  const handleDealChange = index => {
    setDeal(index);
    pauseAutoplay();
  };

  const pauseAutoplay = () => {
    setAutoplayPaused(true);
    setTimeout(() => {
      setAutoplayPaused(false);
    }, 10000);
  };

  useEffect(() => {
    const handleAutoplay = () => {
      if (!autoplayPaused) {
        setDeal(prevDeal => (prevDeal + 1) % 3);
      }
    };

    intervalRef.current = setInterval(handleAutoplay, 3000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [autoplayPaused]);

  useEffect(() => {
    setIsAnimating(true);
    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 300);
    return () => clearTimeout(timeout);
  }, [deal]);

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div
            className={
              'col-4 ' + styles.hotDeal + (isAnimating ? ` ${styles.fade}` : '')
            }
          >
            <div className={styles.dealBar}>
              <h3 className={styles.title}>hot deals</h3>
              <div className={'mr-3 ' + styles.dots}>
                <ul>
                  {[0, 1, 2].map(i => (
                    <li key={i}>
                      <a
                        onClick={() => handleDealChange(i)}
                        className={i === deal ? styles.active : ''}
                      >
                        view {i}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {promotedProducts.map((item, index) => (
              <div key={item.id} style={{ display: index === deal ? 'block' : 'none' }}>
                <HotDeals {...item} />
              </div>
            ))}
          </div>
          <div className={'col-8 ' + styles.promotedProduct}>
            <PromotedProduct />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promoted;
