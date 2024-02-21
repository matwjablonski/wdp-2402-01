const getRwdModeByWidth = windowWidth => {
  const mobile = 576;
  const tablet = 992;
  const desktop = 1200;

  if (windowWidth < mobile) {
    return 'mobile';
  } else if (windowWidth < tablet) {
    return 'tablet';
  } else if (windowWidth < desktop) {
    return 'desktop';
  } else {
    return 'wideScreen';
  }
};

export default getRwdModeByWidth;
