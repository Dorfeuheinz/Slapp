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
    <div style={{width:'100%', height: '100vh'}} data-theme={state.LightMode? "nord" : "luxury"}>
      <Navbar />
      <br />
      <div className="app-div">
        <div style={{ width: '20%' }}>
          <Sidebar />
        </div>
        <div style={{ width: '70%',height: "75%"}}>
          {state.SidebarOption === 'dashboard' && <Dashboard />}
          {state.SidebarOption === 'control' && <LightControl />}
          {state.SidebarOption === 'schedule' && <LightSchedule />}
          {state.SidebarOption === 'map' && <LeafletMap />}
          {state.SidebarOption === 'settings' && <LightSettings />}
        </div>
      </div>
      
    </div>
  );
}

export default App;
