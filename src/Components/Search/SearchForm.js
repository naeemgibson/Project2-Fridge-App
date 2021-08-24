import React, { useState} from 'react';
import Select from 'react-select';
import { HashLink } from 'react-router-hash-link';
import Terms from './Terms';
import { type } from 'os';


const restrictOptions =[
    {label:'High-Fiber', value: 'high-fiber', type: 'dietLabels'},
    {label:'High-Protein', value: 'high-protein'},
    {label:'Low-Carb', value: 'low-carb'},
    {label:'Low-Fat', value: 'low-fat'},
    {label:'Low-Sodium', value: 'low-sodium'}

];
const allergyOptions =[
    {label:'Dairy-Free', value: 'dairy-free'},
    {label:'Gluten-Free', value: 'gluten-free'},
    {label:'Peanut-Free', value: 'peanut-free'},
    {label:'Soy-Free', value: 'soy-free'},
    {label:'Shellfish-Free', value: 'shellfish-free'}

];
const dietOptions =[
    {label:'Kosher', value: 'kosher'},
    {label:'Keto-Friendly', value: 'keto-friendly'},
    {label:'Paleo', value: 'paleo'},
    {label:'Vegan', value: 'vegan'},
    {label:'Vegetarian', value: 'vegetarian'}

];
const cuisineOptions =[
    {label:'Asian', value: 'Asian'},
    {label:'Carribean', value: 'Carribean'},
    {label:'Indian', value: 'Indian'},
    {label:'Italian', value: 'Italian'},
    {label:'Mexican', value: 'Mexican'}

];
const mealType = [
{label :'Snack', value:['snack','mealType']}
];
const groupedOptions =[
    {
        label: 'Restrictions',
        options: restrictOptions
    },
    {
        label: 'Allergens',
        options: allergyOptions
    },
    {
        label: 'Diet',
        options: dietOptions
    },
    {
        label: 'Cuisine',
        options: cuisineOptions
    },
    {
        label: 'Meal Type',
        options: mealType
    }
]

const SearchForm = ({handleSubmit, handleChange, userInput, recipes, setSearchInput1,setSearchInput2, setSearchParam, filterRecipes,searchInput1}) => {
    const [modalShow, setModalShow] = useState(false)
  
        const modalOpen = () => {
            setModalShow(prev => !prev);
        }
       
    
    function filterOnChange (e){
        if (e == null  ) return
       if (e.filter(item => item.value === e[0].value ).length > 0 && 
       e.filter(item => item.type === e[0].type).length > 0) {
    setSearchInput1(e[0].value)
    setSearchParam(e[0].type)
    console.log(e[0].value[0])
    console.log(searchInput1)
   
       }
    //    else{
           
    //        console.log('changing to breakfast')
    //     setMealTypeFilter(e[0].value)
    //     console.log(e[0].value)
    //     // onChange={filterOnChange}
    //    }
    }
    return (
        <div>
            <Terms modalShow={modalShow} setModalShow={setModalShow} />
        <HashLink smooth to="#terms"><button onClick={modalOpen}>Click For More Search Terms</button></HashLink>
       <form onSubmit={handleSubmit} className="search-form">
           <div className="formgroup1">
               <h3>Additional Filters</h3>
          <Select id="select" options={groupedOptions}  isMulti={true}  placeholder={'select up to 2 filters'} onChange = {filterOnChange} s />
           </div>
           <input className="search-bar" placeholder="Search" type="text" name="userInput" required onChange = {handleChange} value={userInput} />
           <button  className="search-button" type =" submit">Search</button>
       </form>
       </div>
    );
};

export default SearchForm;  