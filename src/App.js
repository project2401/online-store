import React, { Component } from 'react';
import Product from './Components/Product';
import ProductTitle from './Components/ProductTitle';

export default class App extends Component {
  state = {
    prod:[],
    selectProduct:[],
    rate:[]
  }
  componentDidMount(){
    fetch('http://smktesting.herokuapp.com/api/products/',{
      method:'get'
    })
    .then(response => response.json()
      .then(prod => this.setState({prod}))
    )
  }
  selectProduct = (id, items) => {
    fetch(`http://smktesting.herokuapp.com/api/reviews/${id}`,{
      method:'get'
    })
    .then(response => response.json()
      .then(rate => this.setState({rate}))
    )
    console.log('rate = ', this.state.rate)
    
    const {prod}=this.state
    this.setState(( {selectProduct})=>{
      const idx = prod.findIndex(el=>el.id===id)
      const oldItem = prod[idx]
      return{
        selectProduct: [oldItem]
      }
    })
  }
  
  render() {
    const { prod, selectProduct, rate } = this.state
    
    return (
        <div>
            <div className='row'>
             <Product
                prod = {prod}
                selectProduct = {this.selectProduct}
             />
            </div>
            <div>
                <ProductTitle
                    selectProduct = {selectProduct}
                    rate = {rate}
                />
            </div>
        </div>
    );
  }
}

