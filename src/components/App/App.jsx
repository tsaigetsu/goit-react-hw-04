import { useEffect, useState } from 'react'
import './App.css'
import { SearchBar } from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import Loader from '../Loader/Loader';
import fetchPictures from '../../apiService/pictures'
import { Toaster } from 'react-hot-toast';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [pictures, setPictures] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = value => {
    setSearchValue(value);
    setPictures([]);
    setPage(1)
  }

  const onClick = () => {
    setPage(prev => prev + 1);
  }
  useEffect(()=> {
    
    const getPictures = async () => {
      if (!searchValue) {
        return
      }
      try {
        setIsLoading(true);
        setIsError(false);
        const res = await fetchPictures(searchValue, page, 5);
        setPictures((prev) => [...prev, ...res.results]);
        setTotal(res.total_pages)
      } catch (err) {
        setIsError(true)
      }
      finally{
        setIsLoading(false)
      }
    }
    getPictures()
  }, [searchValue, page])
  console.log(pictures);
  return (
    <>
    <SearchBar onSubmit={handleSubmit}/>
    {isError && <ErrorMessage />}
    <ImageGallery gallery={pictures}/>
    {pictures.length !== 0 && <LoadMoreBtn onClick={onClick}>Load More</LoadMoreBtn>}
      {isLoading && <Loader />}
      {total > page && !isLoading && (
        <LoadMoreBtn onClick={onClick}/>
      )}
      <Toaster/>

    </>
    
  )
}

export default App
