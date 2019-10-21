import React from 'react'
import { NavLink } from 'react-router-dom'

const Register = () => {

    const handleSubmit = e => {
          e.preventDefault();
          console.log("Submission")

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
                         // value="email"
                         placeholder="user@email.com"
                         />
                         </label>

                        <label>Password
                        <input
                            name="password"
                            type="password"
                         //    value="password"
                            placeholder="password"
                         />
                         </label>

                        <label>Role
                         <input
                         name="role"
                         type="text"
                         // value="role"
                         placeholder="user@email.com"
                         />
                         </label>

                         
                        <label>Company
                         <input
                         name="company"
                         type="text"
                         // value="company"
                         placeholder="Stripe, Microsoft, ect."
                         />
                         </label>
                         
                         <button type="submit">Signup</button>
                         <NavLink to='/'>Return to home.</NavLink>
                    </form>
               </div>
               <small>Copyright (c) 2019 getivory.com, LLC </small>
          </div>
     )
}

export default Register