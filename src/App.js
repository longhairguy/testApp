import React, { Component } from 'react';
import {Redirect,Route,withRouter,Switch} from 'react-router-dom';
import './App.css';
import Home from './containers/Home/Home';
import {connect} from 'react-redux';
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/index';
class App extends Component {
  componentDidMount () {
    this.props.onTryAutoSignup();
  }
  render() {

    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/logout" exact component={Logout} />
        </Switch>
      </div>  
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated:state.auth.token !== null
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch( actions.authCheckState() )
  };
};
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
