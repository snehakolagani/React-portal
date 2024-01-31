import "./App.css";
import Logo from "./logo";
import Loginform from "./loginform";
import Home from "./home";
import { BrowserRouter, Outlet, Route, Router, Routes } from "react-router-dom";
import AdminTeam from "./adminteam";
import Surveyforms from "./surveyforms";
import FileldVolunters from "./fieldvolunterrs";
import SurveyResponse from "./surveyresponse";
import { RoutesFile } from "./routes";
import PageNotFound from "./pagenotfound";
import Pollingstation from "./pollingstation";
import Voters from "./voters";
import AssemblyConstituations from "./assemblyconstituations";
import SurveyDashboard from "./surveydashboard";
import ExportLogs from "./exportlogs";

import { useState } from "react";
import Logout from "./logout";
import ChangePasswordForm from "./changePassword";
import UserProfile from "./userProfile";
import AddUserForm from "./addUserForm";
import AddSurveyForm from "./addSurveyForm";
import ViewReport from "./viewReport";
import Linechart from "./linechart";
import Piechart from "./piechart";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const handleLogin = () => {
    // Perform login logic
    setLoggedIn(true);
  };

  const handleLogout = () => {
    // Perform logout logic
    setLoggedIn(false);
  };
  return (
    
    <>
  
   
      <div className="App">
        
       
        

        <Routes>
          <Route path="/" exact Component={Loginform}></Route>
          <Route path="/logout" Component={Logout}></Route>
          <Route path="/profile" Component={UserProfile}></Route>
          
         
         <Route path="home" Component={Home}>
            <Route path="" exact Component={AdminTeam}>
            <Route path="adduser" Component={AddUserForm} />
            </Route>
            <Route path="surveyforms"  Component={Surveyforms}>

            </Route>
            
            <Route
              path="fieldvoulnters"
              Component={FileldVolunters} />
            <Route
              path="surveyresponse"
              Component={SurveyResponse} />
               <Route
              path="pollingStation"
              Component={Pollingstation} />
               <Route
              path="voters"
              Component={Voters} />
               <Route
              path="assemblyConstituations"
              Component={AssemblyConstituations} />
               <Route
              path="surveyDashboard"
              Component={SurveyDashboard} >
                <Route path="report" Component={ViewReport} >
                <Route path="linechart" Component={Linechart} />
                <Route path="piechart" Component={Piechart} />
                </Route>
                </Route>
               <Route
              path="exportLogs"
              Component={ExportLogs} />

              </Route> 
          
          <Route path='/*' Component={PageNotFound}></Route> 
         
          <Route path="addSurvey" Component={AddSurveyForm} ></Route>
        </Routes>
         
         
      </div>
    
    </>
  );
}

export default App;
