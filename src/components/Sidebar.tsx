import React from "react";
import "components/sidebar.css";
import Icon, { HomeOutlined, BulbOutlined, SettingOutlined, ClockCircleOutlined } from '@ant-design/icons';
import type { GetProps } from 'antd';

type CustomIconComponentProps = GetProps<typeof Icon>;


const Sidebar: React.FC<{ option: string, handleOption: (option: string) => void }> = ({ option, handleOption }) => {

	// Svg for map icon
	const MapSvg = () => (
		<svg width="32px" height="33px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={option === 'map' ? "#000000" : "#DCA54C"} transform="rotate(0)">
			<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
			<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
			<g id="SVGRepo_iconCarrier">
				<path d="M12 6H12.01M9 20L3 17V4L5 5M9 20L15 17M9 20V14M15 17L21 20V7L19 6M15 17V14M15 6.2C15 7.96731 13.5 9.4 12 11C10.5 9.4 9 7.96731 9 6.2C9 4.43269 10.3431 3 12 3C13.6569 3 15 4.43269 15 6.2Z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
			</g>
		</svg>);

	const MapIcon = (props: Partial<CustomIconComponentProps>) => (
		<Icon component={MapSvg} {...props} />
	);

	const AnalyticsSvg = () => (
		<svg width="32px" height="33px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 3V21" stroke={option === 'analytics' ? "#000000" : "#DCA54C"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M21 21H3" stroke={option === 'analytics' ? "#000000" : "#DCA54C"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M7 16L12.25 10.75L15.75 14.25L21 9" stroke={option === 'analytics' ? "#000000" : "#DCA54C"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>);
	
	const AnalyticsIcon = (props: Partial<CustomIconComponentProps>) => (
		<Icon component={AnalyticsSvg} {...props} />
	);

	return (
		<div className="main-div">
			<nav data-theme="luxury">
				<div className="nav__container">

					<div className={option === 'dashboard' ? 'nav__item active' : 'nav__item'} onClick={() => handleOption('dashboard')}>
						<div className="nav__item-icon">
							<HomeOutlined />
						</div>
					</div>


					<div className={option === 'control' ? 'nav__item active' : 'nav__item'} onClick={() => handleOption('control')}>
						<div className="nav__item-icon">
							<BulbOutlined />
						</div>
					</div>


					<div className={option === 'schedule' ? 'nav__item active' : 'nav__item'} onClick={() => handleOption('schedule')}>
						<div className="nav__item-icon">
							<ClockCircleOutlined />
						</div>
					</div>


					<div className={option === 'map' ? 'nav__item active' : 'nav__item'} onClick={() => handleOption('map')}>
						<div className="nav__item-icon">
							<MapIcon style={{ color: 'hotpink' }} />
						</div>
					</div>


					<div className={option === 'analytics' ? 'nav__item active' : 'nav__item'} onClick={() => handleOption('analytics')}>
						<div className="nav__item-icon">
							<AnalyticsIcon style={{ color: 'hotpink' }} />
						</div>
					</div>


					<div className={option === 'settings' ? 'nav__item active' : 'nav__item'} onClick={() => handleOption('settings')}>
						<div className="nav__item-icon">
							<SettingOutlined />
						</div>
					</div>

				</div>
			</nav>
		</div>
	);


}

export default Sidebar;