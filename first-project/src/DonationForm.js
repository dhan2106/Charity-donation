import React, { useState } from 'react';
import './DnationForm.css';

function DonationForm() {
  const [donationAmount, setDonationAmount] = useState("");
  const [donorName, setDonorName] = useState("");

  const handleDonate = (e) => {
    e.preventDefault();
    if (donationAmount && donorName) {
      alert(`Thank you, ${donorName}, for your donation of $${donationAmount}!`);
      setDonationAmount("");
      setDonorName("");
    } else {
      alert("Please fill out all fields!");
    }
  };

  return (
    <div className="donation-form">
      <h2>Make a Donation</h2>
      <form onSubmit={handleDonate}>
        <div className="input-group">
          <label>Your Name:</label>
          <input
            type="text"
            value={donorName}
            onChange={(e) => setDonorName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>
        <div className="input-group">
          <label>Donation Amount ($):</label>
          <input
            type="number"
            value={donationAmount}
            onChange={(e) => setDonationAmount(e.target.value)}
            placeholder="Enter donation amount"
          />
        </div>
        <button type="submit" className="donate-btn">Donate Now</button>
      </form>
    </div>
  );
}

export default DonationForm;
