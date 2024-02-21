import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import CompareStickyBar from '../../features/CompareStickyBar/CompareStickyBar';
import Deals from '../Deals/Deals';

const Homepage = () => (
  <div className={styles.root}>
    <FeatureBoxes />
    <Deals />
    <NewFurniture />
    <CompareStickyBar />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
