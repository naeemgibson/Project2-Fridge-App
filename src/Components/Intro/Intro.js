import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Introstyle.css';
import Login from './Login';
import logo from '../../Media/SearchIcon/recipe-search-logo.svg';

const Intro  = () => {
    const [showModal, setShowModal] = useState(false)
    const openModal = () => {
        setShowModal(prev => !prev);
    }


    return (
        <div>
            <nav id="navbar" className="nav">
        <div className='brand'>
        <img src={logo} alt="logo" /> 
        <h3>What's in the fridge?</h3>
        </div>

    <ul className="nav-list">
      <li>
        <HashLink smooth to="#about" >About</HashLink>
      </li>
      <li>
          <HashLink smooth to="#crisis">Food Crisis</HashLink>
      </li>
      <li>
        <HashLink smooth to="#search">Search</HashLink>
      </li>
      <li>
        <HashLink to="#add">Add A Recipe</HashLink>
      </li>
      <li>
        <Link id="donate" to="/donate">Donate</Link>
      </li>
    </ul>
    <div>
   
    <Link to = "/"> <HashLink smooth to="#login"><button id="join"  onClick= {openModal} type='button'>Join</button> </HashLink></Link>
   
    </div>

  </nav>
  <Login showModal={showModal} setShowModal={setShowModal}/>
  
{/* END NAV */}
  
{/* Welcome Section */}
  <div id="about">
  <section id="welcome-section" className="welcome-section">
    <div className="brand2">
    <img src={logo} alt="logo" />
    <h1>What's In The Fridge?</h1>
    </div>
    <h3>Has your refrigerator ever been low on food and you wonder what you can make <br/> 
        with the items you have? I know I have! "What's in the fridge" is a web app <br/>
        that looks to eliviate this food crisis from your home and the world at large.
    </h3>
    <br/>
    <br/>
    <h3>
        Speaking of food crisis, many people are unaware of the food crisis the world faces<br/>
        today. You'll learn more about this by clicking on the "Food Crisis" button in the<br/>
        navigation bar at the top of the page. Also in the nav bar, are links to the "Fridge Searcher App"<br/>
         and a link to donate. One of the biggest contributors to the "Food Crisis" in America is our college<br/> 
         campuses. The "Donate" button links to "FoodRecoveryNetwork.Org". This organization is committed <br/>
         to taking the unused food from college campuses around the country and donating it to the less fortunate.<br/>
         So whether you're here for a quick recipe or to fight the "Food Crisis" I hope you enjoy the App! <br/>
         Sincerely, Naeem!
    </h3>


  </section>
  <i className="fa fa-css3" aria-hidden="true"></i>

</div>
        </div>
    );
};

export default Intro;