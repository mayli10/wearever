import React, { Component } from 'react';
import axios from 'axios';
import styles from './ProductPage.module.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const prod = {
    "sku": "12064273040195392", 
    "title": "Poach Pocket Coat", 
    "description": "Lulus Exclusive! Everyone will want to catch a glimpse of you wearing the Lulus Irresistible Charm Black Midi Dress! Medium-weight, stretchy knit dazzles across adjustable spaghetti straps, a high, round neckline, and a princess-seamed bodice. A high waist tops a full, flared A-line skirt for a darling, feminine look. Hidden back zipper.", 
    "details": "Lined. Self: 96% Polyester, 4% Spandex. Lining: 100% Polyester.Hand Wash Cold.Imported.",
    "designer": "Hutch", "msrp": 18900, "currencyId": "USD", "tags": ["sightseeing", "theme-park", "landmark", "beach", "dining", "night-out"], 
    "prices": {"3": 1500, "5": 2000, "purchase": 17000}, "variants": [{"id": "grey-small", "options": {"color": "Grey", "size": "Small"}, 
    "images": ["http://localhost:3001/get_image/products/grey-coat.png"], "inStock": true}, {"id": "camel-medium", "options": {"color": "Camel", "size": "Medium"}, "images": ["http://localhost:3001/get_image/products/camel-coat.png"], "inStock": true}], 
    "optionTypes": [{"size": "Size"}, {"color": "Color"}], "defaultImages": ["http://localhost:3001/get_image/products/grey-coat.png", "http://localhost:3001/get_image/products/camel-coat.png"]
}


class ProductPage extends Component {

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return(
            <div className={styles.container}>
                <div className={styles['img-container']}>
                    <img className={styles['img']}
                    src={prod.defaultImages[0]}
                    onMouseOver={e => (e.currentTarget.src = prod.defaultImages[1])}
                    onMouseOut={e => (e.currentTarget.src = prod.defaultImages[0])}/>
                    <div className ={styles.container}>
                        <img src={prod.defaultImages[0]}
                        className = {styles.preview} />
                        <img src={prod.defaultImages[1]}
                        className = {styles.preview} />
                    </div>
                </div>
                <div className={styles.information}>
                    <div className={styles.infoSection}/>
                    <div className={styles.designer}>{ prod.designer.toUpperCase() }</div>
                    <div className={styles.title}>{ prod.title }</div>
                    <span className={styles.msrp}>${ prod.msrp / 100 } retail</span>
                    <div className={styles.boxcontainer}>
                        <div className={styles.pricebox}> 3 Day rental: ${prod.prices["3"]/100}</div>
                        <div className={styles.pricebox}> 5 Day rental: ${prod.prices["5"]/100}</div>
                        <div className={styles.pricebox}> Purchase: ${prod.prices["purchase"]/100}</div>
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
        )
    }
}


export default ProductPage;