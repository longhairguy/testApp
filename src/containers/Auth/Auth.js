import React,{Component} from 'react';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import classes from './Auth.css';
import {connect} from 'react-redux';
import {checkValidity} from '../../shared/utility';
class Auth extends Component {
    
    state = {
        loginControl:{
            email:{
                elementType:'input',
                elementConfig:{
                    type:'email',
                    placeholder:'Enter your E-mail Address'
                },
                value:'',
                validation: {
                    required:true,
                    isEmail:true
                },
                valid:false,
                touched:false
            },
            password:{
                elementType:'input',
                elementConfig:{
                    type:'password',
                    placeholder:'Enter your Password '
                },
                value:'',
                validation: {
                    required:true,
                    minLength:6
                },
                valid:false,
                touched:false
            },

        },
        registerControl:{
            name:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Enter your Full Name:'
                },
                value:'',
                validation: {
                    required:true,
                    isName:true
                },
                valid:false,
                touched:false
            },
            email:{
                elementType:'input',
                elementConfig:{
                    type:'email',
                    placeholder:'Enter your E-mail Address:'
                },
                value:'',
                validation: {
                    required:true,
                    isEmail:true
                },
                valid:false,
                touched:false
            },
            phone:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Enter your Mobile Number'
                },
                value:'',
                validation: {
                    required:true,
                    isPhone:true
                },
                valid:false,
                touched:false
            },
            password:{
                elementType:'input',
                elementConfig:{
                    type:'password',
                    placeholder:'Enter your Password '
                },
                value:'',
                validation: {
                    required:true,
                    minLength:6
                },
                valid:false,
                touched:false
            },

            confirmPassword:{
                elementType:'input',
                elementConfig:{
                    type:'password',
                    placeholder:'Confirm Password '
                },
                value:'',
                validation: {
                    required:true,
                    minLength:6
                },
                valid:false,
                touched:false
            },
           /*state: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'Delhi', displayValue: 'Delhi'},
                        {value: 'Haryana', displayValue: 'Haryana'}
                    ]
                },
                value: 'Delhi',
                validation: {},
                valid: true
            },
            city: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'Delhi', displayValue: 'Delhi'},
                        {value: 'Haryana', displayValue: 'Bhiwani'}
                    ]
                },
                value: 'Delhi',
                validation: {},
                valid: true
            }
*/

        },

    }
    inputChangedHandler = (event,controlName) => {

        if(this.props.clickedElement === 'login') {
            const updatedControls = {
                ...this.state.loginControl,
                [controlName]:{
                    ...this.state.loginControl[controlName],
                    value:event.target.value,
                    valid:checkValidity(event.target.value,this.state.loginControl[controlName].validation),
                    touched:true
                }
            };
            if(this.props.modalState){

                this.setState({
                    loginControl:updatedControls
                })
            }
        }
        else if(this.props.clickedElement === 'signup'){

            const updatedControls = {
                ...this.state.registerControl,
                [controlName]:{
                    ...this.state.registerControl[controlName],
                    value:event.target.value,
                    valid:checkValidity(event.target.value,this.state.registerControl[controlName].validation),
                    touched:true
                }
            };
            this.setState({
                registerControl:updatedControls
            })
        }

    }
    render(){
        const loginElementArray = [];
        const registerElementArray = [];

        for(let key in this.state.loginControl){
            loginElementArray.push({
                id:key,
                config:this.state.loginControl[key]
            })
        }


        for(let key in this.state.registerControl){
            registerElementArray.push({
                id:key,
                config:this.state.registerControl[key]
            })
        }
        let form = null
        if(this.props.clickedElement === 'login')
        {
            form = loginElementArray.map(formElement => (
                <Input
                key={formElement.id}
                label={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={(event) => this.inputChangedHandler(event, formElement.id)}/>
                
            ))
        }
        if(this.props.clickedElement === 'signup'){
            form = registerElementArray.map(formElement => (
                <Input
                key={formElement.id}
                label={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={(event) => this.inputChangedHandler(event, formElement.id)}/>
                
            ))
        }
        return (
            <div className={classes.Auth}>
                <form onSubmit={this.submitHandler}>
                    {form}
                <Button btnType="Success">{this.props.clickedElement}</Button>

                </form>
            </div>

        )


    }

}

const mapStateToProps = state => {
    return {
        clickedElement:state.name,
        modalState:state.modalState
    }       
}
export default connect(mapStateToProps)(Auth)