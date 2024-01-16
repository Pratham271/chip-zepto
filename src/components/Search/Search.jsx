import React, {useState} from 'react'
import './Search.css'
import { images } from '../../assets/images';


const Search = ({setResults, selected, setSelected}) => {
  const [input,setInput] = useState(null);
  
  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>  response.json())
    .then(json => {
      const results = json.map((user, index) => ({
        ...user,
        image: images[index], // Use the index to associate with the corresponding image
      })).filter((user) => value && user && user.name && user.name.toLowerCase().includes(value.toLowerCase()));

      setResults(results);
    });
 
   
  }

  const removeTags = indexToRemove => {
    const removedTag = selected[indexToRemove];
    setSelected([...selected.filter((_, index) => index !== indexToRemove)]);
    if (removedTag) {
      setResults((prevResults) => [...prevResults, removedTag]);
    }
  };

  const handleChange = (value) => {
    setInput(value)
    fetchData(value)
  }

  const handleKeyDown = (event) => {
    if (event.key === ' ') {
      if (selected.length > 0) {
      
        selected[selected.length - 1].highlighted = true;
        setSelected([...selected]);
  
        
        let consecutiveSpacebarClicks = 1;
  
        
        const handleSpacebar = (event) => {
          if (event.key === ' ') {
            if (consecutiveSpacebarClicks === 2) {
              removeTags(selected.length - 1);
              document.removeEventListener('keydown', handleSpacebar);
            } else {
              consecutiveSpacebarClicks++;
            }
          } else {
            consecutiveSpacebarClicks = 1;
          }
        };
  
        document.addEventListener('keydown', handleSpacebar);
      }
    }
  };
  

  return (
    <div className='tags-input'>
      <ul id="tags">
			{selected.map((tag, index) => (
					<li key={tag.id} className={`tag ${tag.highlighted ? 'tag-highlighted' : ''}`}>
            <img src={images[tag.id-1]} alt="" />
						<span className='tag-title'>{tag.name}</span>
						<span className='tag-close-icon'
							onClick={() => removeTags(index)}
						>
							x
						</span>
					</li>
				))}
			</ul>
      <input 
      type="text" 
      value={input || ''}
      onChange={(e)=> handleChange(e.target.value)}
      placeholder='Type to search...' 
      onKeyDown={handleKeyDown}
      />
     

    </div>
  )
}

export default Search
