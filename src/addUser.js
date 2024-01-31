import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import Dropdown from 'antd/es/dropdown/dropdown';
const Adduser = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal  open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
       <form>
        <label> First Name</label>
        <input type='text' /><br />
        <label>Last Name</label>
        <input type='text' /><br />
        <label>Email</label>
        <input type='email' /><br />
        <label>Password</label>
        <input type='password' /><br />
        <label>Role</label>
        <Dropdown>
            <option>1</option>
            <option>1</option>
            
        </Dropdown>
        
       </form>
      </Modal>
    </>
  );
};
export default Adduser;