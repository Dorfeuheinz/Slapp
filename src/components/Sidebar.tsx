import React from "react";
import "components/sidebar.css";

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
	   <div className="sidebar">
	  {/* <nav>
		<div className="nav__container">
		<IoHome className="dashicon" />
		<GiStreetLight className="dashicon"/>


		<a href="#" className={activeItem === 2 ? 'nav__item active' : 'nav__item'} onClick={() => handleItemClick(2)}>
			<div className="nav__item-icon">
			<AiFillSchedule className="dashicon"/>
			</div>
		  </a>

		  <a href="#" className={activeItem === 3 ? 'nav__item active' : 'nav__item'} onClick={() => handleItemClick(3)}>
			<div className="nav__item-icon">
			<IoSettings className="dashicon"/>  
			</div>
		  </a>

		  <a href="#" className={activeItem === 4 ? 'nav__item active' : 'nav__item'} onClick={() => handleItemClick(4)}>
			<div className="nav__item-icon">
			<FcAbout className="dashicon"/>  
			</div>
		  </a>


		</div>
	  </nav> */}
	  	<ul>
			<li className="logo">
				<a href="#">
					<div className="icon"></div>
				</a>
			</li>
			<div className="Menulist">
				<li style={{ background: "yellow" }}>
	  				<a href="#">
					  <div className="icon">
					  	<IoHome className="dashicon" />
					  </div>
					</a>
				</li>
				<li style={{ background: "red" }}>
	  				<a href="#">
					  <div className="icon">
						<GiStreetLight className="dashicon"/>
					  </div>
					</a>
				</li>
				<li style={{ background: "cyan" }}>
	  				<a href="#">
					  <div className="icon">
					  	<AiFillSchedule className="dashicon"/>
					  </div>
					</a>
				</li>
				<li style={{ background: "purple" }}>
	  				<a href="#">
					  <div className="icon">
					  	<IoSettings className="dashicon"/>
					  </div>
					</a>
				</li>
				<li style={{ background: "black" }}>
	  				<a href="#">
					  <div className="icon">
					  	<FcAbout className="dashicon"/>
					  </div>
					</a>
				</li>
			</div>
			<div className="bottom">
				<li style={{ background: "yellow" }}>
	  				<a href="#">
					  <div className="icon"></div>
					</a>
				</li>
			</div>
		</ul>
	  </div>
	);
}