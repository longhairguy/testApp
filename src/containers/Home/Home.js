import React, { Component } from 'react';

import classes from './Home.css';
import Modal from '../../components/UI/Modal/Modal';
import NavLayout from '../../hoc/NavLayout/NavLayout';
import Homepagebody from '../../components/UI/Homepagebody/Homepagebody';
import {connect} from 'react-redux'; 
import * as actions from '../../store/actions/index';
import Auth from '../Auth/Auth';
class Home extends Component {

    render () {
        return (
            <div className={classes.Home}>
                <NavLayout />
                <Homepagebody />
                
                
                    <Modal show={this.props.modalState && !this.props.loggedIn} modalClosed={this.props.onModalClosed}>
                        {this.props.modalState?<Auth/>:null}
                    </Modal>
                
            </div>

        )
    }
}



const mapStateToProps = state => {
 return {
    name:state.modal.name,
    modalState:state.modal.modalState,
    loggedIn:state.auth.loggedIn
 }   
}

const mapDispatchToProps = dispatch => {
    return {
        onModalClosed:()=>dispatch(actions.modal_stop())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);
