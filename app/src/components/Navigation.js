import React from 'react'
import { NavLink } from 'react-router-dom';

import '../App.css';

const Navigation = () => {

     return(
          <>
          <div className="landingBox">
               <div className="landingText">
               <h3 id="landingTitle">Welcome To Ivory</h3>
               <h4 id="landingText"><span id="landingSpan">Ivory</span> is the best way to plan, manage and launch your events.</h4>
               </div>
               <div className="landingButtons">
                    <div>
                         <NavLink to="register"><button class="aBtn">Signup</button></NavLink>
                    </div>
                    <div>
                         <NavLink to='login'><button class="bBtn">Login</button></NavLink>
                    </div>
               </div>
          </div>
          <div className="footer">
               <small>Copyright (c) 2019 Ivory Software, LLC </small>
          </div>
          </>
     )
}

export default Navigation