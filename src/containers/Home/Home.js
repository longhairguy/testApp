import React, { Component } from 'react';

import classes from './Home.css';
import Modal from '../../components/UI/Modal/Modal';
import NavLayout from '../../hoc/NavLayout/NavLayout';
import Homepagebody from '../../components/UI/Homepagebody/Homepagebody';
import {connect} from 'react-redux'; 
import * as actions from '../../store/actions/index';
import Auth from '../Auth/Auth';
class Home extends Component {
    /*componentDidMount(){
            this.props.getTest()    
    }*/
    render () {
        console.log('er',this.props.error)
        return (
            <div className={classes.Home}>
                <NavLayout />
                <Homepagebody />
                    <Modal 
                        show={this.props.modalState && !this.props.loggedIn} 
                        modalClosed={this.props.onModalClosed}
                        message={this.props.error!==null?this.props.error.message:null}
                        >
                        
                        {this.props.modalState ?<Auth/>:null}
                    </Modal>
                
            </div>

        )
    }
}



const mapStateToProps = state => {
 return {
    name:state.modal.name,
    modalState:state.modal.modalState,
    loggedIn:state.auth.loggedIn,
    error:state.auth.error
 }   
}

const mapDispatchToProps = dispatch => {
    return {
        onModalClosed:()=>dispatch(actions.modal_stop()),
        //getTest:()=>dispatch(actions.getTest())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);
