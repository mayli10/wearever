import React from 'react';
import classNames from 'classnames';

import Home from '../../components/Home';
import styles from './Counter.module.css';
import productImage from '../../images/cards/img1.png';

export const Counter = ({ count, increment }) => (
  <div>
    <h2>Counter</h2>
    <div>
      <button
        className={classNames('btn', styles.btn, styles['btn-increment'])}
        onClick={() => increment()}
      >
        +1
      </button>
      <button
        className={classNames('btn', styles.btn, styles['btn-increment'])}
        onClick={() => increment(2)}
      >
        +2
      </button>
      <button
        className={classNames('btn', styles.btn, styles['btn-decrement'])}
        onClick={() => increment(-1)}
      >
        -1
      </button>
      <span className={styles.count}>{count}</span>
      <br />
      <span
        className={classNames({
          [styles['greater-than-0']]: count > 0,
          [styles['not-greater-than-0']]: count <= 0
        })}
      >
        Greater than 0
      </span>
      <Home />
      <img src={productImage} alt="Product" className={styles.img} />
    </div>
  </div>
);

export default Counter;
