import React, { useRef, useState } from "react";
import 'components/Map.css';
// import GoogleMapReact from 'google-map-react';
import osm from "utilities/osm-providers";
import Navbar from "components/Navbar";

import "leaflet/dist/leaflet.css"
import Dashboard from "components/Sidebar";



export default function Maps() {

   const [Center, setCenter] = useState({lat: 30.704649, lng: 76.717873});
   const ZOOM_LEVEL = 9;
   const mapref = useRef();

    return(
        <>
        <Navbar />
        
        <div className="mapcontainer-div">
          <div className="mapdashboard-div"> 
            <Dashboard />
          </div>

    </div>
        </>
    )
}