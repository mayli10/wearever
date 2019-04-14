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
    <div className={styles['button-container']}>
      <div className={classNames(buttonStyles.btn, buttonStyles['styled-btn'])}>Activities</div>
    </div>
    <div className={styles['button-container']}>
      <div className={classNames(buttonStyles.btn, buttonStyles['styled-btn'])}>Sign Up</div>
    </div>
    <Link to="/about" className={classNames(styles['button-container'], styles['text-style'])}>About</Link>
    <Link to="/contact-us" className={classNames(styles['button-container'], styles['text-style'])}>Contact Us</Link>
  </div>
);

export default SideBar;
