import React from 'react';
import styles from './Crumbs.module.scss';

const Crumbs = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.crumbs}>Home - Furniture </div>
      </div>
    </div>
  );
};

// ProductList.propTypes = {};

export default Crumbs;
