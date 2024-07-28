import s from "./ImageCard.module.css";

const ImageCard = ({ item, onClick }) => {
  return (
    <li className={s.card}>
      <img
        src={item.urls.small}
        alt={item.slug}
        onClick={() => onClick(item.urls.regular)}
        style={{ cursor: "pointer" }}
      />
    </li>
  );
};

export default ImageCard;
