import React,{Component} from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../../UI/Backdrop/Backdrop';
import {connect} from 'react-redux';
import SideDrawersLoginItems from './SideDrawersLoginItems/SideDrawersLoginItems';
class sideDrawer extends Component {
    render(){
        let attachedClasses = [classes.SideDrawer,classes.Close];
        if(this.props.open){
            attachedClasses = [classes.SideDrawer,classes.Open];
        }

        return (
            <Aux>
                <Backdrop show={this.props.open} clicked={this.props.closed}/>
                <div className={attachedClasses.join(' ')} onClick = {this.props.closed}>
                    <div className={classes.Logo}>
                        <Logo />
                    </div>
                    <nav>
                        {!this.props.isAuthenticated?<NavigationItems/>:<SideDrawersLoginItems/>}
                    </nav>
                </div>
            </Aux>
        )

    }

}

const mapStateToProps = state => {
    return {
        isAuthenticated:state.auth.token !== null,
        token:state.auth.token
    }
}

export default connect(mapStateToProps)(sideDrawer);
