import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';
import { useParams } from 'react-router';

const ProductList = () => {
  const { categoryId } = useParams();
  return <div className={styles.root}>This is ProductList {categoryId}</div>;
};
// ProductList.propTypes = {};

export default ProductList;
