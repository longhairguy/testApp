import React from 'react';
import Card from './Card/Card';
import classes from './Cards.css';
import Aux from '../../../hoc/Aux/Aux';
const cards = (props) => {
    const testTypeData = props.testTypes;
    let testTypeDataArray = []
    let cards = null;
    for(let key in testTypeData){
        testTypeDataArray.push(testTypeData[key])
    }
    console.log(testTypeDataArray)
    cards = (<Aux>
        {testTypeDataArray.map(data=>{
        return <Card 
        imageUrl={data.imageUrl}
        heading={data.heading}
        description={data.description} 
        forwardUrl={data.forwardUrl}/>}
         )
    }
    </Aux>
    )
    return (
        <div className={classes.Cards}>
        {cards}
        </div>
    )
}
export default cards;

/*
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

export default cards;
*/