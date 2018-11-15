import React from 'react';
import classes from './Homepagebody.css';
import card_1  from '../../../assets/card_1.png';
import card_2  from '../../../assets/card_2.png';
import card_3  from '../../../assets/card_3.png';
import logo from '../../../assets/logo.png';
import Background from '../../../assets/landing.png';
import AppImage from '../../../assets/ios-android.png';
const homepagebody = (props) => {
  const setStyle = {
    backgroundImage: "url(" + Background + ")",
    backgroundSize:"cover",
    "boxSizing":" border-box",
    padding:"0%",
    margin:"0%",

  }
  return (<div>
  <div className={classes.box1}>
    <div className={classes.left_box}>
      <h2>Heyo ! <span style={{color:'orange'}}>Friends</span></h2>
      <p>
                 Want to prepare for your exams and don't find a right solution .Don't worry
                 we are here .Here at Edupro you can prepare for various exams by following different 
                 performance leads and paths which helps you to get your ultimate goal.
                 We provide pratise questions, daily solutions,working statics for overall insight of student 
                 performance.The main purpose of this platform is to provide free education to all. 
                 It will be a community platform on which anyone can come up and practise for their exams by following different practise path provided.
        <i className="far fa-heart fa-2x"></i>
      </p>
    </div>
    <div className={classes.right_box} style={setStyle}></div>
  </div>

    <h1 style={{'textAlign':'center'}}>Key Features</h1>
    <hr />
    <div className={classes.Homepagebody}>
        <div className={classes.box2}>
             <h3>Practice Section</h3>
             <img src={card_1} alt="card_area" />
             <p>This section will be having brief explanation of each and every topic along with some practice questions.
                A user will be able to select the subject from 4 different subjects and than can navigate to the desired chapter that they want to learn. We will analyse each and every question solved by him in the practice section and user can see his performance. 
               Through this functionality he will get the proper idea of his capabiltiy of solving questions.
             </p>

        </div>
        <div className={classes.box3}>

            <h3>Daily Test Section</h3>
            <img src={card_2}  alt="card_area"/>
            <p>
            This section will be dedicated to check the user's performance within time frame.
             A mock test based on pattern of SSC exam will be provided to the user on daily basis and it 
             will help him in setting up his temprament for the exam. Similar to the practice section we 
             will also analyse his performance in daily tests and give him a proper performance chart and a rough 
            idea about his capability of solving questions within a given time frame.
            </p>
        </div>
        <div className={classes.box4}>

            <h3>High Quality Performance Metrix</h3>
            <img src={card_3}  alt="card_area"/>
            <p>
                 We will provide high Quality Performance UI Area to analyse your overall
                 progress.This not only enables you to work more harder but also 
                 in the right areas where you need more practise than others.This helps you to 
                 get overall experience which no other web platform is providing you.We also analyse your time 
                 taken on a particular question so that you can keep track of your question solving speed too.Other Features Number of Attempts he/she takes to solve a particular question
                Area-wise Rank.
            </p>
        </div>
    </div>

    <div className={classes.footer}>
      <div className={classes.footer_left}>
            <img src={logo} alt="LogoImg"/>
            <br />
            <br />
            <br />
            
            <table>
              <tbody>
                <tr>
                  <td><i className="fa fa-2x 	fa fa-id-card-o"></i></td>
                  <td style={{"paddingLeft":"5%"}}>#803-805, The Landmark Building,
                    New Delhi
              </td>
                </tr>
                <tr>
                  <td><i className="fa fa-2x fa-envelope-o"></i></td>
                  <td style={{"paddingLeft":"5%"}}>support@edupro.com</td>
                </tr>
                <tr>
                  <td><i className="fa fa-3x fa-mobile-phone"></i></td>
                  <td style={{"paddingLeft":"5%"}}> +91-8080-433-233</td>
                </tr>
                <tr>
                  <td></td>
                  <td style={{"paddingLeft":"5%"}}>
                    Office hours: 10 AM to 8 PM (Sunday Closed)
                  </td>
                </tr>
              </tbody>
            </table>
            
          
      </div>
      <div className={classes.footer_right}>
            <div>
              <img src={AppImage} alt="logoImg"/>

            </div>
            <div className={classes.tableDiv}>
              <table>
                <tbody>
                  <tr>
                    <td><i className="fa fa-facebook-official" style={{"fontSize":"48px"}}></i></td>
                    <td><i className="fa fa-instagram" style={{"fontSize":"48px"}}></i></td>
                    <td><i className="fa fa-linkedin" style={{"fontSize":"48px"}}></i></td>
                    <td><i className="fa fa-google-plus" style={{"fontSize":"48px"}}></i></td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            

      </div>
    </div>

  

    </div>)
};

export default homepagebody;
