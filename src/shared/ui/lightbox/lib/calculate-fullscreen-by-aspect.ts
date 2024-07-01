export const parseAspectRatio = (aspect: string) => {
  const [width, height] = aspect.split('/').map(Number);

  return width / height;
};

export const calculateFullscreenByAspect = (
  aspect: string,
  windowWidth: number,
  windowHeight: number,
) => {
  if (typeof window !== 'undefined') {
    const windowAspect = windowWidth / windowHeight;
    const imageAspect = parseAspectRatio(aspect);

    if (windowAspect >= imageAspect) {
      const imgHeight = windowHeight * 0.94;

      return { width: imgHeight * imageAspect, height: imgHeight };
    }
    const imgWidth = windowWidth * 0.94;

    return { width: imgWidth, height: imgWidth / imageAspect };
  }

  return { width: 0, height: 0 };
};
