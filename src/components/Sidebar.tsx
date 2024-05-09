import React from "react";
import "components/sidebar.css";
import Popup from "reactjs-popup";
import { useState } from 'react';
import { IoHome } from "react-icons/io5";
import { GiStreetLight } from "react-icons/gi";
import { AiFillSchedule } from "react-icons/ai";
import { IoSettings } from "react-icons/io5";
import { FcAbout } from "react-icons/fc";


 export default function Sidebar() {
	const [activeItem, setActiveItem] = useState(0);

	const handleItemClick = (i: number) => {
	  setActiveItem(i);
	};
  
	return (
		<>
		<nav>
		  <div className="nav__container">
		  <Popup
		  trigger={<a href="/" className={activeItem === 0 ? 'nav__item active' : 'nav__item'} onClick={() => handleItemClick(0)}>
			  <div className="nav__item-icon">
			  <IoHome className="dashicon" />
			  </div>
			</a>}
			position="right center"
			on={['hover', 'focus']}
			arrow
			>
			  <div className="popup-icon">Home</div>
			</Popup>
			<Popup
			 trigger={<a href="#" className={activeItem === 1 ? 'nav__item active' : 'nav__item'} onClick={() => handleItemClick(1)}>
			  <div className="nav__item-icon">
			  <GiStreetLight className="dashicon"/>
			  </div>
			</a>}
			position="right center"
			on={['hover', 'focus']}
			arrow
			>
			  <div className="popup-icon">Controler</div>
			</Popup>
			<Popup
			trigger ={<a href="#" className={activeItem === 2 ? 'nav__item active' : 'nav__item'} onClick={() => handleItemClick(2)}>
			  <div className="nav__item-icon">
			  <AiFillSchedule className="dashicon"/>
			  </div>
			</a>}
			position="right center"
			on={['hover','focus']}
			>
			  <div className="popup-icon">Schedule</div>
			</Popup>
			<Popup
			trigger={<a href="#" className={activeItem === 3 ? 'nav__item active' : 'nav__item'} onClick={() => handleItemClick(3)}>
			  <div className="nav__item-icon">
			  <IoSettings className="dashicon"/>  
			  </div>
			</a>}
			position="right center"
			on={['hover', 'focus']}
			>
			  <div className="popup-icon">Settings</div>
			</Popup>
			<Popup
			trigger={<a href="#" className={activeItem === 4 ? 'nav__item active' : 'nav__item'} onClick={() => handleItemClick(4)}>
			  <div className="nav__item-icon">
			  <FcAbout className="dashicon"/>  
			  </div>
			</a>}
			position="right center"
			on={['hover','focus']}
			>
			  <div className="popup-icon">About</div>
			</Popup>
		  </div>
		</nav>
		</>
	);
	
}