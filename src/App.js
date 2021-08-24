import React, {useState,useEffect, useContext} from 'react';
import { Route,Redirect } from 'react-router-dom';
import './App.css';
import Intro from './Components/Intro/Intro';
import SearchHeader from './Components/Search/SearchHeader';
import SearchResults from './Components/Search/SearchResults';
import SearchForm from './Components/Search/SearchForm';
import AddRecipe from './Components/Add/Add';
import Food from './Media/video/food1.mp4'
import Footer from './Components/Footer/Footer';
import Login from './Components/Intro/Login';
import Ingredients from './Components/Search/Ingredients';
import Terms from './Components/Search/Terms';
// import  UserContext  from './UseContext';

function App() {

const APP_ID = '089939d1';
const App_Key= '1952a9e247e3b42057cbb8a2dd98cac7';

const[recipes,setRecipes]= useState([]);
const [userInput, setUserInput] = useState('');
const [lastSearch, setLastSearch] = useState('chicken');
const [mealTypeFilter,setMealTypeFilter]= useState('')
const [searchInput1, setSearchInput1] = useState('');
const [searchInput2, setSearchInput2] = useState('');
const [searchParam, setSearchParam] = useState('');
const [modalShow, setModalShow] = useState(false)
const [clickedIndex, setClickedIndex] = useState([]);


function getRecipes() {
  const url = `https://api.edamam.com/search?q=${userInput}${searchInput1}${searchInput2}&app_id=${APP_ID}&app_key=${App_Key}`

  fetch(url)
  .then(response => response.json())
  .then(response => {
    //Line 33 acts as placeholder for recipes when page first loads
    setUserInput(response.data);
    setLastSearch(userInput)
    setUserInput(' ');
    setRecipes(response.hits)
    console.log(response.hits)
  })
  .catch(console.error);
} 
useEffect(() =>{
getRecipes()
}, [lastSearch]);

function handleChange(event) {
  setUserInput(event.target.value);
}
const handleClick = (index) => () => {
          
  setClickedIndex(state => ({
    ...state, // <-- copy previous state
    [index]: !state[index], // <-- update value by index key
  }));
  
 setClickedIndex([index])

}
function handleSubmit(event) {
  event.preventDefault();
  setUserInput(userInput)
  setLastSearch(userInput)
}
// function handleFilterChange(event) {
//   setSearchInput1(event.target.value);
//   setSearchInput2(event.target.value);
// }

// function handleFilterSubmit(event) {
//   event.preventDefault();
//   setUserInput(userInput)
//   setLastSearch(userInput)
// }

// const { user } = useContext(UserContext);  


  return (
    <div className="App">
{/* //  {user.auth ? <Logout /> : <Login />}; */}

       <Intro />
      <div>
        <video id="crisis" autoPlay loop muted
        style={{
          width:'100%',
          height:'100%',
          zIndex: '1',
        }}
        >
          <source  src ={Food} type="video/mp4"/>
        </video>
      </div>
      <Route exact path = "/modal" component = {Login} />
      <Route exact path = "/ingredients" component = {Ingredients} />
      <Route path='/donate' component={() => { 
     window.location.href = 'https://www.foodrecoverynetwork.org/donate'; 
     return null;
}}/>
      <SearchHeader lastSearch={lastSearch} />
      <SearchForm 
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      userInput={userInput}
      recipes={recipes}
      setMealTypeFilter={setMealTypeFilter}
      searchInput1={searchInput1}
      setSearchInput1={setSearchInput1}
      setSearchInput2={setSearchInput2}
      setSearchParam={setSearchParam}
      />
      {/* <form className="search-form">
        <input className="search-bar" type="text" />
        <button onClick={() => setUserInput()} className="search-button" type="submit">Search</button>
      </form> */}
      <Terms recipes={recipes}/>
      <SearchResults recipes={recipes} searchInput1={searchInput1} mealTypeFilter={mealTypeFilter} handleClick={handleClick} />

      <Ingredients 
      recipes={recipes}  
      modalShow={modalShow} 
      setModalShow={setModalShow}
      clickedIndex={clickedIndex} />
      <AddRecipe />
      <Footer />
    </div>
  );
}


export default App;
