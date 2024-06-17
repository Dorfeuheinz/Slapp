import React from "react";
import { useGlobalContext } from "contexts/Global";
import "leaflet/dist/leaflet.css";


//Modal fnc define type- const LeafletMap: React.FC<{ visible: boolean, Ok: () => void, Cancel: () => void }> = ({ visible, Ok, Cancel }) => {

const LeafletMap: React.FC = () => {

  const { globalState } = useGlobalContext();

  return (
      <div 
        id="map" 
        style={{
          position: 'absolute',
          display:'flex',
          height: '100%', 
          width: '100%', 
          borderRadius: "15px", 
          padding: 2,
        }} 
      />
  );
};

export default LeafletMap;
