import React, { Component } from 'react'
import Stars from '../Stars';

export default class ProductTitle extends Component {
  state ={
      comment:'',
      changeRate:''
  }
  onLabelChange = (e) => {
      this.setState({
          comment: e.target.value
      })
  }
  submitForm =(e) => {
      e.preventDefault()
      const { comment, changeRate } =this.state
      this.props.onSubmitForm(comment, changeRate)
      this.setState({comment: ''})
      this.setState({changeRate: ''})
      
  }
  changeRate = (e) => {
      this.setState({changeRate: e})
      console.log('eeeee', e);
      
  }
  render(){
    const { selectProduct, rate, authorization} = this.props
    const title = selectProduct.map((item)=>{
    const {id, title, img, text} = item
    return(
      <nav key = {id} className="productInfo">
        <h2>{title}</h2>
        <img src={img}/>
        <div>Product Description</div>
        <div className="description">{text}</div>
      </nav>
    )
  })
  const productRate = rate.map((feedback)=>{
    const { id, username} = feedback.created_by
    const {created_at} = feedback
    let date = new Date(created_at)
    let options = {
        year: "numeric",
        month: "long",
        day: "numeric"
      }
      let formatted = date.toLocaleDateString('en-EN', options)
    return(
      <div key={feedback.id} className="container"> 
        <h4 key={id}> {username}</h4>
        <nav>{formatted}</nav> 
        <h5>Rate: {feedback.rate}</h5>
        <nav>{feedback.text}</nav>
      </div>
    )
  })
  return (
    <div className="row">
        <div className="col-auto">
            {title}
        </div>
        <div>
            <p>Feedback</p>
            {authorization && (
            <form className="item-add-form d-flex"
                onSubmit={this.submitForm}
                >
                <Stars
                changeRate = {this.changeRate}
                />
                <input className="form-control"
                    placeholder="Enter your item"
                    type="text"
                    onChange={this.onLabelChange}
                    value={this.state.comment}
                    />
                <button className="btn btn-success">
                    Add feedback
                </button>
            </form>)}
            {productRate}
        </div>
    </div>
    
  )
    }
}
  


  
    
    
  


