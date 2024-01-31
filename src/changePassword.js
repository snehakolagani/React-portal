// ChangePasswordModal.js

import { Modal } from 'antd';
import React, { useState } from 'react';



const ChangePasswordForm = ({ isOpen, onRequestClose }) => {
  const customStyles = {
    content: {
      top: '60%',
      left: '60%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '500px', // Set your desired width
      height: '300px', // Set your desired height
    },
  };
  const [OldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [ConfirmNewPassword, setConfirmNewPassword] = useState('');


console.log("isopen",isOpen);
  const handleNewInputChange = (e) => {
    setNewPassword(e.target.value);
   
  };
  const handleOldInputChange = (e) => {
   
    setOldPassword(e.target.value);
    
  };
  const handleConfirmNewInputChange = (e) => {
   
    setConfirmNewPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle password change here
    console.log('Changing password to:', newPassword);

    // Close the modal
    onRequestClose();
  };

  return (
    <>
    <div>
    <Modal
      open={isOpen}
      onOk={handleFormSubmit}
      onCancel={onRequestClose}
      title="Change Password"
      style={customStyles}
    >
      <h2>Change Password</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Old Password:
          <input
            type="password"
            value={OldPassword}
            onChange={handleOldInputChange}
          />
        </label><br /><br />
        <label>
          New Password:
          <input
            type="password"
            value={newPassword}
            onChange={handleNewInputChange}
          />
        </label><br /><br />
        <label>
          Confirm Password:
          <input
            type="password"
            value={ConfirmNewPassword}
            onChange={handleConfirmNewInputChange}
          />
        </label><br /><br />
        <button type="submit">Change Password</button>
      </form><br /><br />
      <button onClick={onRequestClose}>Cancel</button>
    </Modal>
    </div>
    </>
  );
};

export default ChangePasswordForm;
