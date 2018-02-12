import React from 'react';
import logoImg from '../../assets/logo.png';
import classes from './Logo.css';
import {Link} from 'react-router-dom';
const logo = (props) => (
    <div className={classes.Logo}>
        <Link to="/" exact><img src={logoImg} alt="bestTest"/></Link>
    </div>
);

export default logo;