import React from 'react'
import './loggedInsuccesfull.css'
import logo from '../Images1/Logo.png'
import loggedin from '../Images1/sucessfully-loggedin.png'
function loggedInsuccesfull() {
  return (
    <div className="layoutLoggedin">
      <div className="logoLoggedin">
        <img className="logo-pictureLoggedin" src={logo} alt="logo" />
      </div>
      <div className="companyNameLoggedin">COMPANY NAME</div>
      {/* <div className="registered">USER REGISTERED SUCESSFULLY</div> */}
      <img className="loggedin" src={loggedin} alt="loggedin" />
    </div>
  )
}

export default loggedInsuccesfull
