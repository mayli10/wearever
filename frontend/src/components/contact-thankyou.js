import React from 'react';
import SkyLight from 'react-skylight';
import { Route, Link } from 'react-router-dom';
import classNames from 'classnames';
import EmailPopup from './EmailPopup';
import LandingNavBar from './LandingNavBar';
import buttonStyles from '../styles/button.module.css';
import './contact-thankyou.css';


export const ContactUsThankyou = () => (
<div>
    <EmailPopup/>
    <LandingNavBar/>
    <div className='success_container'>
        <span className='Success'>Thank you for getting in touch!</span>
    </div>
</div>

);
export default ContactUsThankyou;