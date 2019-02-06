import React, { Component } from 'react'
import App from '../../App'
import Login from '../Login'
import Registration from '../Registration'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"

export default class Rout extends Component {

  render() {

    const isLogin = localStorage.getItem('token')

    return (
      <div>
          <Router>
              <div className="conteiner">
              <Switch>
                    {isLogin  && (
                        <Switch>
                            <Route  path="/home"  exact component={App} />
                            <Redirect  from='/' to='/home' />
                        </Switch>
                    )}
                    {!isLogin && (
                        <Switch>
                            <Route  path="/login"  exact component={Login} />
                            <Route  path="/registration"  exact component={Registration} />
                            <Redirect  from='/' to='/login' />
                        </Switch>
                    )}
                    </Switch>
              </div>
          </Router>
        
      </div>
    )
  }
}

