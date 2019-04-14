import React from 'react';
import { Route, Link } from 'react-router-dom';
import classNames from 'classnames';
import EmailPopup from './EmailPopup';
import DefaultNavBar from './DefaultNavBar';
import './Home.css';


export const Home = () => (
<div>
  <EmailPopup/>
  <DefaultNavBar/>
  <div className='full-container'>
    <div className='first-row'>
      <img className='beach-girl' src="http://localhost:3001/images/homepage/beach-girl.jpg"/>
      <img className='luggage' src="http://localhost:3001/images/homepage/luggage.jpg"/>
    </div>
    <div className='second-row'>
      <div className='second-inner-row'>
        <img className='selfie' src="http://localhost:3001/images/homepage/selfie.jpg"/>
      </div>
      <div className='third-inner-row'>
        <img className='beach' src="http://localhost:3001/images/homepage/beach.jpg"/>
        <img className='walk' src="http://localhost:3001/images/homepage/walk.jpg"/>
      </div>
      <img className='building' src="http://localhost:3001/images/homepage/building.jpg"/>
    </div>
  </div>
</div>
);

export default Home;
