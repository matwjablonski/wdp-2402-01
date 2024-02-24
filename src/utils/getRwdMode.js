const getRwdModeByWidth = windowWidth => {
  const smallMobile = 400;
  const mobile = 576;
  const smallTablet = 768;
  const tablet = 992;
  const desktop = 1200;

  if (windowWidth < smallMobile) {
    return 'smallMobile';
  } else if (windowWidth < mobile) {
    return 'mobile';
  } else if (windowWidth < smallTablet) {
    return 'smallTablet';
  } else if (windowWidth < tablet) {
    return 'tablet';
  } else if (windowWidth < desktop) {
    return 'desktop';
  } else {
    return 'wideScreen';
  }
};

export default getRwdModeByWidth;
