import React from 'react'
import './Loggedout.css'
import logo from '../Images1/Logo.png'
import logout from '../Images1/logout.png'
function loggedOut() {
  return (
    <div className="layoutLoggedout">
      <div className="logoLoggedout">
        <img className="logo-pictureLoggedout" src={logo} alt="logo" />
      </div>
      <div className="companyNameLoggedout">COMPANY NAME</div>
      {/* <div className="registered">USER REGISTERED SUCESSFULLY</div> */}
      <img className="logout" src={logout} alt="logout" />
    </div>
  )
}

export default loggedOut
