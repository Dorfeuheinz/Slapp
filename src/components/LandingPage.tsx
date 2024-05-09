import React from "react";
import Sidebar from "containers/Sidebar";
import Navbar from "components/Navbar";


export default function LandingPage() {
    return(
        <>
        <Navbar />

        <section className="dashboardhome-section">
        <div className="dasboard-section-1">    
        <Sidebar /> 
        <div className="row-div">   
        <div className="row">
		<div className="server-div1">
			<div className="server-div2">
				<div className="server-div3">
					<div className="widget-data">
						<div className="server-name">Total Assets</div>
						<div className="server-data">75%</div>
					</div>
					<div className="wiedgt-icon">
						
					</div>
				</div>
			</div>
		</div>
		<div className="server-div1">
			<div className="server-div2">
				<div className="server-div3">
					<div className="widget-data">
						<div className="server-name">Max Load (W)</div>
						<div className="server-data">75%</div>
					</div>
					<div className="widget-icon">
						
					</div>
				</div>
			</div>
		</div>
		<div className="server-div1">
			<div className="server-div2">
				<div className="server-div3">
                </div>			<div className="widget-data">
						<div className="server-name">Active Load (W)</div>
						<div className="server-data">75%</div>
					</div>
					<div className="widget-icon">
						
					</div>
				</div>
			</div>
            <div className="server-div1">
			<div className="server-div2">
				<div className="server-div3">
					<div className="widget-data">
						<div className="server-name">Total Lights</div>
						<div className="server-data">75%</div>
					</div>
					<div className="widget-icon">
						
					</div>
				</div>
			</div>
		</div>
		</div>
        <div className="row2">
		<div className="row2-server-div1">
			<div className="server-div2">
				<div className="server-div3">
					<div className="widget-data">
						<div className="server-name">Connected Lights</div>
						<div className="server-data">75%</div>
					</div>
					<div className="wiedgt-icon">
						
					</div>
				</div>
			</div>
		</div>
		<div className="row2-server-div1">
			<div className="server-div2">
				<div className="server-div3">
					<div className="widget-data">
						<div className="server-name">Lights On</div>
						<div className="server-data">75%</div>
					</div>
					<div className="widget-icon">
						
					</div>
				</div>
			</div>
		</div>
		<div className="row2-server-div1">
			<div className="server-div2">
				<div className="server-div3">
                </div>			<div className="widget-data">
						<div className="server-name">Lights Off</div>
						<div className="server-data">75%</div>
					</div>
					<div className="widget-icon">
						
					</div>
				</div>
			</div>
            <div className="row2-server-div1">
			<div className="server-div2">
				<div className="server-div3">
					<div className="widget-data">
						<div className="server-name">Total Gateways</div>
						<div className="server-data">75%</div>
					</div>
					<div className="widget-icon">
						
					</div>
				</div>
			</div>
		</div>
		</div>
		<div className="row3">
		<div className="row3-server-div1">
			<div className="server-div2">
				<div className="server-div3">
					<div className="widget-data">
						<div className="server-name">Fault Gateways</div>
						<div className="server-data">75%</div>
					</div>
					<div className="wiedgt-icon">
						
					</div>
				</div>
			</div>
		</div>
		<div className="row3-server-div1">
			<div className="server-div2">
				<div className="server-div3">
					<div className="widget-data">
						<div className="server-name">Gaeways On</div>
						<div className="server-data">75%</div>
					</div>
					<div className="widget-icon">
						
					</div>
				</div>
			</div>
		</div>
		<div className="row3-server-div1">
			<div className="server-div2">
				<div className="server-div3">
                </div>			<div className="widget-data">
						<div className="server-name">Gateways Off</div>
						<div className="server-data">75%</div>
					</div>
					<div className="widget-icon">
						
					</div>
				</div>
			</div>
            <div className="row3-server-div1">
			<div className="server-div2">
				<div className="server-div3">
					<div className="widget-data">
						<div className="server-name">Fault Lights</div>
						<div className="server-data">75%</div>
					</div>
					<div className="widget-icon">
						
					</div>
				</div>
			</div>
		</div>
		</div>
		{/* <div className="row4">
		<div className="row4-server-div1">
			<div className="server-div2">
				<div className="server-div3">
					<div className="widget-data">
						<div className="server-name"></div>
						<div className="server-data">75%</div>
					</div>
					<div className="wiedgt-icon">
						
					</div>
				</div>
			</div>
		</div>
		<div className="row4-server-div1">
			<div className="server-div2">
				<div className="server-div3">
					<div className="widget-data">
						<div className="server-name"></div>
						<div className="server-data">75%</div>
					</div>
					<div className="widget-icon">
						
					</div>
				</div>
			</div>
		</div>
		<div className="row4-server-div1">
			<div className="server-div2">
				<div className="server-div3">
                </div>			<div className="widget-data">
						<div className="server-name">Server</div>
						<div className="server-data">75%</div>
					</div>
					<div className="widget-icon">
						
					</div>
				</div>
			</div>
            <div className="row4-server-div1">
			<div className="server-div2">
				<div className="server-div3">
					<div className="widget-data">
						<div className="server-name">Server</div>
						<div className="server-data">75%</div>
					</div>
					<div className="widget-icon">
						
					</div>
				</div>
			</div>
		</div>
		</div> */}
		</div> 
	</div>
    </section>
        </>
    )
}