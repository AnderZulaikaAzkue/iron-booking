import React from 'react'
import { Input } from 'antd'


function SearchBar({ search, onSearch }) {

  const handleSearch = (ev) => {
    onSearch(ev.target.value)
  }

  return (
    <>
      <i className="fa-light fa-magnifying-glass fa-beat-fade"></i>
      <Input type="text" value={search} onChange={handleSearch} className='w-75 m-4 no-submit' style={{height: '40px'}} placeholder='Search a hotel'/>
    </>
  )
}

export default SearchBar