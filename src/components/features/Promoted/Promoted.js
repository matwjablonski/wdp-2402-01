import React, { useState } from 'react';
import styles from './Promoted.module.scss';
import { useSelector } from 'react-redux';
import { allPromoted } from '../../../redux/productsRedux';
import HotDeals from '../HotDeals/HotDeals';
import PromotedProduct from '../PromotedProduct/PromotedProduct';

const Promoted = () => {
  const [deal, setDeal] = useState(0);
  const promotedProducts = Object.values(useSelector(allPromoted));

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className={'col-4 ' + styles.hotDeal}>
            <div className={styles.dealBar}>
              <h3 className={styles.title}>hot deals</h3>
              <div className={'mr-3 ' + styles.dots}>
                <ul>
                  {[0, 1, 2].map(i => (
                    <li key={i}>
                      <a className={i === deal ? styles.active : ''}>view {i}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {promotedProducts.map(item => (
              <div key={item.id}>
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
