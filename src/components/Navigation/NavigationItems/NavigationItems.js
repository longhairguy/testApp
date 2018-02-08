import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem>Login</NavigationItem>
        <NavigationItem>SignUp</NavigationItem>
        
    </ul>
);

export default navigationItems;