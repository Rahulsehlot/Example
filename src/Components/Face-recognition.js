import React from 'react'
import logo from '../Images1/Logo.png'
import eclipse from '../Images1/face-id-eclipse.png'
import faceId from '../Images1/face-id.png'
import empid from '../Images1/sign-in-via-empployee-id.png'
import weclipse from '../Images1/white-eclipse.png'
import Webcam from 'react-webcam'
import './Face-recognition1.css'
function FaceRecognition() {
  return (
    <div className="layout">
      <div className="logo">
        <img className="logo-picture" src={logo} alt="logo" />
      </div>
      <div className="companyName">COMPANY NAME</div>
      <div className="main">
        <div className="facerecognition">
          <img className="faceId" src={faceId} alt="faceId" />
          <img className="eclipse" src={eclipse} alt="eclipse" />
          <div className="signinText">SIGN IN VIA FACE RECOGNITION</div>
        </div>

        <div className="signInViaEmpID">
          <img className="empId" src={empid} alt="empid" />
          <img className="weclipse" src={weclipse} alt="weclipse" />
          <div className="signinEmail">SIGN IN VIA EMAIL ID</div>
        </div>
        <div className="newUser">
          <div className="registerUser">REGISTER NEW USER</div>
        </div>
        <div className="webcam">
          <Webcam className="inlineVideo" audio={false} />
        </div>
        <div className="companySignup">COMPANY SIGN UP</div>
      </div>
    </div>
  )
}
export default FaceRecognition
