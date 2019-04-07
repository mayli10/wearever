import React, { Component } from 'react';
import axios from 'axios';

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
            <div className={styles.imgContainer}>
              <img className={styles.img}
              src={ product.defaultImages[0] }
              onMouseOver={e => (e.currentTarget.src = product.defaultImages[1])}
              onMouseOut={e => (e.currentTarget.src = product.defaultImages[0])}/>
              {/* All of these local host calls need to be changed. 
              Instead of accessing the folders make API calls to the backend to receive the images */}
              <img className={styles.heartButton}
              src="http://localhost:3001/get_image/icons/empty-heart.png"
              onMouseOver={e => (e.currentTarget.src = "http://localhost:3001/get_image/icons/colored-heart.png")}
              onMouseOut={e => (e.currentTarget.src = "http://localhost:3001/get_image/icons/empty-heart.png")}/>
            </div>
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