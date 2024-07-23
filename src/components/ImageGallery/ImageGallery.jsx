import ImageCard from "../ImageCard/ImageCard"

const ImageGallery = ({gallery}) => {
  return (
    <ul>
      {gallery.map((item)=> (
      <ImageCard key={item.id} />
    ))}
    </ul>
  )
}

export default ImageGallery