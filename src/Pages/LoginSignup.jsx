import React from 'react'
import './css/loginsignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
        <div className="loginsignup-container">
          <h1>Sign Up</h1>
          <div className="loginsignup-fields">
            <input type="text" placeholder='Enter Your Name' name="" id="" />
            <input type="email" placeholder='Enter Your Email' name="" id="" />
            <input type="tpassword" placeholder='Enter Your Password' name="" id="" />
          </div>
          <button>Continue</button>
          <p className="loginsignup-login">
            Already Have An Account <span>Login Here</span>
          </p>
          <div className="loginsignup-agree">
            <input type="checkbox" name="" id="" />
            <p>By continuing i agree to the terms of use & privacy policy...</p>
          </div>
        </div>
    </div>
  )
}

export default LoginSignup
