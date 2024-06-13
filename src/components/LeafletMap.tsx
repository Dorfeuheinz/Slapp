import React from "react";
import { useGlobalContext } from "contexts/Global";
import "leaflet/dist/leaflet.css";


//Modal fnc define type- const LeafletMap: React.FC<{ visible: boolean, Ok: () => void, Cancel: () => void }> = ({ visible, Ok, Cancel }) => {

const LeafletMap: React.FC = () => {

  const { globalState } = useGlobalContext();

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
      <div id="map" style={{position: 'absolute',display:'flex' ,height: '90%', width: '100%', borderRadius: "15px", borderWidth: "3px", borderColor: globalState.LightMode? "#000000" : "#DCA54C", padding: 2,}}></div>
  );
};

export default LeafletMap;
