import React, { Component } from 'react';
import './App.css';
import ProductTable from './ProductTable';

var products = [], index = 0;
for(; index < 3; index++)
  products.push({id: index+1, name: `product${index+1}`})

class App extends Component {
  render() {
    return (
      <ProductTable products={products}/>
    );
  }
}

export default App;
