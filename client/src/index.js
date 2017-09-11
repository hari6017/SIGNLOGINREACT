import React from 'react';
import ReactDom from 'react-dom';
import CoachLogin from './Login.js';
import Register from './Register.js';
import Failure from './Failure.js';
import Middle from './middle';
import Middle2 from './middle2';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

export default class Home extends React.Component{

  render()
  {

      return(
        <div className = "container">
        <div className = "center">

      <div className = "col-lg-12">
      <div className = "col-lg-6">
      <button className = "bt btn-success btn-xl"><Link className ="dec" to = '/clogin/Login'>COACH</Link></button>
      </div>
        <div className = "col-lg-6">
        <button className = "bt btn-primary btn-xl"><Link className ="dec" to = '/Register'>STUDENT</Link></button>
          </div>

        </div>
        </div>
      </div>

      );
      }

      }


      ReactDom.render(<Router history = {browserHistory}>
                        <Route path = "/" component = {Home} />
                        <Route path = "/clogin/Login" component = {Middle } />
                        <Route path = "/Register" component = {Middle2} />

                      </Router>,document.getElementById("app"));
