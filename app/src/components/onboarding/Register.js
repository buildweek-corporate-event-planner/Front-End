import React, {useState} from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { register } from '../../actions/'
import {connect} from 'react-redux'

import '../../App.css'
const Register = (props) => {

     const [registerUser, setRegisterUser] = useState({
          email:'',
          password:'',
          role:'',
          company:''
     })

     const handleChanges = event => {
          setRegisterUser({
               ...registerUser,
               [event.target.name]: event.target.value
          })
     }

    const handleSubmit = e => {
          e.preventDefault();
          console.log("Submission")
     }

     return (
          <>
          <div className="landingBox">
                    <div className="landingText">
                         <h3 id="landingTitle"> Signup for Ivory</h3>
                         <h4 id="landingText">The <span id="landingSpan">greatest</span> event planning tool ever created!</h4>
                    </div>
               <div className="oboardingForm">
                    <form onSubmit={handleSubmit}>
                         <label>Email
                         <input
                         name="email"
                         type="email"
                         value={registerUser.email}
                         placeholder="user@email.com"
                         onChange={handleChanges}
                         />
                         </label>
                         <br />
                        <label>Password
                        <input
                            name="password"
                            type="password"
                            value={registerUser.password}
                            placeholder="password"
                            onChange={handleChanges}
                         />
                         </label>
                              <br />
                        <label>Role
                         <input
                         name="role"
                         type="text"
                         value={registerUser.role}
                         placeholder="PL, TL, SL, etc."
                         onChange={handleChanges}
                         />
                         </label>

                              <br />
                        <label>Company
                         <input
                         name="company"
                         type="text"
                         value={registerUser.company}
                         placeholder="Stripe, Microsoft, ect."
                         onChange={handleChanges}
                         />
                         </label>
                              <br />
                         <button className="home-button" type="submit" onClick={() => props.register(registerUser, props.history)}>Signup</button>
                              <br />
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
     return {
          email: state.email,
          password: state.password,
          role: state.role,
          company: state.company
     }
}

export default connect(mapStateToProps, {register} )(withRouter(Register)) 
