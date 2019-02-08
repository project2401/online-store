import React, { Component } from 'react'
import App from '../../App'
import Login from '../Login'
import Registration from '../Registration'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"

export default class Rout extends Component {
state = {
    authorization:''
}
    authorization = (auth) => {
        this.setState({ authorization: auth })
        // console.log('authorization = ', this.state.authorization)
    }
    delAuthorization = () => {
        this.setState({authorization: ''})
    }
  render() {

    // const isLogin = localStorage.getItem('token')
    const {authorization} = this.state

    return (
      <div>
          <Router>
              <div className="container">
              <Switch>
                    {!authorization  && (
                        <Switch>
                            <Route  path="/home"  exact component={App} />
                            <Route  path="/login"  exact render={()=><Login authorization={this.authorization}/>} />
                            <Route  path="/registration"  exact component={Registration} />
                            <Redirect  from='/' to='/home' />
                        </Switch>
                    )}
                    {authorization && (
                        <Switch>
                            <Route  path="/login"  exact component={Login} />
                            <Route  path="/registration"  exact component={Registration} />
                            {/* <Route  path="/home"  exact component={App} /> */}
                            <Route  path="/home"  exact render={()=><App authorization={authorization}
                            delAuthorization = {this.delAuthorization}/>} />
                            <Redirect  from='/' to='/home' />
                            {/* <Redirect  from='/' to='/login' /> */}
                        </Switch>
                    )}
                    </Switch>
              </div>
          </Router>
        
      </div>
    )
  }
}

