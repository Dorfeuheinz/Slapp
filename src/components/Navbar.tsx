import { MoonFilled, SunFilled } from "@ant-design/icons";
import { GlobalActionTypes, useGlobalContext } from "contexts/Global";
import React from "react";
import {useNavigate} from "react-router-dom"

const Navbar: React.FC<{logout: () => void}> = ({logout}) =>  {
  const { globalState, globalDispatch } = useGlobalContext();

  const handleToggle = () => {
      globalDispatch({ type: GlobalActionTypes.LIGHT_MODE, payload: !globalState.LightMode });
  }

  const whitelogo = require('assets/tinymeshimg.png');
  const blacklogo = require('assets/tinymeshimg2.png');
  

  // const navigate = useNavigate()

  // const handlelogout = () =>{
  //   navigate('/login')
  // }
  
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        {globalState.LightMode? <img className="" src={String(blacklogo)} alt="logo"/> : <img className="" src={String(whitelogo)} alt="logo"/>}
        {/* <img src={String(logo)} alt="logo"/> */}
      </div>
      {/* <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div> */}
      <div className="navbar-end">
        <div className="flex-none gap-2">
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center" onClick={handleToggle}>
              {globalState.LightMode? <MoonFilled style={{ fontSize: "30px" }} /> : <SunFilled style={{ fontSize: "30px" }} />}
            </div>
            &emsp;
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-24 md:w-auto"
              />
            </div>&emsp;
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a href="#" className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a href="#">Settings</a>
                </li>
                <li>
                  <a href="#" onClick={logout}>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
