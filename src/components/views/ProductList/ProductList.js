import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { getProductsByCategory } from '../../../redux/productsRedux';
import ProductBox from '../../common/ProductBox/ProductBox';
import FilterBar from '../../layout/FilterBar/FilterBar';

const ProductList = () => {
  const { categoryId } = useParams();

  let categoryProducts = useSelector(state => getProductsByCategory(state, categoryId));

  return (
    <div className={styles.root}>
      {' '}
      <div className='container'>
        <div className='row flex-column flex-md-row'>
          <div className='col-12 order-2 col-md-9 order-md-1'>
            <div className={styles.headerBar}>
              <h3>FURNITURE - {categoryId}</h3>
            </div>
            <div className='row'>
              {categoryProducts.map(item => (
                <div key={item.id} className='col-12 col-sm-6 col-lg-4'>
                  <ProductBox {...item} />
                </div>
              ))}
            </div>
          </div>
          <div className='order-1 col-12 col-md-3 order-md-2'>aa</div>
        </div>
      </div>
      {categoryId}
    </div>
  );
};
// ProductList.propTypes = {};

export default ProductList;
