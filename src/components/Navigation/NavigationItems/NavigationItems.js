import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem name="login">Login</NavigationItem>
        <NavigationItem name="signup">SignUp</NavigationItem>
        
    </ul>
);

export default navigationItems;