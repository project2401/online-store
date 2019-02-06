import React, { Component } from 'react';
import Product from './Components/Product';
import ProductTitle from './Components/ProductTitle';

class App extends Component {
  state = {
    prod:[],
    selectProduct:[]
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
    const {prod}=this.state
    this.setState(( {selectProduct})=>{
      const idx = prod.findIndex(el=>el.id===id)
      const oldItem = prod[idx]oldItem}
      return{
        selectProduct: [oldItem]
      }
    })
  }
  
  render() {
    const { prod, selectProduct } = this.state
    
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
                />
            </div>
        </div>
    );
  }
}

export default App;
