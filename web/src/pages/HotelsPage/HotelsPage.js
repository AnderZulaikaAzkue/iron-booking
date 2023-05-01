import { useState, useEffect } from 'react'
import HotelRandom from '../../components/hotelRandom/hotelRandom'
import SearchBar from '../../components/searchBar/searchBar';
import hotelsService from '../../services/hotels';
import "./HotelsPage.css";

function HotelPage() {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([])

  const onSearch = (value) => {
    setSearch(value)
  }

  useEffect(() => {
    hotelsService.list()
      .then(searchResults => setSearchResults(searchResults))
      .catch(error => console.error(error))
  }, []);


  return (
    <>
    <div className='hotelsPageContainer' >
      <div>
        <SearchBar search={search} onSearch={onSearch} />
      </div>
      <div></div>
      <HotelRandom searchResults={searchResults} search={search} />
      </div>
    </>
  )
}

export default HotelPage
