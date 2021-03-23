import React, { Component } from 'react'
import Product from './Product'
import Loading from './Loading'
import './productList.css'
import { connect } from "react-redux";
import {getAllProducts} from '../../dux/productsReducer';

class ProductList extends Component {
  componentDidMount() {
    this.props.getAllProducts();
  }

  render() {
    console.log(this.props)
    return (
      <div className="products-list">
        {
          this.props.isLoading ? <Loading /> : (
            this.props.products.map(product => {
              return <Product  key={product.id} data={product}/>
            })
          )
        }
          
      </div>
    )
  }
}
const mapStatetoProps = reduxState => {
  return reduxState.productsReducer
}

export default connect(mapStatetoProps, {getAllProducts})
(ProductList)
