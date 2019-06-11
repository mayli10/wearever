import React from 'react';
import SkyLight from 'react-skylight';
import { Route, Link } from 'react-router-dom';
import classNames from 'classnames';
import EmailPopup from './EmailPopup';
import LandingNavBar from './LandingNavBar';
import buttonStyles from '../styles/button.module.css';
import WixLandingPage from './WixLandingPage';
import FilterBar from '../modules/FilterBar/Container';
import SideBar from '../modules/SideBar/Container';
import ProductList from '../modules/Products/ProductList/Container';
import './ProductListPage.css';
import landingsuitcase from '../images/icons/landingsuitcase.png';
import landingoutfit from '../images/icons/landingoutfit.png';
import landingbag from '../images/icons/landingbag.png';
import geotagicon from '../images/icons/geotagicon.png';
import suitcaseicon from '../images/icons/suitcaseicon.png';
import browseicon from '../images/icons/browseicon.png';
import './LandingPage.css';


export const LandingPage = () => (
<div>
    <EmailPopup/>
    <LandingNavBar/>
    <div className='landing-outer-container'>
      <div className = 'see_how_it_works_container'>
        <div className = 'see_how_it_works'>
            <div>
                <h3 className='paragraph'>
                    <span>
                        Wear whatever you want,
                    </span>
                </h3>
                <h3 className='paragraph'>
                    <span>
                        wherever you go.
                    </span>
                </h3>
            </div>
            <div className='see_how_it_works_button'>
                <a href='#how_it_works'>
                    <span className={classNames(buttonStyles.btn, buttonStyles['styled-btn'],'signup-btn')}>
                        See how it works
                    </span>
                </a>
            </div>
        </div>
        <div className = 'suitcase_photo'>
            <img src={landingsuitcase} className='landing_suitcase'/>
        </div>

      </div>
        <div className= 'explore_container'>
            <div className = 'outfit_photo'>
                <img src={landingoutfit} className='landing_outfit'/>
            </div>
            <div className= 'explore_now'>
                <div className='explore_top'>
                    <h3 className='rent_curated_text'>
                        <span >
                            Rent curated fashion when you travel
                        </span>
                    </h3>
                </div>
                <div className='explore_bottom'>
                    <h3 className='pack_less_text'>
                        <span >
                            Pack less, travel light
                        </span>
                    </h3>
                </div>
                <div className='explore_now_button'>
                    <a>
                        <Link to="/productlistpage" className={classNames(buttonStyles.btn, buttonStyles['styled-btn'],'signup-btn')}>
                            Explore now
                        </Link>
                    </a>
                </div>
            </div>
        </div>
        <div className='sign_me_up_container'>
            <div className = 'sign_me_up'>
                <h3>
                    <span>
                        Your rental box delivered to your destination
                    </span>
                </h3>
                <div className='sign_me_up_button'>
                    <Link to="/signup" className={classNames(buttonStyles.btn, buttonStyles['styled-btn'],'signup-btn')}>Sign Up</Link>
                </div>
            </div>
            <div className = 'bag_photo'>
                <img src={landingbag} className='landing_bag'/>
            </div>
        </div>
        
        <div className='see_how_it_works_table' id="how_it_works">
            <h3 className='how_it_works_title'>
                <span>
                    HOW IT WORKS
                </span>
            </h3>
            <div className='steps_container'>
                <div className='step'>
                    <div className='image_outer_container'><img src={browseicon} className='browse_icon'/></div>
                    <span className='step_number'>
                        STEP 1
                    </span>
                    <p className='step_description'>
                        Browse through our collections by city style, occasion and categories. Select the items you want to rent for your trip.
                    </p>
                </div>
                <div className='step'>
                    <div className='image_outer_container'><img src={geotagicon} className='geotag_icon'/></div>
                    <span className='step_number'>
                        STEP 2
                    </span>
                    <p className='step_description'>
                        When checking out, enter your destination hotel / Airbnb address and select the time you want your rental items to be delivered (could be before your arrive!)
                    </p>
                </div>
                <div className='step'>
                    <div className='image_outer_container'><img src={suitcaseicon} className='suitcase_icon'/></div>
                    <span className='step_number'>
                        STEP 3
                    </span>
                    <p className='step_description'>
                    We will deliver your rental clothes to the address you entered, so you can travel hassle-free. Also, we will pick up your Wearever box so you don't need to worry about returning it!
                    </p>
                </div>
            </div>
            <div className='table_buttons'>
                <div className='sign_me_up_button2'>
                    <Link to="/signup" className='hiw_signup_btn'>SIGN ME UP!</Link>
                </div>
                <div className='continue_as_guest'>
                    <Link to="/productlistpage" className='hiw_guest_btn'>CONTINUE AS GUEST</Link>
                </div>
            </div>
        </div>
        <div className='customer_satisfaction'>
            <div className="seperate_line1"/>
            <span className='quote'>"</span>
            <p className='actual_quote'>I would 200% use the service again.</p>
            <p className='customer'>George, Wearever customer</p>
            <div className="seperate_line2"/>
        </div>
        <div className='start_box_now'>
            <div className='sign_me_up_button2'>
                <Link to="/productlistpage" className='hiw_signup_btn2'>START YOUR WEAREVER BOX</Link>
            </div>
        </div>
    </div>
</div>
export default LandingPage;

