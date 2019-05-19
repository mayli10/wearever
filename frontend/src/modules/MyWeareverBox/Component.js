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
      <div className={styles['outside-container']}>
        <ul className={styles['items-container']}>
          <li>Looks a little empty here!</li>
          <li>Use code <strong>revolutionary</strong> to get 50% off your first Wearever Box!</li>
          <li>
            <Link className={buttonStyles['styled-btn']} to="/">Start Shopping</Link>
          </li>
        </ul>
      </div>
    </div>

  </div>
);

export default MyWeareverBox;
