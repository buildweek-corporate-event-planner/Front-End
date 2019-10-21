import React from 'react'
import { NavLink } from 'react-router-dom'
const Login = () => {

     const handleSubmit = e => {
          e.preventDefault();
          console.log("Submission")

     }

     return (
          <div>
               <div>
                    <h3>Login to Ivory</h3>
                    <h4>Login in to access the greatest event planning tool ever created!</h4>
               </div>
               <div>
                    <form onSubmit={handleSubmit}>
                         <label>Email
                              <input
                              name="email"
                              type="email"
                              value="email"
                              placeholder="user@email.com"
                              />
                         </label>

                        <label>Password
                         <input
                              name="password"
                              type="password"
                              value="password"
                              placeholder="password"
                              />
                         </label>

                         <button type="submit">Login</button>
                         <NavLink to='/'>Return to home.</NavLink>
                    </form>
               </div>
               <small>Copyright (c) 2019 getivory.com, LLC </small>
          </div>
     )
}

export default Login