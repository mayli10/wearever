import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './SideBar.module.css';
import buttonStyles from '../../styles/button.module.css';
import layoutStyles from '../../styles/layout.module.css';

export const SideBar = ({
  setTag,
  openDropdown,
  closeDropdown,
  dropdownOpen,
}) => (
  <div className={styles['outer-container']}>
    <div className={styles['button-container']}>
      <div className={classNames(buttonStyles.btn, buttonStyles['styled-btn'], styles['activities-button'])}onClick={() => dropdownOpen ? closeDropdown() : openDropdown()}>Activities</div>
      <ul className={classNames({
        [styles['dropdown-items']]: true,
        [styles['dropdown-open']]: dropdownOpen,
      })}>
        <li className={styles['dropdown-item']} onClick={() => setTag(null)}>All Activities</li>
        <li className={styles['dropdown-item']} onClick={() => setTag('wedding')}>Wedding</li>
        <li className={styles['dropdown-item']} onClick={() => setTag('beach')}>Beach</li>
        <li className={styles['dropdown-item']} onClick={() => setTag('bridal-shower')}>Bridal Shower</li>
        <li className={styles['dropdown-item']} onClick={() => setTag('sightseeing')}>Sightseeing</li>
        <li className={styles['dropdown-item']} onClick={() => setTag('dining')}>Dining</li>
        <li className={styles['dropdown-item']} onClick={() => setTag('theme-park')}>Theme Park</li>
        <li className={styles['dropdown-item']} onClick={() => setTag('night-out')}>Night Out</li>
        <li className={styles['dropdown-item']} onClick={() => setTag('landmark')}>Landmark</li>
        <li className={styles['dropdown-item']} onClick={() => setTag('work')}>Work</li>
        <li className={styles['dropdown-item']} onClick={() => setTag('test')}>Test: Nothing</li>
      </ul>
    </div>

    <div className={styles['button-container']}>
      <Link to="/signup" className={classNames(buttonStyles.btn, buttonStyles['styled-btn'])}>Sign Up</Link>
    </div>

    {/*<Link to="/about" className={classNames(styles['button-container'], styles['text-style'])}>About</Link>
    <Link to="/contact-us" className={classNames(styles['button-container'], styles['text-style'])}>Contact Us</Link>
    */}
    <a href="https://www.gowearever.com/" className={classNames(styles['button-container'], styles['text-style'])}>About</a>
    <a href="https://www.gowearever.com/contact" className={classNames(styles['button-container'], styles['text-style'])}>Contact Us</a>

  </div>
);

export default SideBar;
