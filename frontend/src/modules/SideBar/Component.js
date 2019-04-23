import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './SideBar.module.css';
import buttonStyles from '../../styles/button.module.css';
import layoutStyles from '../../styles/layout.module.css';

export const SideBar = ({
  openDropdown,
  closeDropdown,
  dropdownOpen,
}) => (
  <div className={styles['outer-container']}>
    <div className={styles['button-container']}>
      <div className={classNames(buttonStyles.btn, buttonStyles['styled-btn'])} onClick={() => dropdownOpen ? closeDropdown() : openDropdown()}>
      Activities
      </div>
      <ul className={classNames({
        [styles['dropdown-items']]: true,
        [styles['dropdown-open']]: dropdownOpen,
      })}>
        <ul className={styles['dropdown-item']}>Orlando</ul>
        <ul className={styles['dropdown-item']}>New York City</ul>
      </ul>
    </div>
    <div className={styles['button-container']}>
      <div className={classNames(buttonStyles.btn, buttonStyles['styled-btn'])} onClick={() => dropdownOpen ? closeDropdown() : openDropdown()}>Sign Up</div>
      <ul className={classNames({
        [styles['dropdown-items']]: true,
        [styles['dropdown-open']]: dropdownOpen,
      })}>
        <ul className={styles['dropdown-item']}>Orlando</ul>
        <ul className={styles['dropdown-item']}>New York City</ul>
      </ul>
    </div>

    <Link to="/about" className={classNames(styles['button-container'], styles['text-style'])}>About</Link>
    <Link to="/contact-us" className={classNames(styles['button-container'], styles['text-style'])}>Contact Us</Link>
  </div>
);

export default SideBar;
