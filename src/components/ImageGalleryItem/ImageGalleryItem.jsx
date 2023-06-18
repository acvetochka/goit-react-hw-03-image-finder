import PropTypes from 'prop-types';
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

export default function ImageGalleryItem({ image, openModal }) {
  // console.log(openModal(id));
  const { id, webformatURL } = image;

  const openModaltoClick = evt => {
    evt.preventDefault();
    openModal(id);
  };

  // evt => {
  //   evt.preventDefault();
  //   openModal(id);
  // }
  return (
    <GalleryItem id={id} className="gallery-item">
      <GalleryItemImage
        src={webformatURL}
        alt=""
        // dataSource={largeImageURL}
        onClick={openModaltoClick}
      />
    </GalleryItem>
  );
}
