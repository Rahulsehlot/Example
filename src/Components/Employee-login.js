import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Images1/Logo.png'
import eclipse from '../Images1/face-id-eclipse.png'
import faceId from '../Images1/face-id.png'
import empid from '../Images1/sign-in-via-empployee-id.png'
import newUserLogo from '../Images1/newuserLogo.svg'
import weclipse from '../Images1/white-eclipse.png'
import Webcam from 'react-webcam'
import './Employee-login.css'
function Emplogin() {
  return (
    <div className="layoutEmpLogin">
      <div className="logoEmpLogin">
        <img className="logo-pictureEmplogin" src={logo} alt="logo" />
      </div>

      <div className="companyNameEmpLogin">COMPANY NAME</div>

      <div className="mainEmplogin">
        <div className="facerecognition">
          <img className="faceId" src={faceId} alt="faceid" />
          <img className="eclipse" src={eclipse} alt="eclipse" />
          <div className="signinText">SIGN IN VIA FACE RECOGNITION</div>
        </div>

        <div className="signInViaEmpID">
          <img className="empId" src={empid} alt="empid" />
          <img className="weclipse" src={weclipse} alt="weclipse" />
          <div className="signinEmail">SIGN IN VIA EMAIL ID</div>
        </div>
        <Link to="/EmployeeSignup">
          <div className="newUser">
            <img className="newUserlogo" src={newUserLogo} alt="newuserlogo" />
            <div className="registerUserEmpLogin">REGISTER NEW USER</div>
          </div>
        </Link>
        <div className="companySignup">COMPANY SIGN UP</div>
      </div>
      <div className="webcamempLogin">
        <Webcam className="videoEmpLogin" audio={false} />
      </div>
    </div>
  )
}

export default Emplogin
