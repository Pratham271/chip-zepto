import React from 'react'
import './SearchResultsList.css';
import SearchResult from './SearchResult/SearchResult';
import { images } from '../../assets/images';


const SearchResultsList = ({results, handleSelected}) => {
  return (
    <div className='results-list'>
        {
            results.map((result,index)=> {
              
                return <SearchResult result={result} key={index} handleSelected={handleSelected} image={result.image}/>
            })
        }
    </div>
  )
}

export default SearchResultsList
