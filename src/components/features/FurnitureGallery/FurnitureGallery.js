import React from 'react';
import styles from './FurnitureGallery.module.scss';
import GalleryBox from '../../common/GalleryBox/GalleryBox';
import { getAllgallery } from '../../../redux/productsRedux';
import { useSelector } from 'react-redux';

const FurnitureGallery = () => {
  const galleryProducts = useSelector(getAllgallery);

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.galleryPanel}>
          {galleryProducts.slice(0, 1).map(item => (
            <div key={item.id} className={styles.galleryBoxContainer}>
              <GalleryBox {...item} />
            </div>
          ))}
        </div>
        <div className={styles.containerDiscount}>
          <div className={styles.discount}>
            {galleryProducts.slice(1, 2).map(products => (
              <div key={products.id} className={styles.discountImage}>
                <img src={products.image} alt={products.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FurnitureGallery;
