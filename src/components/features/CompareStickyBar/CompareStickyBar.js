import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './CompareStickyBar.module.scss';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { getCompare, changeCompare } from '../../../redux/productsRedux';

const CompareStickyBar = () => {
  const dispatch = useDispatch();
  const compareProducts = useSelector(state => getCompare(state));
  const handleRemove = id => {
    dispatch(changeCompare(id));
  };
  if (compareProducts.length === 0) {
    return null;
  }
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.panelBar}>
          <div className={styles.heading}>
            <h3>Compare products</h3>
          </div>
        </div>
        <div className='row '>
          {compareProducts.map(product => (
            <div
              key={product.id}
              className={`col-3 ${styles.prodImg}`}
              onClick={() => handleRemove(product.id)}
            >
              <img src={product.image} alt='furniture' />
              <FontAwesomeIcon icon={faTimes} className={styles.remove} />
            </div>
          ))}
        </div>
        <div className={styles.button}>
          <Button variant='small'>Compare</Button>
        </div>
      </div>
    </div>
  );
};
export default CompareStickyBar;
