import { Dropdown, Space } from "antd";
import "./App.css";
import logo from "./pulselogo.jpg";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import UserProfile from "./userProfile";

export default function Logo() {
  
  
    return (
    <>
      <div>
        <header className="logo">
          <img src={logo} alt="logo" className="logo-header" />
          
        
        </header>
      </div>
    </>
  );
}
