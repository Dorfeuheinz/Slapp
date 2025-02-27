import React from "react";
import "./Navigationbar.css";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import MapTwoToneIcon from "@mui/icons-material/MapTwoTone";
import AutoGraphTwoToneIcon from "@mui/icons-material/AutoGraphTwoTone";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircle from "@mui/icons-material/AccountCircle";

const colors: { [key: string]: string } = {
  analytics: "#E3735E",
  control: "gold",
  schedule: "green",
  map: "cyan",
  settings: "pink",
  profile: "lime",
  dashboard: "lightblue",
};

const Navigationbar: React.FC<{
  option: string;
  handleOption: (option: string) => void;
  lightMode: boolean;
}> = ({ option, handleOption, lightMode }) => {
  const list = document.querySelectorAll(".list");
  function activelink(this: any) {
    list.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
  }
  list.forEach((item) => item.addEventListener("click", activelink));

  return (
    <div className="Navigationbar-div">
      <div className="navigation">
        <ul>
          <li className="list active" onClick={() => handleOption("dashboard")}>
            <a>
              <span className="icon">
                <HomeIcon style={{ fontSize: "xx-large" }} />
              </span>
              <span className="text">Home</span>
            </a>
          </li>
          <li className="list active" onClick={() => handleOption("analytics")}>
            <a>
              <span className="icon">
                <AutoGraphTwoToneIcon style={{ fontSize: "xx-large" }} />
              </span>
              <span className="text">Analytics</span>
            </a>
          </li>
          <li className="list" onClick={() => handleOption("control")}>
            <a>
              <span className="icon">
                <EmojiObjectsOutlinedIcon style={{ fontSize: "xx-large" }} />
              </span>
              <span className="text">Control</span>
            </a>
          </li>
          <li className="list" onClick={() => handleOption("schedule")}>
            <a>
              <span className="icon">
                <ScheduleOutlinedIcon style={{ fontSize: "xx-large" }} />
              </span>
              <span className="text">Scheduling</span>
            </a>
          </li>
          <li className="list" onClick={() => handleOption("map")}>
            <a>
              <span className="icon">
                <MapTwoToneIcon style={{ fontSize: "xx-large" }} />
              </span>
              <span className="text">Map</span>
            </a>
          </li>
          <li className="list" onClick={() => handleOption("settings")}>
            <a>
              <span className="icon">
                <SettingsSuggestOutlinedIcon style={{ fontSize: "xx-large" }} />
              </span>
              <span className="text">Settings</span>
            </a>
          </li>
          <li className="list" onClick={() => handleOption("profile")}>
            <a>
              <span className="icon">
                <AccountCircle style={{ fontSize: "xx-large" }} />
              </span>
              <span className="text">Profile</span>
            </a>
          </li>
          <div
            className="indicator"
            style={{
              background: colors[option],
              borderColor: lightMode ? "#eceff4" : "black",
            }}
          />
        </ul>
      </div>
    </div>
  );
};
export default Navigationbar;
