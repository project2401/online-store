import React, { Component } from 'react'

export default class Registration extends Component {

    state = {
        login: '',
        pass: ''
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
  }

    regForm = (e) => {
        e.preventDefault()
        var formData = new FormData();
          formData.append('password', this.state.pass);
          formData.append('username', this.state.login);
        fetch('http://smktesting.herokuapp.com/api/register/',{
            method:'post',
            body: formData
          })
          .then(response => response.json() 
            .then(token => {
                console.log('token',token.token);
                localStorage.setItem('token', token.token)
        }
            )
            .catch(function (error) {
              console.log(error)
          }))   
          }

    render(){
       
        return(
            <form>
                <div className=" col-auto align-items-center">
                    <p className="form-group">Form registration</p>
                    <p className="FormTItle">Login</p>
                    <input className="form-group" placeholder="Enter login" type="text" 
                    onChange={this.handleChange} name="login"/>
                </div>
                <div className=" col align-items-center">
                    <p>Password</p>
                    <input className="form-group" placeholder="Enter password" type="password" 
                    onChange={this.handleChange} name="pass"/>
                </div>
                <button className="btn btn btn-primary" onClick={this.regForm}>Registrations</button>
                <button className="btn btn btn-secondary" >Login</button>
            </form>
        )
    }
}