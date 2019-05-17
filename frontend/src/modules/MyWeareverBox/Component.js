import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import EmailPopup from '../../components/EmailPopup';
import NavBar from '../NavBar/Container';
import FilterBar from '../FilterBar/Container';
import SideBar from '../SideBar/Container';
import styles from './MyWeareverBox.module.css';
import buttonStyles from '../../styles/button.module.css';
import layoutStyles from '../../styles/layout.module.css';

export const MyWeareverBox = ({
  targetItem,
  targetRentalPeriod,
  isDropdownOpen
}) => (
  <div>
    <EmailPopup/>
    <NavBar/>

    <div className={styles['main-container']}>
      <div className={styles['side-bar-container']}>
        <SideBar/>
      </div>
      <div className={styles['items-container']}>
        Looks a little empty here!<br/>
        First time trying Wearever? Use code <strong>revolutionary</strong> to get 50% off your first Wearever Box!<br/>
        <Link className={buttonStyles['styled-btn']} to="/">Start Shopping</Link>
      </div>
    </div>

  </div>
);

export default MyWeareverBox;
