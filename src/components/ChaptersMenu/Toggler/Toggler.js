import React from 'react';

import classes from './Toggler.css';

const drawerToggle = (props) => (
    <div className={classes.Toggler} onClick={props.clicked}>&#9776; </div>
);

export default drawerToggle;
