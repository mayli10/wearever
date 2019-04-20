import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './FilterBar.module.css';
import buttonStyles from '../../styles/button.module.css';
import boxButton from '../../images/icons/boxButton.png';
import layoutStyles from '../../styles/layout.module.css';
import calendar from '../../images/icons/calendar.png';
import hanger from '../../images/icons/clothes-hanger.png';
import magnifyingGlass from '../../images/icons/magnifying-glass.png';
import filterbutton from '../../images/icons/filter-button.png';
import emptyheart from '../../images/icons/empty-heart.png';
import coloredheart from '../../images/icons/colored-heart.png';


export const FilterBar = ({
  selectDate,
  filterSize,
  searchItem,
  openDropdown,
  closeDropdown
}) => (
  <div className={styles['outer-container']}>
    <div className={styles['inner-container']}>
      <div className={styles['calendar-container']}>
        <div className={styles['input-container-calendar']}>
          <input type="text" placeholder="Travel Date" className={styles['input-calendar']}/>
          <img className={styles['calendar']} src={calendar}/>
        </div>
        <p className={styles['calendar-subtitle']}>Enter your travel dates to estimate the local weather for your trip!</p>
      </div>
      <div className={styles['input-container']}>
        <input type="text" placeholder="Size" className={styles['input']}/>
        <img className={styles['clothes-hanger']} src={hanger}/>
      </div>
      <div className={styles['input-container']}>
        <input type="text" placeholder="Search" className={styles['input']}/>
        <img className={styles['magnifying-glass']} src={magnifyingGlass}/>
      </div>
    </div>

    <div className={styles['icons-container']}>
      <div className={styles['filter-button-container']}>
        <img className={styles['filter-button']} src={filterbutton}/>
      </div>
      <div className={styles['heart-container']}>
        <img className={styles['heart']}
        src={emptyheart}
        onMouseOver={e => (e.currentTarget.src = {coloredheart})}
        onMouseOut={e => (e.currentTarget.src = {emptyheart})}/>
        <div className={styles['heart-subtitle']}>Liked</div>
      </div>
      <div className={styles['box-container']}>
        <Link to="/box"><img src={boxButton} alt="Wearever Box" className={styles.box}/></Link>
        <div className={styles['box-subtitle']}>My Box</div>
      </div>
    </div>
  </div>
);

export default FilterBar;
