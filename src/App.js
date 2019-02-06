import React, { Component } from 'react';
import Product from './Components/Product';
import ProductTitle from './Components/ProductTitle';

// import Registration from './Components/Registration';
// import {NavLink} from 'react-router-dom'
// import Login from './Components/Login';

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
      // console.log(idx);
      
      const oldItem = prod[idx]
    //   console.log('oldItem = ',oldItem);
      // const newProduct = {...oldItem}
      return{
        selectProduct: [oldItem]
      }
    })
    // console.log('select',this.state.selectProduct);
    
  }
  
  render() {
    // const {product} = this.state
    const { prod, selectProduct } = this.state
    // console.log('Product =', prod);
    
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
