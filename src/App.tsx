import React, { useEffect } from "react";
import "App.css";
import Navbar from "containers/Navbar";
import Sidebar from "containers/Sidebar";
import LeafletMap from "containers/LeafletMap";
import { useGlobalContext } from "contexts/Global";
import Dashboard from "containers/Dashboard";
import LightControl from "containers/LightControl";
import LightSettings from "containers/LightSettings";
import LightSchedule from "containers/LightSchedule";
import { ConfigProvider } from "antd";
import Analytics from "containers/Analytics";
import { useAuth } from "contexts/Auth";
import { Navigate } from "react-router-dom";


function App() {
  const { globalState } = useGlobalContext();
  const auth = useAuth();

  if (!auth.access_token) {
    return <Navigate to="/auth" replace={true} />;
  }

  // useEffect(() => {

  // }, []);
  
  return (
    <div style={{width:'100%', height: '100vh'}} data-theme={globalState.LightMode? "nord" : "luxury"}>
      <Navbar />
      <br />
      <div className="app-div">
        <div style={{ width: '20%' }}>
          <Sidebar />
        </div>
        <div style={{ width: '70%', height: "85%",position: 'relative'}}>
          <ConfigProvider
            theme={{
              token: {
                colorBgContainer: globalState.LightMode? "#ffffff" : "black",
                colorText: globalState.LightMode? "black" : "#DCA54C",
              },
              components: {
                Table: {
                  borderColor: "transparent",
                  headerSplitColor: "transparent",
                  rowHoverBg: globalState.LightMode? "#f8f8f8" : "#0a0a0a",
                },
              },
            }}
          >
            {globalState.SidebarOption === 'dashboard' && <Dashboard />}
            {globalState.SidebarOption === 'control' && <LightControl />}
            {globalState.SidebarOption === 'schedule' && <LightSchedule />}
            {globalState.SidebarOption === 'map' && <LeafletMap />}
            {globalState.SidebarOption === 'analytics' && <Analytics />}

            {globalState.SidebarOption === 'settings' && <LightSettings />}
          </ConfigProvider>
        </div>
      </div>
      
    </div>
 );
}

export default App;
