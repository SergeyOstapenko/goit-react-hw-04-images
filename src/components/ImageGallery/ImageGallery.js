import PropTypes from 'prop-types';
import { ImgGallery } from './ImgGallery.styles';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem'
//-----------------------------------------------------------//

export const ImageGallery = ({ imageList, handlerOpenModal }) => {
  return (
    <ImgGallery>
      {imageList.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            smallImg={webformatURL}
            largeImg={largeImageURL}
            handlerOpenModal={handlerOpenModal}
          />
        );
      })}
    </ImgGallery>
  );
};

ImageGallery.propTypes = {
  imageList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
  handlerOpenModal: PropTypes.func.isRequired,
};