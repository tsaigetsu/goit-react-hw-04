const ImageCard = (item) => {
  return (
    <li><img src={item.urls.small}
    alt={item.slug}
    // onClick={() => onClick(item.urls.regular)}
    style={{ cursor: "pointer" }} /></li>
  )
}

export default ImageCard