import React from "react";

import "leaflet/dist/leaflet.css"
import { Modal } from 'antd';

//Modal fnc define type- const LeafletMap: React.FC<{ visible: boolean, Ok: () => void, Cancel: () => void }> = ({ visible, Ok, Cancel }) => {

const LeafletMap: React.FC = () => {

  return (
    // <Modal
    //   onOk={Ok}
    //   onCancel={Cancel}
    //   open={visible}
    // >
    //   <div className="mapcontainer-div">
    //     <div id="map" style={{ height: '100vh', width: '100vw' }}></div>
    //   </div>
    // </Modal>
      <div id="map" style={{ height: '100%', width: '100%', borderRadius: "15px" }}></div>
  );
};

export default LeafletMap;
