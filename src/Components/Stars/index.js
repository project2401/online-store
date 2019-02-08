import React, { Component } from 'react'

export default class Stars extends Component {
  
    changeRate = (e) => {
        // console.log('changeRate = ', e.target.value)
        this.props.changeRate(e.target.value)
    }
  render(){
    // const {changeRate} = this.props
    return(
        <div> 
            <span>Rate product</span>
            <span className="star-rating star-5" onChange = { this.changeRate }>
                <input type="radio" name="rating" value="1"/><i></i>
                <input type="radio" name="rating" value="2"/><i></i>
                <input type="radio" name="rating" value="3"/><i></i>
                <input type="radio" name="rating" value="4"/><i></i>
                <input type="radio" name="rating" value="5"/><i></i>
            </span>
        </div>
        )
    }
}
  


  
    
    
  


