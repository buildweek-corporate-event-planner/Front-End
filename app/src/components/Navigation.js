import React from 'react'
import { NavLink } from 'react-router-dom';

const Navigation = () => {

     return(
          <div className="landingBox">
               <div className="landingText">
               <h3>Welcome To The Corporate Event Planning App</h3>
               <h4><span id="landingSpan">Ivory</span> is the best way to plan and deploy your corporate events!</h4>
               </div>
               <div className="landingButtons">
                    <div>
                         <NavLink to="register"><button class="aBtn">Signup</button></NavLink>
                    </div>
                    <div>
                         <NavLink to='login'><button class="aBtn">Login</button></NavLink>
                    </div>
               </div>
               <small>Copyright (c) 2019 getivory.com, LLC </small>
          </div>
     )
}

export default Navigation