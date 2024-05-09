import React from "react";
import "App.css";
import LandingPage from "containers/LandingPage";
import Navbar from "containers/Navbar";
import Sidebar from "containers/Sidebar";
import LeafletMap from "containers/LeafletMap";


function App() {
  return (
    <div className="app">
      <Navbar />
      <Sidebar /> 
      <LeafletMap />

    </div>
  );
}

export default App;
