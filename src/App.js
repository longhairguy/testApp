import React, { Component } from 'react';
import {Route,withRouter,Switch} from 'react-router-dom';
import './App.css';
import Home from './containers/Home/Home';
import {connect} from 'react-redux';
import Logout from './containers/Auth/Logout/Logout';
import SelectTest from './containers/SelectTest/SelectTest';
import * as actions from './store/actions/index';
import PractiseTest from './containers/PractiseTest/PractiseTest';
import PractiseTestStart from './containers/PratiseTestStart/PratiseTestStart';
class App extends Component {
  componentDidMount () {
    this.props.onTryAutoSignup();
  }
  render() {
    let router = null;
    if(this.props.isAuthenticated){
      router = (
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/logout" exact component={Logout} />
          <Route path="/select-test" exact component={SelectTest} />
          <Route path="/practise-test" exact component={PractiseTest} />
          <Route path="/practise-test/:subject/:chapter/:question" exact component={PractiseTestStart} />

        </Switch>
      )
    }
    else{
      router = (
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      )
    }
    return (
      <div className="App">
        {router}
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
