import React from 'react';
import classNames from 'classnames';

import Home from '../../components/Home';
import styles from './Counter.module.css';
import productImage from '../../images/cards/img1.png';
import TextInput from '../../components/TextInput';

export const Counter = ({
  todoId,
  getTodo,
  todoValueChange,
  todoData,
  count,
  increment,
  loadingTodo
}) => (
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
      <hr />
      <TextInput
        value={todoId}
        onChange={({ value }) => todoValueChange(value)}
      />
      <button type="submit" onClick={() => getTodo()}>Get Todo Info</button>
      {loadingTodo && `Loading todo ${todoId}`}
      {todoData && todoData.title}
    </div>
  </div>
);

export default Counter;
