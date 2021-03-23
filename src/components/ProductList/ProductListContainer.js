import React, { Component } from 'react'
import ProductList from './ProductList'
import './productList.css'
import { connect } from 'react-redux';
import { loginUser } from '../../dux/userReducer';

class ProductListContainer extends Component {
  constructor() {
    super()
    this.state = {
      userInput: '',
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  render() {
    console.log(this.props)

    return (
      <div className="container">
        <h1 className="product-list-head">
          { this.props.userReducer.isLoggedIn ? "All of our products": "Log in to see products"}
        </h1>
        {
          this.props.userReducer.isLoggedIn ? <ProductList /> : (
          <div className="form">
          <input
              name="userInput"
              placeholder="Username"
              onChange={this.handleChange}/>
          <button onClick={() => this.props.loginUser(this.state.userInput)}>
              Sign In
          </button>
          </div>
        ) 
        }
      </div>
    )
  }
}

const mapStatetoProps = reduxState => {
  return reduxState;
}

export default connect(mapStatetoProps, {loginUser})
(ProductListContainer)
