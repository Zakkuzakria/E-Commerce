import React from 'react'
import './CSS/LoginSignup.css';
const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type='email' placeholder='Your Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already have an acoount <span>Login here</span> </p>
        <div className="loginsignup-agree">
          <input type="checkbox" id='' name='' />
          <p>By continuing, I agree to terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup