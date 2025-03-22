import React, { useState } from "react";
import "./DnationForm.css";

function DonationForm() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [selectedCharities, setSelectedCharities] = useState([]);

  // List of charities
  const charities = [
    "Red Cross",
    "UNICEF",
    "Save the Children",
    "WWF",
    "Doctors Without Borders",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (selectedCharities.length === 0) {
      alert("Please select at least one charity.");
      return;
    }

    // Split amount evenly among selected charities
    const amountPerCharity = (amount / selectedCharities.length).toFixed(2);

    alert(
      `Thank you, ${name}! Your donation of $${amount} has been split among:\n` +
        selectedCharities.map((charity) => `${charity} - $${amountPerCharity}`).join("\n")
    );

    // Reset form
    setName("");
    setAmount("");
    setSelectedCharities([]);
  };

  return (
    <form onSubmit={handleSubmit} className="donation-form">
      <h2>Make a Donation</h2>

      <label>Your Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        required
      />

      <label>Donation Amount ($):</label>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter donation amount"
        required
      />

      <label>Select Charities:</label>
      <select
        multiple
        value={selectedCharities}
        onChange={(e) =>
          setSelectedCharities([...e.target.selectedOptions].map((opt) => opt.value))
        }
      >
        {charities.map((charity, index) => (
          <option key={index} value={charity}>
            {charity}
          </option>
        ))}
      </select>

      <button type="submit">Donate Now</button>
    </form>
  );
}

export default DonationForm;
