import React, { Component } from 'react';

import styles from './ProductList.module.css';

class ProductList extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    const { isLoading, products } = this.props;
    return (
      <div className={styles.container}>
        { isLoading && 'Loading Products' }
        { products && products.map(product =>
          <div key={ product.sku }>
            <img className={styles.img}
            src={ product.defaultImages[0] }
            onMouseOver={e => (e.currentTarget.src = product.defaultImages[1])}
            onMouseOut={e => (e.currentTarget.src = product.defaultImages[0])}/>
            <div className={styles.infoSection}>
              <div className={styles.designer}>{ product.designer.toUpperCase() }</div>
              <div className={styles.title}>{ product.title }</div>
              <span className={styles.msrp}>${ product.msrp / 100 } retail</span>
              <span className={styles.prices}> | starting from ${ product.prices["3"] / 100 }</span>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ProductList;
