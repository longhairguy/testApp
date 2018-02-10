import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import * as action from '../../../store/actions/index';
import {connect} from 'react-redux'
class Logout extends Component {
    componentDidMount () {
        this.props.onLogout()
    }
    render(){
       
        return(
            <Redirect to="/" />
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout:()=>dispatch(action.logout())
    };
};


export default connect(null,mapDispatchToProps)(Logout);