import Search from './components/Search/Search';
import './App.css'
import { useState } from 'react';
import SearchResultsList from './components/SearchResults/SearchResultsList';




function App() {
  const [results, setResults] = useState([]);
  const [selected, setSelected] = useState([]);


   // Handle the selected tag and update the tags state
   const handleSelected = (selectedTag) => {
    // Filter out the selected tag from results
    const updatedResults = results.filter((result) => result.id !== selectedTag.id);
    setSelected([...selected, selectedTag]);
    setResults(updatedResults);
   
  
    
  };
  return (
    <div className='App'>
       <div className='search-bar-container'>
       <Search setResults={setResults} selected={selected} setSelected={setSelected} />
       </div>
    <hr />
        <div>
        <SearchResultsList results={results} handleSelected={handleSelected}/>

        </div>

      <hr className='ending-hr'/>

     
    </div>
  )
}

export default App
