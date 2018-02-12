import React, { Component } from 'react';

import classes from './SelectTest.css';
import NavLayout from '../../hoc/NavLayout/NavLayout';
import Cards from '../../components/CardArea/Cards/Cards';
import {connect} from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';
class SelectTest extends Component {

    render () {
        return (
            <div className={classes.SelectTest}>
                <NavLayout />
                <h1 style={{"textAlign":"center"}}>Select Your Path <i className="fa fa-arrow-circle-down"></i></h1>
                
                {this.props.testTypes!==null?<Cards testTypes={this.props.testTypes} buttonValue="Select"/>:<Spinner />}
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        testTypes:state.selectTest.selectTestData
    }
}



export default connect(mapStateToProps)(SelectTest);
