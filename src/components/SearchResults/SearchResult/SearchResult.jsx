import React from 'react'
import './SearchResult.css'
const SearchResult = ({result, handleSelected,image}) => {
  return (
    <div onClick={()=> handleSelected(result)} className='search-result'>
      <div className='search-result-image'>
        <img src={image} alt="" />
      </div>
      <div className='search-result-name'>
        {result.name}
        </div>
      
      <div className='search-result-email'>
      {result.email}
      </div>
      </div>
    
  )
}

export default SearchResult
