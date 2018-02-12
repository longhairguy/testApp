import React, { Component } from 'react';

import classes from './Modal.css';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';
import {connect} from 'react-redux';
import * as action from '../../../store/actions/index';
class Modal extends Component {

    shouldComponentUpdate ( nextProps, nextState ) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }
    componentWillUpdate(){

        if(this.props.error){
            this.props.clearErrorMessage()
        }

    }
    render () {
        
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.message!==null?<h3 style=
                    {{"color":"white","backgroundColor":"orange","textAlign":"center",}}>
                    {this.props.message}</h3>:null}
                    
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        clickedElement:state.name,
        error:state.auth.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        clearErrorMessage:()=>dispatch(action.clear_error_message())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Modal);