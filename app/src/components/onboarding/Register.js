import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import { register } from '../actions/'
import {connect} from 'react-redux'
const Register = () => {

    const handleSubmit = e => {
          e.preventDefault();
          console.log("Submission")

     }

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

     return (
          <div>
               <div>
                    <h3>Signup for Ivory</h3>
                    <h4>Signup to access the greatest event planning tool ever created!</h4>
               </div>
               <div>
                    <form onSubmit={handleSubmit}>
                         <label>Email
                         <input
                         name="email"
                         type="email"
                         value={registerUser.email}
                         placeholder="user@email.com"
                         />
                         </label>

                        <label>Password
                        <input
                            name="password"
                            type="password"
                            value={registerUser.password}
                            placeholder="password"
                            onChange={handleChanges}
                         />
                         </label>

                        <label>Role
                         <input
                         name="role"
                         type="text"
                         value={registerUser.role}
                         placeholder="PL, TL, SL, etc."
                         onChange={handleChanges}
                         />
                         </label>

                         
                        <label>Company
                         <input
                         name="company"
                         type="text"
                         value={registerUser.company}
                         placeholder="Stripe, Microsoft, ect."
                         onChange={handleChanges}
                         />
                         </label>
                         
                         <button type="submit" onClick={() => props.register(registerUser)}>Signup</button>
                         <NavLink to='/'>Return to home.</NavLink>
                    </form>
               </div>
               <small>Copyright (c) 2019 getivory.com, LLC </small>
          </div>
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

export default connect(mapStateToProps, {register} )(Register) 

export default Register