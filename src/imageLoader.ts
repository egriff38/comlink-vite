const LOADER_ID = "image-loader";
export const getImageLoader = () => {
  const imageLoader = document.getElementById(LOADER_ID);
  if (!imageLoader || !(imageLoader instanceof HTMLInputElement))
    throw `Cannot find #${LOADER_ID} input`;
  return imageLoader;
};

export const convertImageBinToRGBArray = (
  img: ArrayBuffer
): Uint8ClampedArray => {
  const canvas = new HTMLCanvasElement().getContext("2d");
  if (!canvas) throw "Context 2d not supported";
  const image = new Image();
  // TODO
  return null as never;
};
