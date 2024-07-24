export const disableScroll = () => {
  window.scrollTo(0, 0);
  document.body.style.overflow = 'hidden';
};

export const enableScroll = () => {
  document.body.style.overflow = '';
};
