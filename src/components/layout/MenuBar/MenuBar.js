import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProductSearch from '../../features/ProductSearch/ProductSearch';

import styles from './MenuBar.module.scss';

const MenuBar = ({ children }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row align-items-center'>
        <div className='col'>
          <ProductSearch />
        </div>
        <div className={'col-auto ' + styles.menu}>
          <ul>
            <li>
              <a href='#' className={styles.active}>
                Home
              </a>
            </li>
            <li>
              <a href='#'>Furniture</a>
            </li>
            <li>
              <Link to='/shop/chair'>Chair</Link>
            </li>
            <li>
              <Link to='/shop/table'>Table</Link>
            </li>
            <li>
              <Link to='/shop/sofa'>Sofa</Link>
            </li>
            <li>
              <Link to='/shop/bed'>Bedroom</Link>
            </li>
            <li>
              <a href='#'>Blog</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
