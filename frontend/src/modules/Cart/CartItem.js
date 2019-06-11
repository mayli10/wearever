import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from '../../components/Firebase/firebase';
import styles from './cart.module.css';
import classNames from 'classnames';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import buttonStyles from '../../styles/button.module.css';

class CartItem extends Component {
    
    constructor(props) {
        super(props);
        this.deleteItem = this.deleteItem.bind();
    }

    deleteItem = id => {
        let ref = firebase.database().ref("/Cart/"+id);
        ref.remove();
    }
    
    render() {
        const object = this.props;
        const prod = object.item;
        return (
            <div className={styles.container}>
                <button
                type="button"
                className={styles.close}
                onClick={this.deleteItem.bind(null,prod.sku)}
                >
                    &#xd7;
                </button>
                <div className={styles["img-wrapper"]}>
                    <img className={styles.img} src={(prod.defaultImages).split("'")[1]} alt={prod.title} />
                </div>
                <div className={styles.title}>{prod.title}</div>
                <div className={styles.designer}>{ prod.designer.toUpperCase() }</div>
                <div className={styles.price}> 3 Day rental: ${prod.threeDays}</div>
                <Link to={'/checkout'} className={classNames(buttonStyles.btn, buttonStyles['styled-btn'],styles.btn)}>Check Out</Link>
            </div>
        );
    }
}

export default CartItem;