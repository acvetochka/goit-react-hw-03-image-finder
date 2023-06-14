import PropTypes from 'prop-types';
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

export default function ImageGalleryItem({ id, webformatURL }) {
  return (
    <GalleryItem key={id} className="gallery-item">
      <GalleryItemImage src={webformatURL} alt="" />
    </GalleryItem>
  );
}
