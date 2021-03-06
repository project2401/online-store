import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class Registration extends Component {

    state = {
        login: '',
        pass: '',
        authorization:''
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
                // console.log('token',token.token);
                // localStorage.setItem('authorization', token.token)
                // this.setState({authorization: token.token})
                this.props.history.push('/login')
        }
            )
            .catch(function (error) {
              console.log(error)
          }))   
          }

    render(){
       
        return(
            <div>
            <nav className='navbar navbar-expand-md navbar-light bg-light sticky-top'>
            <ul className="navbar-nav ml-auto">
                    <li className="nav-item active"><Link to="/" className="nav-link">Home</Link></li>
                    <li className="nav-item active"><Link to="/login" className="nav-link">Login</Link></li>
            </ul>
          </nav>
            <form className="formRegistration">
                <div className="formTitle">
                    <div className=" col-auto align-items-center">
                        <h3 className="form-group">Form registration</h3>
                        <h5 className="FormTItle">Login</h5>
                        <input className="form-group" placeholder="Enter login" type="text" 
                        onChange={this.handleChange} name="login"/>
                    </div>
                    <div className=" col align-items-center">
                        <h5>Password</h5>
                        <input className="form-group" placeholder="Enter password" type="password" 
                        onChange={this.handleChange} name="pass"/>
                    </div>
                    <button className="btn btn btn-primary" onClick={this.regForm}>Registrations</button>
                </div>
            </form>
            </div>
        )
    }
}