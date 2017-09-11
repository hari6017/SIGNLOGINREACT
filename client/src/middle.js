import React from 'react';
import ReactDom from 'react-dom';
import DashBoard from './DashBoard';
import CoachLogin from './Login';


export default class Middle extends React.Component{
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
        {this.state.value?<DashBoard />:<CoachLogin validuser = {this.hari}/>}
      </div>
    )
  }
}
