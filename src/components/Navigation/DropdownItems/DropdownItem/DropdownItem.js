import React from 'react';
import classes from './DropdownItem.css';
import {NavLink} from 'react-router-dom';
const dropdownitem = (props) => (

    <div className={classes.dropdownItem}>
        <NavLink to={props.link}>{props.children}</NavLink>
    </div>
)

export default dropdownitem;