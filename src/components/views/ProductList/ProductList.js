import React from 'react';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';
import { getAll } from '../../../redux/productsRedux';

const ProductList = () => {
  const productsAll = useSelector(state => getAll(state));
  console.log(typeof productsAll, productsAll);
  const arr = [{ id: 'bobby' }, { id: 'hadz' }, { id: 'com' }];

  return (
    <div className={styles.root}>
      <div className='row'>
        {arr.map(item => (
          <div key={item.id} className='col-12 col-sm-6 col-lg-4'>
            {item.id}
          </div>
        ))}
      </div>
    </div>
  );
};

// ProductList.propTypes = {};

export default ProductList;
