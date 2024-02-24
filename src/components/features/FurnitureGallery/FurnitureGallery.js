import React from 'react';
import styles from './FurnitureGallery.module.scss';
import GalleryBox from '../../common/GalleryBox/GalleryBox';
import { getAllgallery } from '../../../redux/productsRedux';
import { useSelector } from 'react-redux';
import Button from '../../common/Button/Button';

const FurnitureGallery = () => {
  const galleryProducts = useSelector(getAllgallery);

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row flex-row align-items-start justify-content-between align-items-stretch'>
          <div className='col-6'>
            <GalleryBox {...galleryProducts[0]} />
          </div>
          <div className='col-6'>
            <div className={styles.rootDiscount}>
              {galleryProducts.slice(1, 2).map(products => (
                <div key={products.id} className={styles.discount}>
                  <div className={styles.discountImageContainer}>
                    <img
                      src={products.image}
                      alt={products.name}
                      className={styles.discountImage}
                    />
                  </div>
                  <div className={styles.titleDiscount}>
                    <div className={styles.form}>
                      FROM
                      <p className={styles.price}>$50.80</p>
                    </div>
                    <h4 className={styles.title}>Bedroom Bed</h4>
                    <div className={styles.button}>
                      <Button>Shop now</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FurnitureGallery;
