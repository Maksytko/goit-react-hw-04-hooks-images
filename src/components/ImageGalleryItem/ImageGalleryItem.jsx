import style from "./ImageGalleryItem.module.css";
import propTypes from "prop-types";

function ImageGalleryItem({ imageUrl, onClick }) {
  return (
    <li className={style.ImageGalleryItem}>
      <img
        src={imageUrl}
        alt=""
        className={style.ImageGalleryItemImage}
        onClick={onClick}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  imageUrl: propTypes.string,
  onClick: propTypes.func,
};

export default ImageGalleryItem;
