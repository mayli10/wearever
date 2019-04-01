import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './NavBar.module.css';
import buttonStyles from '../../styles/button.module.css';
import dropdownArrow from '../../images/icons/dropdown-arrow.png';
import logo from '../../images/icons/logo.png';
import layoutStyles from '../../styles/layout.module.css';

export const NavBar = ({
  destination,
  dropdownOpen,
  changeDestination,
  openDropdown,
  closeDropdown,
}) => (
  <div className={styles['outer-container']}>
    <div className={classNames(styles['inner-container'], layoutStyles.container)}>
      <div className={styles['logo-wrapper']}>
        <Link to="/"><img src={logo} alt="Wearever" className={styles.logo}/></Link>
      </div>
      <div className={styles.empty}></div>
      <div className={styles['destination-name']}>{destination}</div>
      <div className={styles['dropdown-wrapper']}>
        <div className={styles.dropdown}>
          <div className={styles['dropdown-label']} onClick={() => dropdownOpen ? closeDropdown() : openDropdown()}>
            <img src={dropdownArrow} alt="Select a destination" className={styles['dropdown-icon']}/>
            <span>Explore other destinations</span>
          </div>

          <ul className={classNames({
            [styles['dropdown-items']]: true,
            [styles['dropdown-open']]: dropdownOpen,
          })}>
            <ul className={styles['dropdown-item']} onClick={() => changeDestination('Orlando')}>Orlando</ul>
            <ul className={styles['dropdown-item']} onClick={() => changeDestination('New York City')}>New York City</ul>
          </ul>
        </div>
      </div>
      <div className={styles['signup-btn-wrapper']}>
        <Link to="/signup" className={classNames(buttonStyles.btn, buttonStyles['styled-btn'], styles['signup-btn'])}>Sign Up</Link>
      </div>
    </div>
  </div>
);

export default NavBar;
