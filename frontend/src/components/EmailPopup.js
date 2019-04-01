import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './EmailPopup.module.css';
import Cookies from 'js-cookie';

class EmailPopup extends Component {
  constructor(props) {
    super(props);
    const removed = !!Cookies.get('email-popup');
    this.state = { removed };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    Cookies.set('email-popup', 'true');
    this.setState({ removed: true });
  }

  render() {
    const { removed } = this.state;
    return (
      <div>
      {
        !removed &&
        <div className={styles.container}>
          <Link to="/signup" className={styles.text} onClick={this.handleClick}>&gt; Enter Email to Start Your Wearever Box</Link>
          <div className={styles['cross-button']} onClick={this.handleClick}>x</div>
        </div>
      }
      </div>
    );
  }
}

export default EmailPopup;
