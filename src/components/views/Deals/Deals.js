import React from 'react';
import './Deals.module.scss';

const Deals = () => {
  const deals = [
    {
      img: '/images/Deals/sofa1.jpg',
    },
    {
      img: '/images/Deals/sofa2.jpg',
    },
    {
      img: '/images/Deals/sofa3.jpg',
    },
  ];

  return (
    <section className='deals-section'>
      <p>Czemu nie działasz?</p>
      {deals.map((deal, index) => (
        <div
          key={index}
          className='deal-box'
          style={{ backgroundImage: `url(${deal.img})` }}
        ></div>
      ))}
    </section>
  );
};

export default Deals;
