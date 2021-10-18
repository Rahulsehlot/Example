import React from 'react'
import Navbar from './Components/Navbar'
import Login from './Components/Company-login'
import FaceRecognition from './Components/Face-recognition'
import CompanySignup from './Components/Company-signup'
import Emplogin from './Components/Employee-login'
import EmployeeSignup from './Components/Employee-signup'
import SuccesfullRegistraion from './Components/Succesfull-Registration'
import loggedOut from './Components/Loggedout'
import loggedInsuccesfull from './Components/loggedInsuccesfull'
import dashboard from './Components/Dashboard'
import TimeSheet from './Components/TimeSheet'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <main>
      <Router>
        <Navbar />

        <Switch>
          <Route path="/Login" component={Login} />
          <Route path="/CompanySignup" component={CompanySignup} />
          <Route path="/FaceRecognition" component={FaceRecognition} />
          <Route path="/Emplogin" component={Emplogin} />
          <Route path="/EmployeeSignup" component={EmployeeSignup} />
          <Route
            path="/SuccesfullRegistraion"
            component={SuccesfullRegistraion}
          />
          <Route path="/loggedOut" component={loggedOut} />
          <Route path="/loggedInsuccesfull" component={loggedInsuccesfull} />
          <Route path="/dashboard" component={dashboard} />
          <Route path="/TimeSheet" component={TimeSheet} />
        </Switch>
      </Router>
    </main>
  )
}

export default App
