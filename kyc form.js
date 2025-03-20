import React, { useState } from "react";
import "./styles.css"; // Importing the CSS file

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    idProof: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, idProof: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("KYC Form Submitted Successfully!");
    console.log(formData);
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2>KYC Form</h2>

        <form onSubmit={handleSubmit}>
          <label>Full Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Address:</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />

          <label>Upload ID Proof:</label>
          <input
            type="file"
            accept=".jpg,.png,.pdf"
            onChange={handleFileChange}
            required
          />

          <button type="submit">Submit KYC</button>
        </form>
      </div>
    </div>
  );
}

export default App;
