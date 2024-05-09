import React, { useState } from "react";

import "leaflet/dist/leaflet.css"
import { Modal } from 'antd';



export const Maps: React.FC<{ visible: boolean, Ok: () => void, Cancel: () => void }> = ({ visible, Ok, Cancel }) => {

  return (
    <Modal
      onOk={Ok}
      onCancel={Cancel}
      open={visible}
    >
      <div className="mapcontainer-div">
        <div id="map" style={{ height: '100vh', width: '100vw' }}></div>
      </div>
    </Modal>
  );
};

export default Maps;
