import React from 'react';
import { useSwipeable } from 'react-swipeable';
import PropTypes from 'prop-types';

const Swipeable = ({ leftAction, rightAction, children }) => {
  const handlers = useSwipeable({
    onSwipedLeft: () => leftAction(),
    onSwipedRight: () => rightAction(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return <div {...handlers}>{children}</div>;
};

Swipeable.propTypes = {
  leftAction: PropTypes.func,
  rightAction: PropTypes.func,
  children: PropTypes.node,
};

export default Swipeable;
