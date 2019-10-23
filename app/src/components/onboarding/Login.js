import React, {useState} from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { login } from '../../actions/'


// material UI

import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

import { connect } from 'react-redux'
import '../../App.css'

const Login = (props) => {

     const [loginInfo, setLoginInfo] = useState({
          email:'',
          password:''
     })

     const handleChanges = event => {
          setLoginInfo({
               ...loginInfo, 
               [event.target.name]: event.target.value
          })
     }

     const handleSubmit = e => {
          e.preventDefault();
          console.log("Submission")
          props.history.push('/dashboard')
     }

     
     return (
          <>
          <div className="landingBox">
               <div className="landingText">
                    <h3 id="landingTitle"> Login to Ivory</h3>
                    <h4 id="landingText">The <span id="landingSpan">greatest</span> event planning tool ever created!</h4>
               </div>
               <div className="landingFormOuter">
                    <form onSubmit={handleSubmit} className="landingFormInner">

                         <label>Email
                              <input
                              name="email"
                              type="email"
                              value={loginInfo.email}
                              placeholder="user@email.com"
                              onChange={handleChanges}
                              className="onboardingInput"
                              />
                         </label>

                        <label>Password
                         <input
                              name="password"
                              type="password"
                              value={loginInfo.password}
                              placeholder="password"
                              onChange={handleChanges}
                              className="onboardingInput"
                              />
                         </label>

                         <button type="submit" onClick={() => props.login(loginInfo, props.history)}>Login</button>
                         <NavLink to='/'>Return to home.</NavLink>
                    </form>
               </div>
              
          </div>

          <div className="footer">
               <small>Copyright (c) 2019 Ivory Software, LLC </small>
          </div>
          </>
     )
}

const mapStateToProps = state => {
     return{

     }
}

export default connect(mapStateToProps, {login})(withRouter(Login)) 
