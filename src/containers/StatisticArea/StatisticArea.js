import React,{Component} from 'react';
import ChaptersMenu from '../../components/ChaptersMenu/ChaptersMenu';
import classes from './StatisticArea.css';
import Toggler from '../../components/ChaptersMenu/Toggler/Toggler';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import Navbar from "../../components/Navigation/Navbar/Navbar";
import {Bar,Line,Pie} from 'react-chartjs-2';
import { get_graph_data } from '../../store/actions/statistics';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
class StatisticArea extends Component {
    
    state = {
        subjectName:["Quantitative","English","Reasoning","generalAwareness"],
        chartData:{
            labels:['Boston','Worcester','Springfield','Lowell'],
            datasets:[
                {
                    label:'Population',
                    data:[
                        615452,1005123,575314,663352
                    ],
                    backgroundColor:['rgba(255,99,132,0.6)','rgba(54,162,235,0.6)','rgba(255,206,86,0.6)','rgba(75,192,192,0.6)']
                }
            ]

        }
    }

    show = (subject) => {
        this.props.getGraphData(subject)
    }
    
    render(){
        let data = null;
        let chartData = null;
        let lineData = null;
        let graphs = null;
        if(this.props.graphData){
            data = this.props.graphData
            let topic_names = Object.keys(data)
            let correct_answer_array = []
            let time_taken_subject_wise = []
            for (let x in data){
                correct_answer_array.push(parseInt(data[x]['Correct']))
            }
            for (let x in data){
                time_taken_subject_wise.push(parseInt(data[x]['AvgTime']))
            }

            console.log(correct_answer_array)
            console.log(time_taken_subject_wise)
            chartData = {
                labels:topic_names,
                datasets:[
                    {
                        label:'Correct Questions Per Topic',
                        data:correct_answer_array,
                        backgroundColor:['rgba(255,99,132,0.6)','rgba(54,162,235,0.6)','rgba(255,206,86,0.6)','rgba(75,192,192,0.6)']
                    }
                ],
                            
    
            }
            
            lineData = {
                labels:topic_names,
                datasets:[
                    {
                        label:'Correct Questions Per Topic',
                        data:time_taken_subject_wise,
                        backgroundColor:['rgba(255,99,132,0.6)','rgba(54,162,235,0.6)','rgba(255,206,86,0.6)','rgba(75,192,192,0.6)']
                    }
                ],
                            
    
            }
            graphs = (
                <div>
                    <Bar 
                            data={chartData}
                            options={{
                                title:{
                                    display:true,
                                    text:'Performance Graph',
                                    fontSize:25

                                }
                                ,
                                legend:{
                                    display:true,
                                    position:'right'
                                },
                                scales: {
                                    yAxes: [{
                                        ticks: {
                                            beginAtZero: true
                                        }
                                    }]
                                }
                            }}
                        />
                        <Line 
                            data={lineData}
                            options={{
                                title:{
                                    display:true,
                                    text:'Avg Time Taken Per Question VS Subject',
                                    fontSize:25

                                },
                                legend:{
                                    display:true,
                                    position:'right'
                                },

                                scales: {
                                    yAxes: [{
                                        ticks: {
                                            beginAtZero: true
                                        }
                                    }]
                                }
                            }}
                            />
                        <Pie 

                            data={chartData}
                            options={{
                                title:{
                                    display:true,
                                    text:'Strongest Subjects',
                                    fontSize:25

                                },
                                legend:{
                                    display:true,
                                    position:'right'
                                }
                            }}
                            />
                </div>
        )
    
        }
        else{
            graphs = (
                <div>
                    <h1>Statistics Area</h1>
                    <p className={classes.icon} style={{color:"red"}}> 
                        <i class="fa fa-angle-double-left"></i> &nbsp; 
                        Please select one the subject to see your progress</p>

                
                </div>
            )
        }
        
        

        let list_of_subject = (this.state.subjectName.map(subject=>{
            
            return <li onClick={()=>this.show(subject)} key={subject}>{subject}</li>
            
        }))
        console.log(list_of_subject)
        
        return (
            
            <div className={classes.StatisticArea}>
                <Navbar />
                <div className={classes.sidenav}>
                    <h4 style={{color:"white",textAlign:'center'}}>Select Subject</h4>
                    <ul>
                        {list_of_subject}
                    </ul>
                </div>
                <div className={classes.main}>
                    <div className={classes.graphArea}>
                        {graphs}               
                    </div>
                </div>
            </div>
        )
        
    }
}
const mapStateToProps = state => {
    return {
        graphData:state.statistics.graphData
    }
}
const mapDispatchToProps = dispatch => {

    return {
        getGraphData:(subject_name)=>dispatch(actions.statistic_data(subject_name))
    }


} 

export default connect(mapStateToProps,mapDispatchToProps)(StatisticArea);