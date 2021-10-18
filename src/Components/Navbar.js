import { Link } from 'react-router-dom'
import profile from '../Images1/profile.png'
import dashboard from '../Images1/dashboard.png'
import details from '../Images1/details.png'
import timesheet from '../Images1/timesheet.png'
import callender from '../Images1/callender.png'
import leave from '../Images1/leave.png'
import settings from '../Images1/settings.png'
import help from '../Images1/help.png'
import './Navbar.css'

function Navbar() {
  return (
    <>
      <nav className="navigation">
        <div className="navbar-container">
          <ul className="nav-menu">
            <li className="nav-items">
              <Link to="/" className="nav-profile">
                {<img className="profile" src={profile} alt="profile" />}
              </Link>
            </li>
            <li className="nav-items">
              <Link to="/" className="nav-dashboard">
                {<img src={dashboard} alt="dashboard" />}
              </Link>
            </li>
            <li className="nav-items">
              <Link to="/login" className="nav-detail">
                {<img src={details} alt="details" />}
              </Link>
            </li>
            <li className="nav-items">
              <Link to="/" className="nav-timesheet">
                {<img src={timesheet} alt="timesheet" />}
              </Link>
            </li>
            <li className="nav-items">
              <Link to="/" className="nav-callender">
                {<img src={callender} alt="callender" />}
              </Link>
            </li>
            <li className="nav-items">
              <Link to="/" className="nav-leave">
                {<img src={leave} alt="leave" />}
              </Link>
            </li>
            <li className="nav-items">
              <Link to="/" className="nav-setting">
                {<img src={settings} alt="setting" />}
              </Link>
            </li>
            <li className="nav-items">
              <Link to="/" className="nav-help">
                {<img src={help} alt="help" />}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
export default Navbar
