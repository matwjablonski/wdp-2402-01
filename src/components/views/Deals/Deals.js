import React from 'react';
import styles from './Deals.module.scss';

const Deals = () => {
  const dealsProd = [
    {
      id: 'deal-1',
      img: process.env.PUBLIC_URL + '/images/Deals/sofa1.jpg',
    },
    {
      id: 'deal-2',
      img: process.env.PUBLIC_URL + '/images/Deals/sofa2.jpg',
    },
    {
      id: 'deal-3',
      img: process.env.PUBLIC_URL + '/images/Deals/sofa3.jpg',
    },
  ];

  return (
    <section className={styles.dealbox}>
      {dealsProd.map(deal => (
        <div key={deal.id} className={styles.dealsection}>
          <img src={deal.img} alt={`Deal ${deal.id}`} className={styles.dealImage} />
        </div>
      ))}
    </section>
  );
};

export default Deals;
