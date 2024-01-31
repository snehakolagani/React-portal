import React from 'react';
import { Link } from 'react-router-dom';

const Logout = () => {
  
   
  //  const removeUser = JSON.parse(localStorage.removeItem('user'));
   
 

  return (
    <div>
      <p>You are logged Out!</p>
     <Link to={"/"}>Clik here to login</Link>
    </div>
  );
};

export default Logout;
