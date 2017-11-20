import React, { Component } from 'react';

class ProductTable extends Component {
  constructor(props){
    super(props)
    this.state = {
      products: props.products.map(p => Object.assign(p, {checked: false}))
    }
    this.allSelect = false
  }
  
  handleCheck = (id) => {
    this.setState(prevState => 
      prevState.products.map(p => {
        if(p.id === id)
          return Object.assign(p, {checked: !p.checked})
        else
          return p
      })
    )
  }

  selectAll = () => {
    this.allSelect = !this.allSelect
    this.setState(prevState => {
      return({
        products: prevState.products.map(p => Object.assign(p, {checked: this.allSelect}))
      })
    })
  }

  render() {
    const {products} = this.state
    const message = products.filter(p => p.checked).map(p => p.name).join();
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>
                <input type="checkbox" checked={this.allSelect} 
                  onChange={this.selectAll}
                />
              </th>
              <th>id</th>
              <th>name</th>
            </tr>
          </thead>
          <tbody>
            {
              products.map(product => 
                <ProductRow product={product} key={product.id}
                  handleCheck={() => this.handleCheck(product.id)}
                />
              )
            }
          </tbody>
        </table>
        <p>{message ?  message: 'Nothing'} is/are checked</p>
      </div>
    );
  }
}

const ProductRow = (props) => {
  const {product} = props
  return(
    <tr>
      <td>
        <input type="checkbox" onChange={props.handleCheck} 
          checked={product.checked}/>
      </td>
      <td>{product.id}</td>
      <td>{product.name}</td>
    </tr>
  )
}

export default ProductTable;
