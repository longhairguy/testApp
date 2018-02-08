import React,{Component} from 'react';

import classes from './NavigationItem.css';
import Button from '../../../UI/Button/Button';
import {connect} from 'react-redux';
import * as action from '../../../../store/actions/index';
class NavigationItem extends Component {
  componentDidUpdate(){
    console.log(this.props.modalState)
  }
    render(){
      return (
        <div>
          <li className={classes.NavigationItem}>
              <Button btnType="Primary" clicked={this.props.onModalClicked}>{this.props.children}</Button>
          </li>
        </div>
      )
    }
};

const mapStateToProps = state => {
  return {
    modalState:state.modalState
  }
}

const mapDisptachToProps = dispatch => {
  return {
    onModalClicked:()=>dispatch(action.auth_start())
  }
}

export default connect(mapStateToProps,mapDisptachToProps)(NavigationItem);
