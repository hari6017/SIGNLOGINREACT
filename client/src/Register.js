import React from 'react';
import { Route, Redirect } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
class Register extends React.Component {
constructor(props){
  super(props);
  this.state={
    id:'',
  name:'',
  email:'',
  password:'',
  rpassword:'',

  }
  this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
 }
 handleClick()
 {
   var that = this;
   $.ajax({
     method : 'post',
     url : '/save',
     data : {id:this.state.id,name:this.state.name,email:this.state.email,password:this.state.password},
     success: function(results)
     {

       console.log("vachindi");
       console.log(results);
     }
   })
 }
 handleClick2()
 {
   this.props.check(true);
 }
render() {
    return (
      <div className = "container">
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Register"
           />
           <TextField
             hintText="Enter your ID"
             floatingLabelText="ID"
             onChange = {(event,newValue) => this.setState({id:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Name"
             floatingLabelText="Name"
             onChange = {(event,newValue) => this.setState({name:newValue})}
             />
           <br/>
           <TextField
             type="email"
             hintText="Enter your Email"
             floatingLabelText="Email"
             onChange = {(event,newValue) => this.setState({email:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <TextField
               type="password"
               hintText=" Password Again"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({rpassword:newValue})}
               />
             <br/>

             <RaisedButton label="Submit" primary={true} style={style} onClick={this.handleClick}/>
             <label>Already Have an account?</label><RaisedButton label="Login" primary={true} style={style} onClick={this.handleClick2}/>

         </div>
         </MuiThemeProvider>

      </div>
    );
  }
}
const style = {
 margin: 15,
};
export default Register;
