import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Images1/Logo.png'
import weclipse from '../Images1/white-eclipse.png'
import faceId from '../Images1/sign-in-via-empployee-id.png'
import './Dashboard.css'
function dashboard() {
  return (
    <div className="layoutDashboard">
      <div className="logoDashboard">
        <img className="logoDashboard" src={logo} alt="logo" />
      </div>
      <div className="companyNameDashboard">COMPANY NAME</div>

      <div className="mainDashboard">
        <Link to="/">
          <div className="myTimesheet">
            <img
              className="eclipsedashboard"
              src={weclipse}
              alt="eclipsedashboard"
            />
            <img
              className="faceIdDashboard"
              src={faceId}
              alt="faceIdDashboard"
            />
            <div className="timesheet"> MY TIMESHEET</div>
          </div>
        </Link>
        <Link to="/">
          <div className="ApplyLeaveDashboard">
            <img
              className="eclipseApplyLeave"
              src={weclipse}
              alt="eclipseApplyLeave"
            />
            <img
              className="faceIdApplyLeave"
              src={faceId}
              alt="faceIdApplyLeave"
            />
            <div className="ApplyLeave"> APPLY LEAVE</div>
          </div>
        </Link>
        <Link to="/">
          <div className="ProfileDashboard">
            <img
              className="eclipseProfile"
              src={weclipse}
              alt="eclipseProfile"
            />
            <img className="faceIdProfile" src={faceId} alt="faceIdProfile" />
            <div className="Profile"> PROFILE</div>
          </div>
        </Link>
        <Link to="/">
          <div className="SettingsDashboard">
            <img
              className="eclipseSettings"
              src={weclipse}
              alt="eclipseSettings"
            />
            <img className="faceIdSettings" src={faceId} alt="faceIdSettings" />
            <div className="Settings"> SETTINGS</div>
          </div>
        </Link>
      </div>
    </div>
  )
}
export default dashboard
