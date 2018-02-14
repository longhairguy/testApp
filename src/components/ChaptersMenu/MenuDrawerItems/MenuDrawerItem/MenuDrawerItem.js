import React,{Component} from 'react';

import classes from './MenuDrawerItem.css';
import {connect} from 'react-redux';
import * as action from '../../../../store/actions/index';
import {Link} from 'react-router-dom';
class MenuDrawerItem extends Component {
    render(){
      return (
        
          <li className={classes.MenuDrawerItem}>
              <Link to="">{this.props.children}</Link>
          </li>
        
        
      )
    }
};

const mapStateToProps = state => {
  return {
    modalState:state.modalState, 
  }
}

const mapDisptachToProps = dispatch => {
  return {
    onModalClicked:(name)=>dispatch(action.modal_start(name))
  }
}

export default connect(mapStateToProps,mapDisptachToProps)(MenuDrawerItem);
