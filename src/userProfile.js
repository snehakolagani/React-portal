import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu, Space } from 'antd';
import { Option } from 'antd/es/mentions';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ChangePasswordForm from './changePassword';

const UserProfile = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => 
  {
    setModalOpen(true);
  }
  const closeModal = () => setModalOpen(false);
  // Retrieve user information from local storage
  const user = JSON.parse(localStorage.getItem('user'));
  console.log("userDetals",user)
  const items = [
    {
      key: '1',
      label: <div onClick={openModal}>Change Password</div>
      
        
    },
    {
        key: '2',
        label:<Link to={"/logout"}>Logout</Link>
      }]

  if (!user) {
    // Handle case where user is not logged in
    return <p>User not logged in.</p>;
  }

  return (
    <>
       
    <div className="userprofile">
      <ChangePasswordForm isOpen={isModalOpen} onRequestClose={closeModal} />
       
       <Dropdown
    menu={{
      items,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        <p> {user.name}</p>
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
      
      {/* Display other user-related information */}
    </div>
    </>
  );
};

export default UserProfile;
