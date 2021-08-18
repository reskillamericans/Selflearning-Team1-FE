import React from "react"
import Group79 from "../registration-images/Group79.png"
import BigPicture from "../registration-images/BigPicture.png"
import './registration.css'





function Registration() {
  
  return (
    <>

    <div className="Registration">
      <div className="webnavR">
        <div className="logo">
          <img src={Group79} alt="tech4u logo"></img>
        </div>
      <div className="menu">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Courses</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>

      </div>
    </div>
    <div className="mobilenav"></div>
    <div className="headerR1">
      <h>Welcome to Tech4U!</h>
    </div>
    <div className="headerR2">
      <h2>Register here to become a mentor</h2>
    </div>
    <div className="Container-1R">
      <img src={BigPicture}></img>
    </div>
    <div className="backgroupR">
      <p class="Back">Back</p>
      <i class="back-arrow"></i>
    </div>
    <div className="form-containerR">
      <form id="formR">
        <div className="toplabels">
          <label id="lname" for="lname">Last Name</label>
          <label id="fname" for="fname">First Name</label>
        </div>
        <div className="topboxes">
          <input type="text" id="fnbox" name="fname"></input>
          <input type="text" id="lnbox" name="lname"></input>
        </div>
        <label id="email">Email Address</label>
        <input type="text" id="ebox" name="email"></input>
        <label id="aprof" for="aprof">Area of Proficiency</label>
        <input type="text" id="aprofbox" name="aprof"></input>
        <div className="dropdown">
          <select id="proficiency">
            <option value="Frontend"></option>
            <option value="Backend"></option>
            <option value="UI/UX Design"></option>
            <option value="UX/UI Design"></option>
          </select>
        </div>
        <div className="bottomlabels">
          <label id="pw" for="pw">Password</label>
          <label id="cpw" for="cpw">Confirm Password</label>
        </div>
      <div className="bottomboxes">
        <input type="password" id="pwbox" name="pw"></input>
        <input type="text" id="cpwbox" name="cpw"></input>
      </div>
    </form>
    <div className="agreementR">
      <input type="checkbox" required name="checkbox" id="agree" value="check"></input>
         Yes, I understand and agree to TECH4U's
        <span>terms of service</span>
         including the 
        <span>user agreement</span>
         and 
        <span>privacy policy.</span>
    </div>
    <button class="CreateAccountR">Create Account</button>
    <p class="login">
      
      Already have an account?
      <span>Log In</span>
    </p>
    </div>
    <div className="mobile-form">
      <form id="form">
        <label id="fname" for="fname">First Name</label>
        <input type="text" id="fnbox" name="fname"></input>
        <label id="lname" for="lname">Last Name</label>
        <input type="text" id="lnbox" name="lname"></input>
        <label id="email" for="email">Email Address</label>
        <input type="text" id="ebox" name="email"></input>
        <label id="aprof" for="aprof">Area of Proficiency</label>
        <input type="text" id="aprofbox" name="aprof"></input>
        <div className="dropdown">
          <select id="proficiency">
            <option value="Frontend"></option>
            <option value="Backend"></option>
            <option value="UI/UX Design"></option>
            <option value="UX/UI Design"></option>
          </select>
        </div>
        <label id="pw" for="pw">Password</label>
        <input type="password" id="pwbox" name="pw"></input>
        <label id="cpw" for="cpw">Confirm Password</label>
        <input type="text" id="cpwbox" name="cpw"></input>
      </form>
      <div className="agreement-1">
      <input type="checkbox" required name="checkbox" id="agree" value="check"></input>
        Yes, I understand and agree to TECH4U's
        <span>terms of service</span>
        <div className="agreement-2">
         including the 
        <span>user agreement</span>
         and 
        <span>privacy policy.</span>
      </div>
    </div>
    {/* <button className="registrationb">Create Account</button> */}
    <input className="registrationb" type="button" value="Create Account"></input>
     <p class="login">
      Already have an account?
      <span>Log In</span>
      </p>
    </div>
  </div>
   
  </>  
    
  )

}

export default Registration 

