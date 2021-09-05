import "./App.css";
import { useState, useEffect, useRef } from "react";

import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import LoaderApp from "./components/Loader/Loader";
import imagesApi from "./services/images-api";

const BASE_URL = "https://pixabay.com/api";
const KEY = "22330011-89d1f89aeaa9d6f980eea326f";

function App() {
  const [name, setName] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [imgForModal, setImgForModal] = useState("");

  const page = useRef(0);

  useEffect(() => {
    if (name === "") {
      return;
    }

    setLoading(true);
    page.current = 1;

    imagesApi(BASE_URL, name, page.current, KEY)
      .then((res) => res.json())
      .then((result) => {
        setImages(result.hits);
      })
      .finally(setLoading(false));
  }, [name]);

  function onClick() {
    setLoading(true);
    page.current = page.current + 1;

    imagesApi(BASE_URL, name, page.current, KEY)
      .then((res) => res.json())
      .then((result) => {
        setImages([...images, ...result.hits]);
      })
      .finally(setLoading(false));
  }

  function onSubmit(text) {
    setName(text.trim());
  }

  function toggleModal() {
    setIsVisibleModal(!isVisibleModal);
  }

  function onImgClick(event) {
    const image = images.find(
      (image) => image.webformatURL === event.target.getAttribute("src")
    );

    setImgForModal(image.largeImageURL);
    setIsVisibleModal(true);
  }

  return (
    <div className="App">
      <Searchbar onSubmit={onSubmit} />
      <ImageGallery images={images} onImgClick={onImgClick} />
      {isVisibleModal && (
        <Modal image={imgForModal} toggleModal={toggleModal} />
      )}
      {loading ? <LoaderApp /> : <Button onClick={onClick} images={images} />}
    </div>
  );
}

export default App;
