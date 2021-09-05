import style from "./ImageGallery.module.css";
import propTypes from "prop-types";
import { useEffect } from "react";

import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

function ImageGallery({ images, onImgClick }) {
  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }, [images]);

  return (
    <ul className={style.ImageGallery}>
      {images.map((image) => {
        return (
          <ImageGalleryItem
            imageUrl={image.webformatURL}
            key={image.id}
            onClick={onImgClick}
          />
        );
      })}
    </ul>
  );
}

ImageGallery.propTypes = {
  onImgClick: propTypes.func,
  images: propTypes.arrayOf(propTypes.object),
};

export default ImageGallery;
