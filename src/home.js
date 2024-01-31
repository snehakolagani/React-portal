import { Button, Menu } from "antd";
import React, { useState } from "react";
import "./App.css";
import logo from './pulselogo.jpg';
import styled from 'styled-components';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import {
  BrowserRouter,
  Link,
  Outlet,
  Route,
  Router,
  Routes,
} from "react-router-dom";
import AdminTeam from "./adminteam";
import Surveyforms from "./surveyforms";
import FileldVolunters from "./fieldvolunterrs";
import SurveyResponse from "./surveyresponse";
import { RoutesFile } from "./routes";
import Pollingstation from "./pollingstation";
import Voters from "./voters";
import AssemblyConstituations from "./assemblyconstituations";
import SurveyDashboard from "./surveydashboard";
import Header from "./header";
import Logo from "./logo";
import UserProfile from "./userProfile";

export default function Home() {
  const user = JSON.parse(localStorage.getItem('user'));
  const loggedInUser = () => {
    // Perform computation based on some logic
    return localStorage.getItem("user");
  };
  
  function getItem(label, key, icon) {
    return {
      label,
      key,
      icon,
    };
  }
  const items = [
    getItem(<img src={logo}  alt="logo" className="logo-header" />),
    getItem(<p>Welcome {user.name}</p>),
    getItem(
      <Link to={"/home"}>Admin Team</Link>,
      "1",
      <UsergroupAddOutlined />
    ),
    getItem(
      <Link to={"/home/surveyforms"}>Survey Forms</Link>,
      "2",
      <DesktopOutlined />
    ),
    getItem(
      <Link to={"/home/fieldvoulnters"}>Field Voulnters</Link>,
      "3",
      <ContainerOutlined />
    ),
    getItem(
      <Link to={"/home/surveyresponse"}>Survey Response</Link>,
      "4",
      <PieChartOutlined />
    ),
    getItem(
      <Link to={"/home/pollingStation"}>Polling Station</Link>,
      "5",
      <DesktopOutlined />
    ),
    getItem(
      <Link to={"/home/voters"}>Voters</Link>,
      "6",
      <ContainerOutlined />
    ),
    getItem(
      <Link to={"/home/assemblyConstituations"}>Assebly Constituations</Link>,
      "7",
      <PieChartOutlined />
    ),
    getItem(
      <Link to={"/home/surveyDashboard"}>Survey Dashboard</Link>,
      "8",
      <DesktopOutlined />
    ),
    getItem(
      <Link to={"/home/exportLogs"}>Export Logs</Link>,
      "9",
      <ContainerOutlined />
    ),
  ];

  return (
    <>
     
      <div>
        <UserProfile />
        </div>
        
    
        <div className="positionFixed">
        
          <Menu
          
           // defaultSelectedKeys={["1"]}
            mode="inline"
            theme="dark"
            items={items}
            className="sidenav"
          />
        </div>
        <div className="flex-container">
          <Outlet />
        </div>
    
      
    </>
  );
}
