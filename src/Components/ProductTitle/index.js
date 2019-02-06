import React, { Component } from 'react'

export default class ProductTitle extends Component {
  state ={
      value:''
  }
  onLabelChange = (e) => {
      this.setState({
          value: e.target.value
      })
  }
  submitForm =(e) => {
      e.preventDefault()
      
  }
  render(){
    const { selectProduct, rate} = this.props
    const title = selectProduct.map((item)=>{
    const {id, title, img, text} = item
    return(
      <nav key = {id}>
        <div>{title}</div>
        <div>{img}</div>
        <div>{text}</div>
      </nav>
    )
  })
  const productRate = rate.map((feedback)=>{
    //id: 1, product: 1, rate: 4, text: "not bad", created_by: {…}, …
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
      <div key={feedback.id}> 
        <p key={id}> Nickname: {username}, at: {formatted}</p>
        <p>Comment: {feedback.text}</p>
      </div>
    )
  })
  return (
    <div className="row">
        <div className="col">
            {title}
        </div>
        <div>
            <p>Отзывы и коментарии</p>
            <form className="item-add-form d-flex"
            onSubmit={this.submitForm}
            >
            <input className="form-control"
                placeholder="Enter your item"
                type="text"
                onChange={this.onLabelChange}
                value={this.state.value}
            />
                <button className="btn btn-outline-secondary">
                    Add feedback
                </button>
            </form>
            {productRate}
        </div>
    </div>
    
  )
    }
}
  


  
    
    
  


