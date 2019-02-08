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
    authorization:'',
    idProduct:''
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
    // console.log('rate = ', this.state.rate)
    this.setState({onLoad: true})
    this.setState({authorization: this.props.authorization})
    this.setState({idProduct: id})
    // console.log('idProduct = =',this.state.idProduct);
    
    const {prod}=this.state
    this.setState(( {selectProduct})=>{
      const idx = prod.findIndex(el=>el.id===id)
      const oldItem = prod[idx]
      return{
        selectProduct: [oldItem]
      }
    })
  }
  onSubmitForm = (comment, changeRate) => {
    let id = this.state.idProduct
    let formData = new FormData();
    console.log('comment', comment)
    console.log('changeRate', changeRate)
    
    formData.append('rate',changeRate); 
    formData.append('text', comment);
    fetch(`http://smktesting.herokuapp.com/api/reviews/${id}/`,{
      method:'post',
      body: formData
    //   headers:myHeaders
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
    
    
    // console.log('this.state.authorization', this.state.authorization);
    
  }
  // changeRate = (e) =>{
  //   this.setState({changeRate: e})
  //   // console.log('changeRate in state ',this.state.changeRate);
    
  // }
  render() {
    const { prod, selectProduct, rate, onLoad, authorization } = this.state
    // const authorization = this.props.authorization
    // console.log("authorization in App =", authorization);
    
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
                    changeRate = {this.changeRate}
                />)}
            </div>
        </div>
    );
  }
}

