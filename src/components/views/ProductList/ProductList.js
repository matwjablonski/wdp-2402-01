import React from 'react';
//import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';
//import ProductBox from '../../common/ProductBox/ProductBox';
import { getProductsByCategory } from '../../../redux/productsRedux';

const ProductList = () => {
  //const { categoryId } = useParams();
  const categoryId = 'chair';

  const categoryProducts = useSelector(state =>
    getProductsByCategory(state, categoryId)
  );
  if (Array.isArray(categoryProducts)) {
    console.log('categoryProducts - to jest tablica', categoryProducts);
  } else {
    console.log('categoryProducts - to NIE JEST tablica');
  }

  return (
    <div className={styles.root}>
      <div className='container'>tu powinien być niżej zakomentowany div z listą</div>
    </div>
  );
};

// ProductList.propTypes = {};

/*
        <div className='row'>
          {categoryProducts.map(item => (
            <div key={item.id} className='col-12 col-sm-6 col-lg-4'>
              <ProductBox {...item} />
            </div>
          ))}
        </div>
*/

export default ProductList;
