import { useEffect, useState } from "react";
import "./App.css";
import { SearchBar } from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import fetchPictures from "../../apiService/pictures";
import { Toaster } from "react-hot-toast";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [pictures, setPictures] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState("");

  const handleSubmit = (value) => {
    setSearchValue(value);
    setPictures([]);
    setPage(1);
  };
  const openModal = (imageUrl) => {
    setCurrentImg(imageUrl);
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
    setCurrentImg("");
  };
  const onClick = () => {
    setPage((prev) => prev + 1);
  };
  useEffect(() => {
    const getPictures = async () => {
      if (!searchValue) {
        return;
      }
      try {
        setIsLoading(true);
        setIsError(false);
        const res = await fetchPictures(searchValue, page, 12);
        setPictures((prev) => [...prev, ...res.results]);
        setTotal(res.total_pages);
      } catch (err) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getPictures();
  }, [searchValue, page]);
  console.log(pictures);
  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {isError && <ErrorMessage />}
      <ImageGallery gallery={pictures} onClick={openModal} />
      {isLoading && <Loader />}
      {pictures.length !== 0 && total > page && !isLoading && (
        <LoadMoreBtn onClick={onClick} />
      )}
      <Toaster />
      <ImageModal
        isOpen={isOpen}
        onCloseClick={closeModal}
        imageUrl={currentImg}
      />
    </>
  );
}

export default App;
