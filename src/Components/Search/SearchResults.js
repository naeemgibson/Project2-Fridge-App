import React, { useState } from 'react';
import Ingredients from './Ingredients';
import { HashLink } from 'react-router-hash-link';
import SearchForm from './SearchForm';


const SearchResults = ({ recipes, mealTypeFilter, searchInput1, searchParam,handleClick}) => {
    // return early if there are no images
    const [modalShow, setModalShow] = useState(false)
    if (!recipes.length) {
      return <h2>No Images Found!</h2>
    }
    
    const modalOpen = () => {
        setModalShow(prev => !prev);
      } 
    
     

   
//   const handleClick = (e) => {
// e.preventDefault();

//   }

// function filterRecipes (recipes){
//     if (searchInput1 == null  ){
//         console.log(searchInput1)
//         console.log(searchParam)
//         console.log(recipes)
//     }  else {
//         recipes.filter((item) => item.recipe.searchParam.includes({searchInput1})) 
//         console.log(searchParam)
//         console.log(searchInput1)
//     }
// }
// filterRecipes(recipes)
    return (
       <div>
           
    <div className="gallery">
       {recipes
      
       .map((recipe, i) => {
           return <div key={
               recipe.recipe.uri} className="gif" id={i}  onClick={handleClick({i})} >
    <h4>{recipe.recipe.label}</h4>    
    <img id="gal-img" src={recipe.recipe.image} alt={recipe.recipe.label} />  
    <HashLink smooth to = "#ingredients"><button  onClick={modalOpen}>Click For Ingredients List</button></HashLink>
    </div>})} 
  
    </div>
    <Ingredients recipes={recipes}  modalShow={modalShow} setModalShow={setModalShow} />

    </div>
   
   
    /* <div className="gallery">
    <h4>{recipe.recipe.label}</h4> 
    <p>{recipe.recipe.IngredientsLine}</p>   
    <button onClick={handleClick}>Click to flip</button>
    </div> */
    
   
    )
}



export default SearchResults;