import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { setRwdMode } from '../../../redux/rwdModeRedux';
import getRwdModeByWidth from '../../../utils/getRwdMode';

const MainLayout = ({ children }) => {
  const dispatch = useDispatch();
  const handleResize = useCallback(() => {
    const windowWidth = window.innerWidth;
    const rwdMode = getRwdModeByWidth(windowWidth);
    dispatch(setRwdMode(rwdMode));
  }, [dispatch]);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dispatch, handleResize]);

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
