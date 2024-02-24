import React from 'react';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';
import { getAll } from '../../../redux/productsRedux';

const ProductList = () => {
  const productsAll = useSelector(state => getAll(state));
  console.log(typeof productsAll, productsAll);

  return <div className={styles.root}>sss</div>;
};

// ProductList.propTypes = {};

export default ProductList;
