import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Feedback from '../../features/Feedback/Feedback';
import Promoted from '../../features/Promoted/Promoted';
import CompareStickyBar from '../../features/CompareStickyBar/CompareStickyBar';
import BrandsBar from '../../features/BrandsBar/BrandsBar';
import Deals from '../Deals/Deals';

const Homepage = () => (
  <div className={styles.root}>
    <Promoted />
    <FeatureBoxes />
    <Deals />
    <NewFurniture />
    <BrandsBar />
    <Feedback />
    <CompareStickyBar />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
