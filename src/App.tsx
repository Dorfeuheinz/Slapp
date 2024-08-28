import React from "react";
import "App.css";
import Navigationbar from "containers/Navigationbar";
import LeafletMap from "containers/LeafletMap";
import { GlobalActionTypes, useGlobalContext } from "contexts/Global";
import LightControl from "containers/LightControl";
import LightSettings from "containers/LightSettings";
import LightSchedule from "containers/LightSchedule";
import { ConfigProvider } from "antd";
import Analytics from "containers/Analytics";
import { useAuth } from "contexts/Auth";
import { Navigate } from "react-router-dom";
import Dashboard from "containers/Dashboard";
import Profile from "containers/Profile";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

// https://github.com/Dorfeuheinz/react-boiler.git

function App() {
  const { globalState, globalDispatch } = useGlobalContext();
  const auth = useAuth();

  if (!auth.access_token) {
    return <Navigate to="/auth" replace={true} />;
  }

  const handleToggle = () => {
    globalDispatch({ type: GlobalActionTypes.LIGHT_MODE, payload: !globalState.LightMode });
  }

  return (
    <div
      style={{ width: "100%", height: "100vh" }}
      data-theme={globalState.LightMode ? "nord" : "luxury"}
    >
      <div
        style={{
          position: "relative",
          width: "90%",
          height: "89vh",
          display: "flex",
          left: "5vw",
          borderColor: globalState.LightMode? "#000000" : "#DCA54C", 
        }}
        className="card"
      >
        <ConfigProvider
          theme={{
            token: {
              colorBgContainer: globalState.LightMode ? "#ffffff" : "black",
              colorText: globalState.LightMode ? "black" : "#DCA54C",
            },
            components: {
              Table: {
                borderColor: "transparent",
                headerSplitColor: "transparent",
                rowHoverBg: globalState.LightMode ? "#f8f8f8" : "#0a0a0a",
              },
            },
          }}
        > 
          {globalState.SidebarOption === "dashboard" && <Dashboard />}
          {globalState.SidebarOption === "control" && <LightControl />}
          {globalState.SidebarOption === "schedule" && <LightSchedule />}
          {globalState.SidebarOption === "map" && <LeafletMap />}
          {globalState.SidebarOption === "analytics" && <Analytics />}
          {globalState.SidebarOption === "settings" && <LightSettings />}
          {globalState.SidebarOption === "profile" && <Profile />}
        </ConfigProvider>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          bottom: "5px",
          left: "40vw",
        }}
      >
        <Navigationbar />
      </div>
      <div onClick={handleToggle} style={{ display: "flex", paddingLeft: "96vw" }}>
        {globalState.LightMode? <DarkModeIcon style={{ fontSize: "30px" }}/> : <LightModeIcon style={{ fontSize: "30px" }}/>}
      </div>
    </div>
  );
}

export default App;