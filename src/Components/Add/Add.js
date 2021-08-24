import React from 'react';
import '../../Components/Add/AddStyle.css'

const AddRecipe = () => {
    return (
        <div className="survey-form" id="add">
   <header className="header">
    <h1 id="title">Add A Recipe</h1>
   
        </header>
    <form id="survey-formy"> 
        <div className="form-group"> </div>
        <label  id="name-label" > <strong>Title:</strong> </label>
        <input type="text" name="name" id="name" className="form-control" placeholder="Enter Title Of Dish" required></input>
       
       
   <div className="form-group"> </div>
    <label  id="image"> <strong>Add Image:</strong>  </label>
        <input type="file" name="image" id="image"  className="form-control2" ></input>

        <div className="form-group"> </div>
        <label  id="name-label" > <strong>Ingredients:</strong> </label>
        <textarea className="form-control3" name="greedy" rows="4" cols="50"></textarea>
        
        <div className="form-group"> </div>
        <label  id="name-label" > <strong>Instructions:</strong> </label>
        <textarea className="form-control3" name="structs" rows="4" cols="50"></textarea>
        </form>

        </div>
              
     
   
  
    )
}

export default AddRecipe;