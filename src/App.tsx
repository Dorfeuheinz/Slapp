import React from "react";
import "App.css";
import Navbar from "containers/Navbar";
import Sidebar from "containers/Sidebar";
import LeafletMap from "containers/LeafletMap";
import { useGlobalContext } from "contexts/Global";
import Dashboard from "containers/Dashboard";
import LightControl from "containers/LightControl";
import LightSettings from "containers/LightSettings";
import LightSchedule from "containers/LightSchedule";


function App() {
  const { state } = useGlobalContext();
  
  return (
    <div data-theme={state.LightMode? "nord" : "luxury"}>
      <Navbar />
      <br />
      <div className="flex">
        <div style={{ width: '20%' }}>
          <Sidebar />
        </div>
        <div style={{ width: '70%', borderWidth: "2px", borderColor: state.LightMode? "#000000" : "#DCA54C", padding: 2, borderRadius: "15px", height: "80vh" }}>
          {state.SidebarOption === 'dashboard' && <Dashboard />}
          {state.SidebarOption === 'control' && <LightControl />}
          {state.SidebarOption === 'schedule' && <LightSchedule />}
          {state.SidebarOption === 'map' && <LeafletMap />}
          {state.SidebarOption === 'settings' && <LightSettings />}
        </div>
      </div>
      <br />      <br />      <br />      <br />      <br />      <br />      <br />      <br />      <br />
    </div>
  );
}

export default App;
