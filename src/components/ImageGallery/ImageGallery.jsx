import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ gallery, onClick }) => {
  return (
    <ul className={s.list}>
      {gallery.map((item) => (
        <ImageCard key={item.id} onClick={onClick} item={item} />
      ))}
    </ul>
  );
};

export default ImageGallery;
