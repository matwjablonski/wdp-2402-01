import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import styles from './ProductSearch.module.scss';

const ProductSearch = () => {
  const categories = useSelector(state => state.categories);
  return (
    <form action='' className={styles.root}>
      <ul className={styles.category}>
        <li>
          <span className='d-inline-flex align-items-center'>
            <FontAwesomeIcon className={styles.icon} icon={faListUl} />
            Select a category
          </span>
          <ul>
            {categories.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </li>
        <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
      </ul>
      <div className={styles.searchField}>
        <input placeholder='Search products...' type='text' />
        <button>
          <FontAwesomeIcon className={styles.icon} icon={faSearch} />
        </button>
      </div>
    </form>
  );
};

ProductSearch.propTypes = {
  children: PropTypes.node,
};

export default ProductSearch;
