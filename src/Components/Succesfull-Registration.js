import React from 'react'
import './Succesfull-Registration.css'
import logo from '../Images1/Logo.png'
import succesfull from '../Images1/sucessfully-registrered.png'
function SuccesfullRegistraion() {
  return (
    <div className="layoutRegistration">
      <div className="logoSuccesfullRegistered">
        <img className="logo-pictureRegistered" src={logo} alt="logo" />
      </div>
      <div className="companyNameRegistered">COMPANY NAME</div>
      {/* <div className="registered">USER REGISTERED SUCESSFULLY</div> */}
      <img className="registered" src={succesfull} alt="registered" />
    </div>
  )
}

export default SuccesfullRegistraion
