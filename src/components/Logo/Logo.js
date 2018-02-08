import React from 'react';
import logoImg from '../../assets/logo.png';
import classes from './Logo.css';
const logo = (props) => (
    <div className={classes.Logo}>
        <img src={logoImg} alt="bestTest"/>
    </div>
);

export default logo;