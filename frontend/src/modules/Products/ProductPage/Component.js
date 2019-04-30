import React, { Component } from 'react';
import axios from 'axios';
import styles from './ProductPage.module.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import firebase from '../../../components/Firebase/firebase';
// import { withFirebase } from '../../../components/Firebase';



class ProductPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
          isloading: true,
          productList: [],
          key: null
        };
      }
      componentDidMount() {
        let ref = firebase.database().ref("/Product")
        this.setState({ isloading: true });
        ref
                            .orderByChild("sku")
                            .equalTo(Number(this.props.product))
                            .on('value', snapshot => {
          var list = snapshot.val();
          this.setState({
            productList: list,
            isloading: false,
          });
        });
      }

    render() {
        const { isloading, productList } = this.state;
        var prod = productList[this.props.product];
        if (isloading) {
            return (<div>Loading Product</div>);
        } else {
        return(
            <div className={styles.container}>
                <div className={styles['img-container']}>
                    <img className={styles.img}
                    src={ (prod.defaultImages).split("'")[1] }
                    onMouseOver={e => (e.currentTarget.src = (prod.defaultImages).split("'")[3])}
                    onMouseOut={e => (e.currentTarget.src = (prod.defaultImages).split("'")[1])}/>
                    <div className ={styles.container}>
                        <img src={(prod.defaultImages).split("'")[3]}
                        className = {styles.preview} />
                        <img src={(prod.defaultImages).split("'")[1]}
                        className = {styles.preview} />
                    </div>
                </div>
                <div className={styles.information}>
                    <div className={styles.infoSection}/>
                    <div className={styles.designer}>{ prod.designer.toUpperCase() }</div>
                    <div className={styles.title}>{ prod.title }</div>
                    <span className={styles.msrp}>${ prod.mrsp } retail</span>
                    <div className={styles.boxcontainer}>
                        <div className={styles.pricebox}> 3 Day rental: ${prod.threeDays}</div>
                        {/* <div className={styles.pricebox}> 5 Day rental: ${prod.prices["5"]}</div> */}
                        <div className={styles.pricebox}> Purchase: ${prod.purchase}</div>
                    </div>
                    <div className={styles.plain}>Product description</div>
                    <div className={styles.description}>{prod.description} </div>
                    <div className={styles.description}>{prod.details} </div>
                    <div className={styles.container}>
                        <div className={styles.pricebox}> Add </div>
                        <div className={styles.pricebox}> Check Out </div>

                    </div>
                </div>
            </div>
        )}
    }
}


export default ProductPage;