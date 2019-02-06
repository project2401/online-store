import React, { Component } from 'react'

export default class Login extends Component {

    state = {
        login:'',
        passw: '',
        isAuthorized: false
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
            if (!!resJson.token){
              localStorage.setItem('token', resJson.token)
            //   localStorage.setItem('emailUser', this.state.email)
              this.props.history.push('/home')
            } else {
              localStorage.removeItem('token')
              this.props.history.push('/registration')
              // window.location.href = "http://localhost:3000/registrations"
            }
        
      }).catch(error => {
        console.log('error', error)
      })  
    })
    .catch(error => {
      console.log('error', error)
    })
  }
    render(){
        return(
            <form>
                <div className=" col-auto align-items-center">
                <p className="form-group">Login form</p>
                    <p>Login</p>
                    <input className="form-group" placeholder="Enter login" type="text" 
                    onChange={this.handleChange} name="login"/>
                </div>
                <div className=" col align-items-center">
                    <p>Password</p>
                    <input className="form-group" placeholder="Enter password" type="password" 
                    onChange={this.handleChange} name="pass"/>
                </div>
                <button className="btn btn btn-primary" onClick={this.loginForm}>Registrations</button>
                <button className="btn btn btn-secondary" >Login</button>
            </form>
        )
    }
}