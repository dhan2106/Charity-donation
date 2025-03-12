import React from "react";
import Navbar from "./Navbar";
import DonationForm from "./DonationForm";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <DonationForm />
    </div>
  );
}

export default App;
