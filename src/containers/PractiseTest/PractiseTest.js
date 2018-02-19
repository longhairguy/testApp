import React, { Component } from 'react';

import classes from './PractiseTest.css';
import NavLayout from '../../hoc/NavLayout/NavLayout';
import Cards from '../../components/CardArea/Cards/Cards';
import {connect} from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actions from '../../store/actions/index';
class PractiseTest extends Component {
    state = {
        subjects:[
            {
                "heading":"Quantitative Apt",
                "subject":"Quantitative",
                "imageUrl":"http://cdn2.stylecraze.com/wp-content/uploads/2014/01/2823.jpg",
                "forwardUrl":"/practise-test/",
                "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also \
                the leap into electronic typesetting, remaining essentially unchanged..",
                "chapter":"1",
                "question_number":"1"
            },
            {
                "heading":"English Learning",
                "subject":"English",
                "imageUrl":"http://cdn2.stylecraze.com/wp-content/uploads/2014/01/2823.jpg",
                "forwardUrl":"/practise-test/",
                "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also \
                the leap into electronic typesetting, remaining essentially unchanged..",
                "chapter":"1",
                "question_number":"1"
            },
            {
                "heading":"General Intelligence & Reasoning",
                "subject":"Reasoning",
                "imageUrl":"http://cdn2.stylecraze.com/wp-content/uploads/2014/01/2823.jpg",
                "forwardUrl":"/practise-test/",
                "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also \
                the leap into electronic typesetting, remaining essentially unchanged..",
                "chapter":"1",
                "question_number":"1"
            },
            {
                "heading":"General Awareness",
                "subject":"generalAwareness",
                "imageUrl":"http://cdn2.stylecraze.com/wp-content/uploads/2014/01/2823.jpg",
                "forwardUrl":"/practise-test/",
                "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also \
                the leap into electronic typesetting, remaining essentially unchanged..",
                "chapter":"1",
                "question_number":"1"
            },
        ]
    }
    componentDidMount(){
        this.props.getSubjectDescription()
    }
    render () {
        
        return (
            <div className={classes.PractiseTest}>
                <NavLayout />
                <br />
                <h1 style={{"textAlign":"center"}}>Select Subject <i className="fa fa-arrow-circle-down"></i></h1>

                {this.props.testTypes!==null?<Cards testTypes={this.props.subjectDescription} buttonValue="Start"/>:<Spinner />}
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        testTypes:state.selectTest.selectTestData,
        subjectDescription:state.selectTest.subjectDescription
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getSubjectDescription:()=>dispatch(actions.getSubjectDescription())
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(PractiseTest);
