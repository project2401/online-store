import React, { Component } from 'react';

class App extends Component {
  state = {
    prod:[]
  componentDidMount(){
    fetch('http://smktesting.herokuapp.com/api/products/',{
      method:'get'
    })
    .then(response => response.json()
      .then(prod => this.setState({prod}))
    )
  }
  
  
  render() {
    
    
    
    return (
        <div>
            <div className='row'>
             
            </div>
        </div>
    );
  }
}

export default App;
