import React from 'react';
import Card from './Card/Card';
import Aux from '../../../hoc/Aux/Aux';
import classes from './Cards.css';
const cards = (props) => (
    <div className={classes.Cards}>
        <Card imgUrl="https://st2.depositphotos.com/3102403/12338/v/950/depositphotos_123386256-stock-illustration-flask-with-poison-circle-icon.jpg"/>
        <Card imgUrl="https://issues.jenkins-ci.org/secure/useravatar?size=xsmall&avatarId=16500"/>
        <Card imgUrl="https://at.projects.genivi.org/jira/secure/projectavatar?pid=10400&avatarId=10201"/>
        <Card imgUrl="https://digitallibrary.atlassian.net/secure/projectavatar?pid=11100&avatarId=10709"/>
    </div>
)

export default cards