import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './SideBar.module.css';
import buttonStyles from '../../styles/button.module.css';
import layoutStyles from '../../styles/layout.module.css';

export const SideBar = ({
  openDropdown,
  closeDropdown,
}) => (
  <div className={styles['outer-container']}>
    <div className={classNames(buttonStyles.btn, buttonStyles['styled-btn'])}>Activities</div>
    <div className={classNames(buttonStyles.btn, buttonStyles['styled-btn'])}>Sign Up</div>
    <Link to="/about">About</Link>
    <Link to="/contact-us">Contact Us</Link>
  </div>
);

export default SideBar;
