import React from 'react';
import styles from './Deals.module.scss';
import { useSelector } from 'react-redux';

const Deals = () => {
  const dealsProd = useSelector(state => state.deals);

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row flex-column flex-md-row flex-wrap mb-5'>
          <div className={'col-12 col-md-6 mt-4'}>
            <div className={styles.deal1}>
              <img src={dealsProd[0].img} className={styles.dealImage} />
            </div>
          </div>
          <div className={'col-12 col-md-6 mt-4'}>
            <div className={styles.deal2}>
              <img src={dealsProd[1].img} className={styles.dealImage} />
            </div>
            <div className={styles.deal3}>
              <img src={dealsProd[2].img} className={styles.dealImage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;
