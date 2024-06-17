import React from "react";
import "App.css";
import Navbar from "containers/Navbar";
import Navigationbar from "containers/Navigationbar";
import LeafletMap from "containers/LeafletMap";
import { useGlobalContext } from "contexts/Global";
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

  return (
    <div
      style={{ width: "100%", height: "100vh" }}
      data-theme={globalState.LightMode ? "nord" : "luxury"}
    >
      <div
        style={{
          position: "relative",
          width: "90%",
          height: "89%",
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
          {globalState.SidebarOption === "control" && <LightControl />}
          {globalState.SidebarOption === "schedule" && <LightSchedule />}
          {globalState.SidebarOption === "map" && <LeafletMap />}
          {globalState.SidebarOption === "analytics" && <Analytics />}
          {globalState.SidebarOption === "settings" && <LightSettings />}
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
    </div>
  );
}

export default App;
