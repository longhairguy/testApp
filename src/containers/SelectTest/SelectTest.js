import React, { Component } from 'react';

import classes from './SelectTest.css';
import NavLayout from '../../hoc/NavLayout/NavLayout';
import Cards from '../../components/CardArea/Cards/Cards';
class SelectTest extends Component {

    render () {
        return (
            <div className={classes.SelectTest}>
                <NavLayout />
                <h1 style={{"textAlign":"center"}}>Select Your Path <i className="fa fa-arrow-circle-down"></i></h1>
                <Cards />
            </div>

        )
    }
}



export default SelectTest;
