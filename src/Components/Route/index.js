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
    }
    delAuthorization = () => {
        this.setState({authorization: ''})
    }
  render() {

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
                            <Route  path="/home"  exact render={()=><App authorization={authorization}
                            delAuthorization = {this.delAuthorization}/>} />
                            <Redirect  from='/' to='/home' />
                        </Switch>
                    )}
                    </Switch>
              </div>
          </Router>
      </div>
    )
  }
}

