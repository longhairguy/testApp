import React from 'react';
import classes from './SideDrawersLoginItem.css';
import {NavLink,withRouter} from 'react-router-dom';
const sideDrawersLoginItem = (props) => (

        <li className={classes.SideDrawersLoginItem}>
            <NavLink to={props.link}>{props.children}</NavLink>
        </li>
    
)

export default withRouter(sideDrawersLoginItem);