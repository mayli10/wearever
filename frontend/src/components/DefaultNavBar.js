import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import './DefaultNavBar.css';
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
      <div className='empty'></div>

      <div className='signup-btn-wrapper'>
        <Link to="/signup" className={classNames(buttonStyles.btn, buttonStyles['styled-btn'],'signup-btn')}>Sign Up</Link>
      </div>
    </div>
  </div>
);

export default DefaultNavBar;
