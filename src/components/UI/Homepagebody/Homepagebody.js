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
                 Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
                 type specimen bookinter took a galley of type and scrambled it to make a
                
                 type specimen book.
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
                 when an unknown prindustrys standard dummy text ever since the 1500s,
                 when an unknown printer took a galley of type and scrambled it to make a
                 type specimen bookinter took a galley of type and scrambled it to make a
                 type specimen book.
        <i className="far fa-heart fa-2x"></i>
      </p>
    </div>
    <div className={classes.right_box} style={setStyle}></div>
  </div>

    <h1 style={{'textAlign':'center'}}>Key Features</h1>
    <hr />
    <div className={classes.Homepagebody}>
        <div className={classes.box2}>
             <h3>Box 1</h3>
             <img src={card_1} alt="card_area" />
             <p>
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has beindustrys standard dummy text ever since the 1500s,
                 when an unknown printer took a galley of type and scrambled it to make a
                 type specimen booken the industry /standard dummy text ever since the 1500s,
                 when an unknown printer took a galley of type and scrambled it to make a
                 type specimen book.
             </p>

        </div>
        <div className={classes.box3}>

            <h3>Box 2</h3>
            <img src={card_2}  alt="card_area"/>
            <p>
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
                 when an unknown printer took a galley of type and scrambled it to make a
                 type specimen bookindustrys standard dummy text ever since the 1500s,
                 when an unknown printer took a galley of type and scrambled it to make a
                 type specimen book.
            </p>
        </div>
        <div className={classes.box4}>

            <h3>Box 3</h3>
            <img src={card_3}  alt="card_area"/>
            <p>
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
                 when an unknown prindustrys standard dummy text ever since the 1500s,
                 when an unknown printer took a galley of type and scrambled it to make a
                 type specimen bookinter took a galley of type and scrambled it to make a
                 type specimen book.
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
                      (Above Croma), Sector 7,
                      Kharghar, Navi Mumbai - 410210
              </td>
                </tr>
                <tr>
                  <td><i className="fa fa-2x fa-envelope-o"></i></td>
                  <td style={{"paddingLeft":"5%"}}>support@testbook.com</td>
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
