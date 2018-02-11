import React from 'react';
import classes from './SideDrawersLoginItems.css';
import SideDrawerLoginItem from './SideDrawersLoginItem/SideDrawersLoginItem';
import {withRouter} from 'react-router-dom';
const sideDrawerLoginItems = (props) => (
    <div className={classes.SideDrawerLoginItems}>
        <ul>
        <SideDrawerLoginItem link="/">Profile</SideDrawerLoginItem>
        <SideDrawerLoginItem link="/">Statistics</SideDrawerLoginItem>
        <SideDrawerLoginItem link="/">CheatSheet</SideDrawerLoginItem>
        <SideDrawerLoginItem link="/">Feedback</SideDrawerLoginItem>
        <SideDrawerLoginItem link="/logout">Logout</SideDrawerLoginItem>
        
    </ul>
  </div>
)

export default withRouter(sideDrawerLoginItems);