const TRACK_IMAGE_SELECTOR = 'img';

export const getHorizontalScrollDistance = (track: HTMLElement, viewport: HTMLElement) =>
  Math.max(track.scrollWidth - viewport.clientWidth, 0);

export const getTrackImages = (track: HTMLElement) =>
  Array.from(track.querySelectorAll<HTMLImageElement>(TRACK_IMAGE_SELECTOR));

export const attachImageLoadRefreshListeners = (
  images: HTMLImageElement[],
  refreshScrollTrigger: () => void,
) => {
  const pendingImages = images.filter((image) => !image.complete);

  pendingImages.forEach((image) => {
    image.addEventListener('load', refreshScrollTrigger);
  });

  return () => {
    pendingImages.forEach((image) => {
      image.removeEventListener('load', refreshScrollTrigger);
    });
  };
};

export const createResizeRefreshObserver = (
  targets: HTMLElement[],
  refreshScrollTrigger: () => void,
) => {
  const resizeObserver = new ResizeObserver(() => {
    refreshScrollTrigger();
  });

  targets.forEach((target) => {
    resizeObserver.observe(target);
  });

  return resizeObserver;
};
