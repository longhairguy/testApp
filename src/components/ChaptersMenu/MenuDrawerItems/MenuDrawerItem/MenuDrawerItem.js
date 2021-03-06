import React,{Component} from 'react';

import classes from './MenuDrawerItem.css';
import {connect} from 'react-redux';
import * as action from '../../../../store/actions/index';
import {Link} from 'react-router-dom';
class MenuDrawerItem extends Component {
  changeChapter = (baseUrl,chapterNumber) => {
    console.log('sdsdsdssd',baseUrl+'/'+chapterNumber.toString()+'/0')
    let url = baseUrl+'/'+chapterNumber.toString()+'/0'
    //console.log(url.slice(15,url.length))
    this.props.nextQuestion(url)
  }
    render(){
      console.log('props',this.props)
      return (
        
          <li className={classes.MenuDrawerItem} 
              onClick={()=>this.changeChapter(this.props.baseUrl,this.props.chapterNumber)}
              
              >
            <Link to={this.props.url}>{this.props.children}</Link>
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
    onModalClicked:(name)=>dispatch(action.modal_start(name)),
    nextQuestion:(url)=>dispatch(action.questions(url))
  }
}

export default connect(mapStateToProps,mapDisptachToProps)(MenuDrawerItem);


