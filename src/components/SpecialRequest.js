import React, { useState } from 'react';
import { db } from '../firebase-config'; 
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 

function SpecialRequest() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    requestDetails: '',
    preferredTime: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "specialRequests"), {
        ...formData,
        timestamp: serverTimestamp() 
      });
      alert('Special request submitted successfully!');
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        requestDetails: '',
        preferredTime: '',
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      alert('Failed to submit the request.');
    }
  };

  return (
    <section className="special-request" id="special-request">
      <h1 className="heading">Special Request</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Full Name" className="box" name="fullName" value={formData.fullName} onChange={handleChange} required />
        <input type="email" placeholder="Email" className="box" name="email" value={formData.email} onChange={handleChange} required />
        <input type="number" placeholder="Phone Number" className="box" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
        <textarea name="requestDetails" placeholder="Details of the Special Request" className="box" value={formData.requestDetails} onChange={handleChange} cols="30" rows="10"></textarea>
        <input type="submit" value="Submit" className="btn" />
      </form>
    </section>
  );
}

export default SpecialRequest;
