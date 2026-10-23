export const getImageURL = (image?: string | null): string => {
  const IMAGE_URL = import.meta.env.VITE_IMAGE_URL || '';

  if (image) {
    return `${IMAGE_URL}/${image}`;
  }
  return `${IMAGE_URL}/not-photo_512.png`;
}