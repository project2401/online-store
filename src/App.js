import React, { Component } from 'react';
import Product from './Components/Product';
import ProductTitle from './Components/ProductTitle';
import { Link } from 'react-router-dom'

export default class App extends Component {
  state = {
    prod:[],
    selectProduct:[],
    rate:[],
    onLoad:false,
    authorization:''
  }
  
  componentDidMount(){
    fetch('http://smktesting.herokuapp.com/api/products/',{
      method:'get'
    })
    .then(response => response.json()
      .then(prod => this.setState({prod}))
    )
  }
  selectProduct = (id) => {
    fetch(`http://smktesting.herokuapp.com/api/reviews/${id}`,{
      method:'get'
    })
    .then(response => response.json()
      .then(rate => this.setState({rate}))
    )
    console.log('rate = ', this.state.rate)
    this.setState({onLoad: true})
    this.setState({authorization: this.props.authorization})
    const {prod}=this.state
    this.setState(( {selectProduct})=>{
      const idx = prod.findIndex(el=>el.id===id)
      const oldItem = prod[idx]
      return{
        selectProduct: [oldItem]
      }
    })
  }
  onSubmitForm = (e) => {
    this.setState(({rate})=>{

    })
  }
  logout = (e) => {
    e.preventDefault()
    // localStorage.removeItem('authorization')
    const {authorization} = this.state
    this.setState({onLoad: false})
    if(authorization !== undefined && authorization !== ''){
      this.props.delAuthorization(e)
    }
    this.setState({authorization: ''})
    
    
    console.log('this.state.authorization', this.state.authorization);
    
  }
  render() {
    const { prod, selectProduct, rate, onLoad, authorization } = this.state
    // const authorization = this.props.authorization
    console.log("authorization in App =", authorization);
    
    return (
        <div>
            <nav className='navbar navbar-expand-md navbar-light bg-light sticky-top'>
             
             <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarResponsive">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active"><Link to="/" className="nav-link">Home</Link></li>
                    <li className="nav-item"><Link to="/registration" className="nav-link">Registration</Link></li>
                    <li className="nav-item"><Link to="/login" className="nav-link">Login</Link></li>
                    <li className="nav-item" onClick={this.logout}><a href="#" className="nav-link">Logout</a></li>
                </ul>
            </div>
            </nav>
            <Product
                prod = {prod}
                selectProduct = {this.selectProduct}
             />
            <div className="container">
                {onLoad &&(<ProductTitle
                    selectProduct = {selectProduct}
                    rate = {rate}
                    onSubmitForm = {this.onSubmitForm}
                    authorization= {authorization}
                />)}
            </div>
        </div>
    );
  }
}

