import React from 'react';
import styles from './Crumbs.module.scss';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

const Crumbs = () => {
  const { categoryId } = useParams();
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.crumbs}>
          <Link to='/'>Home</Link> &gt;&nbsp; <Link to='#'>Furniture </Link> &gt;&nbsp;
          <Link to='/shop/{ categoryId }'>{categoryId}</Link>
        </div>
      </div>
    </div>
  );
};

// ProductList.propTypes = {};

export default Crumbs;
