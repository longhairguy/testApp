import React, { Component } from 'react';

import classes from './Navbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import {connect} from 'react-redux';
import DropDownItems from '../DropdownItems/DropdownItems';
class Navbar extends Component{
    render(){
        return (
            <header className={classes.Navbar}>
                <DrawerToggle clicked={this.props.drawerToggleClicked} />
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav className={classes.DesktopOnly}>
                    {!this.props.isAuthenticated?<NavigationItems clicked={this.props.clicked} />:<DropDownItems />}
                </nav>
            </header>
        )
    }
}
  
const mapStateToProps = state => {
    return {
        isAuthenticated:state.auth.token !== null,
        token:state.auth.token
    }
}
export default connect(mapStateToProps)(Navbar);






