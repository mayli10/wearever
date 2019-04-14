import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class ProductPage extends Component {
    render() {
        return(
            <div>
                hello
            </div>
        )
    }
}

function Child({ match }) {
    return (
      <div>
        <h3>ID: {match.params.id}</h3>
      </div>
    );
  }
  

export default ProductPage