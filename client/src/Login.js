import React from 'react';
import { Route, Redirect } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Failure from './Failure';
class CoachLogin extends React.Component {
constructor(props){
  super(props);
  this.state={
  username:'',
  password:'',
  status:false

  }
  this.handleClick = this.handleClick.bind(this);

 }
 handleClick()
 {
   var that = this;
   $.ajax({
     method : 'post',
     url : '/clogin',
     data : {username:this.state.username,password:this.state.password},
     success: function(results)
     {

       if(results!="")
       {
         that.props.validuser(true);
        return <Redirect to='/Register'  />
       }
       else {
         that.setState({status:true});
       }
       console.log("vachindi");
       console.log(results);

     }
   })

 }

render() {
    return (
      <div className = "container">
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Login"
           />
           <TextField
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Submit" primary={true} style={style} onClick={this.handleClick}/>

         </div>
         </MuiThemeProvider>
          <div>
          {this.state.status?<Failure/>:null}
          </div>
      </div>
    );
  }
}
const style = {
 margin: 15,
};
export default CoachLogin;
