import React from 'react';
import SkyLight from 'react-skylight';
import { Route, Link } from 'react-router-dom';
import classNames from 'classnames';
import EmailPopup from './EmailPopup';
import LandingNavBar from './LandingNavBar';
import buttonStyles from '../styles/button.module.css';
import './contact-us.css';


export const ContactUsPage = () => (
<div>
    <EmailPopup/>
    <LandingNavBar/>
    <div className='form-outer-container'>
        <div className='contact-us_title_container'>
            <span className='contact-us_title'>We'd love to hear from you!</span>
        </div>
        <div className='form_container'>
            <input className='name_input' placeholder='Full Name'></input>
            <input className='email_input' placeholder='Email'></input>
            <input className='phone_input' placeholder='Phone Number'></input>
            <textarea className='message_input' placeholder='Hi Wearever! I have a message about...'></textarea>
            <Link to='/contact-thankyou' className='contact_submit'>Submit</Link>
        </div>

    </div>
</div>
  
);

export default ContactUsPage;