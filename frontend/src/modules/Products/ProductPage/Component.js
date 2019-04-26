import React, { Component } from 'react';
import axios from 'axios';
import styles from './ProductPage.module.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withFirebase } from '../../../components/Firebase';



class ProductPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
          isloading: true,
          productList: [],
        };
      }
      componentDidMount() {
        this.setState({ isloading: true });
        this.props.firebase.product()
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
        var prod = productList[0];
        if (isloading) {
            console.log("loading")
            return (<div>Loading Product</div>);
        } else {
            console.log(prod);
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
                        <div className={styles.pricebox}> 3 Day rental: ${((prod.prices).split(" ")[1]).slice(0,-1)}</div>
                        <div className={styles.pricebox}> 5 Day rental: ${prod.prices["5"]}</div>
                        <div className={styles.pricebox}> Purchase: ${prod.prices["purchase"]}</div>
                    </div>
                    <div className={styles.plain}>Product description</div>
                    <div className={styles.description}>{prod.description} </div>
                    <div className={styles.description}>{prod.details} </div>
                    <div className={styles.container}>
                        <div className={styles.pricebox}> Add </div>
                        <div className={styles.pricebox}> Check Out </div>

                    </div>
                    {/* <span className={styles.prices}> | starting from ${ prod.prices["3"] / 100 }</span> */}
                </div>
            </div>
        )}
    }
}


export default withFirebase(ProductPage);