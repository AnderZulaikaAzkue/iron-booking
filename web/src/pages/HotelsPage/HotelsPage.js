import { useState, useEffect } from 'react'
import HotelRandom from '../../components/hotelRandom/hotelRandom'
import SearchBar from '../../components/searchBar/searchBar';
import hotelsService from '../../services/hotels';

function HotelPage() {
  const [onSearch, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    hotelsService.list()
      .then(searchResults => setSearchResults(searchResults))
      .catch(error => console.error(error))
  }, []);


  return (
    <>
      <div>
        <SearchBar onSearch={onSearch} setSearchResults={setSearchResults} />
      </div>
      <HotelRandom searchResults={searchResults} />
    </>
  )
}

export default HotelPage

