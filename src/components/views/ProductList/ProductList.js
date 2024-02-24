import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';
import { useParams } from 'react-router';
import ProductBox from '../../common/ProductBox/ProductBox';
import { useSelector } from 'react-redux';
import { getProductsByCategory } from '../../../redux/productsRedux';
import BrandsBar from '../../features/BrandsBar/BrandsBar';
import CompareStickyBar from '../../features/CompareStickyBar/CompareStickyBar';
import FilterBar from '../../layout/FilterBar/FilterBar';
import Crumbs from '../../features/Crumbs/Crumbs';

const ProductList = () => {
  const { categoryId } = useParams();

  const categoryProducts = useSelector(state =>
    getProductsByCategory(state, categoryId)
  );

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.header}>
          <div className={styles.infoTexts}>
            <p className={styles.mainTitle}>
              indoor <b>furniture</b>
            </p>
            <p className={styles.subtitle}>save up to 50% of all furniture</p>
          </div>
        </div>
      </div>
      <Crumbs />
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
          <div className='order-1 col-12 col-md-3 order-md-2'>
            <FilterBar />
          </div>
        </div>
      </div>
      <BrandsBar />
      <CompareStickyBar />
    </div>
  );
};

// ProductList.propTypes = {};

export default ProductList;
