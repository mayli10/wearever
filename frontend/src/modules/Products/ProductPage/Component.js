import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class ProductPage extends Component {
    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return(
            <div>
                {this.props.product}
            </div>
        )
    }
}

export default ProductPage