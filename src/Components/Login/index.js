import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class Login extends Component {

    state = {
        login:'',
        pass: '',
        authorization:''
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
  }
  loginForm= (e) => {
    e.preventDefault()
    var formData = new FormData();
    formData.append('username',this.state.login); 
    formData.append('password', this.state.pass);
    // let  myHeaders = new Headers({
    //   "Accept": "application/json"
    // });
    fetch('http://smktesting.herokuapp.com/api/login/',{
      method:'post',
      body: formData
    //   headers:myHeaders
    })
    .then(response => {
      response
          .json()
          .then(resJson => {
            console.log('token - ', resJson)
            if (!!resJson.token){
              this.props.authorization(resJson.token)
              this.props.history.push('/home')
            } else {
              this.props.history.push('/registration')
            }
      }).catch(error => {
        console.log('eror', error)
        alert('This user is not registered. Please register.')
      })  
    })
    .catch(error => {
      console.log('eror', error)
    })
  }
    render(){
        return(
          <div>
            <nav className='navbar navbar-expand-md navbar-light bg-light sticky-top'>
            <ul className="navbar-nav ml-auto">
                    <li className="nav-item active"><Link to="/" className="nav-link">Home</Link></li>
                    <li className="nav-item active"><Link to="/registration" className="nav-link">Registrations</Link></li>
            </ul>
          </nav>
            <form className="formLogin">
                <div className="formTitle">
                   <div className="col-auto align-items-center">
                        <h3 className="form-group">Login form</h3>
                        <h5>Login</h5>
                        <input className="form-group" placeholder="Enter login" type="text" 
                        onChange={this.handleChange} name="login"/>
                    </div>
                    <div className=" col-auto align-items-center">
                        <h5>Password</h5>
                        <input className="form-group" placeholder="Enter password" type="password" 
                        onChange={this.handleChange} name="pass"/>
                    </div>
                    <button className="btn btn btn-primary align-items-center" onClick={this.loginForm}>Login</button> 
                </div>
            </form>
          </div>
        )
    }
}