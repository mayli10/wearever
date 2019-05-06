import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
//import './DefaultNavBar.css';
import './LandingNavBar.css';
import buttonStyles from '../styles/button.module.css';
import logo from '../images/icons/logo.png';
import layoutStyles from '../styles/layout.module.css';

export const DefaultNavBar = ({
}) => (
  <div className='outer-container'>
    <div className={classNames('inner-container', layoutStyles.container)}>
      <div className='logo-wrapper'>
        <Link to="/productlistpage"><img src={logo} alt="Wearever" className='logo'/></Link>
      </div>
      <div className='directory-links'>
        <ul  className='navigation-list'>
            <li className='navigation-button'><Link to="/productlistpage" className='navigation-link'>CELEBRATION</Link></li >
            <li className='navigation-button'><Link to="/productlistpage" className='navigation-link'>PICTURE PERFECT</Link></li>
            <li className='navigation-button'><Link to="/productlistpage" className='navigation-link'>CALI STYLE</Link></li>
            <li className='navigation-button'><Link to="/productlistpage" className='navigation-link'>NYC STYLE</Link></li>
            <li className='navigation-button'><a href="https://gowearever.wordpress.com/blog/" className='navigation-link'>BLOG</a></li>
            <li className='navigation-button'><Link to="/contact-us" className='navigation-link'>CONTACT</Link></li>
        </ul>
      </div>

      <div className='signup-btn-wrapper'>
        <Link to="/signup" className={classNames(buttonStyles.btn, buttonStyles['styled-btn'],'signup-btn')}>Sign Up</Link>
      </div>
    </div>
  </div>
);

export default DefaultNavBar;
