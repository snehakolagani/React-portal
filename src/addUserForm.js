import { useState } from "react";


const AddUserForm = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    // Add more fields as needed
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any validation or additional processing here

    // Send data to the server or perform other actions
    sendDataToServer(formData);
  };

  // Function to send data to the server (you need to implement this)
  const sendDataToServer = (data) => {
    // Implement your logic to send data to the server
    console.log('Sending data to the server:', data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>AddSurveyForm</h3>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </label>
      <br /><br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </label>
      <br /><br />
      {/* Add more form fields as needed */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddUserForm;

