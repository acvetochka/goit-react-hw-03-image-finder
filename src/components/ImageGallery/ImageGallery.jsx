import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList } from './ImageGallery.styled';

export default function ImageGallery({ images }) {
  console.log(images);
  return (
    <ImageGalleryList>
      {images.map(({ id, webformatURL }) => (
        <ImageGalleryItem key={id} webformatURL={webformatURL} />
      ))}
    </ImageGalleryList>
  );
}
