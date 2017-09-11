import React from 'react';
import ReactDom from 'react-dom';
import DashBoard from './DashBoard';
import CoachLogin from './Login';
import Middle from './middle';
import Register from './Register';

export default class Middle2 extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value:false,
    }
    this.hari = this.hari.bind(this);
  }

  hari(x)
  {
      this.setState({value:x})
  }

  render()
  {
    return(
      <div>
        {this.state.value?<Middle />:<Register check = {this.hari}/>}
      </div>
    )
  }
}
