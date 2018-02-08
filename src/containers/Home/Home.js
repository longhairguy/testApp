import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import classes from './Home.css';
import Modal from '../../components/UI/Modal/Modal';
import NavLayout from '../../hoc/NavLayout/NavLayout';
import ImageArea from '../../components/UI/ImageArea/ImageArea';
class Home extends Component {

    render () {
        return (
            <div className={classes.Home}>
                <NavLayout />
                <ImageArea />
            </div>

        )
    }
}


export default Home;
