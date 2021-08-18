import React from "react"
import Group79 from "../registration-images/Group79.png"
import BigPicture from "../registration-images/BigPicture.png"
import  "./login.css"

function Login() {

return (
    
  <>

    <div className="app">
      <div className="webnav">
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
            <a href="#">Login</a>
          </li>
        </ul>

      </div>
    </div>

    <div className="mobilenav"></div>
    <div className="header">
      <h1>Welcome Back</h1>
    </div>

    <div className="Container-1">
      <img src={BigPicture}></img>
    </div>

    <div className="backgroup">
      <p class="Back">Back</p>
      <i class="back-arrow"></i>
    </div>

    <div className="form-container">
      <form id="form">
        <div className="labels">
        <label id="email">Email Address</label>
        <input type="text" id="ebox" name="email"></input>
        <label id="pw" for="pw">Password</label>
        <input type="password" id="pwbox" name="pw"></input>
        </div>
      </form>
    </div>

    <div className="agreement">
      <input type="checkbox" required name="checkbox" id="agree2" value="check"></input>
         Remember Me
    </div>

    <button class="CreateAccount">Sign In</button>

    <div className="signup">
      <a href="#">Sign Up</a>
    </div>

    <div className="forgotpassword">
      <a href="#">Forgot Password</a>
    </div>

    <div className="mobileform">
    <form id="form">
        <div className="labels">
        <label id="email">Email Address</label>
        <input type="text" id="ebox" name="email"></input>
        <label id="pw" for="pw">Password</label>
        <input type="password" id="pwbox" name="pw"></input>
        </div>
      </form>
    </div>





</div>
</>



    )
}

export default Login