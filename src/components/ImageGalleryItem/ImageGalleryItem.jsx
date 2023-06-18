import PropTypes from 'prop-types';
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

export default function ImageGalleryItem({ image, openModal }) {
  const { id, webformatURL } = image;
  const openModaltoClick = evt => {
    evt.preventDefault();
    openModal(id);
  };

  return (
    <GalleryItem id={id} className="gallery-item">
      <GalleryItemImage src={webformatURL} alt="" onClick={openModaltoClick} />
    </GalleryItem>
  );
}

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
  }).isRequired,
  openModal: PropTypes.func.isRequired,
};
