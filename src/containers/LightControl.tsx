import React, { useEffect } from "react";
import Self from "components/LightControl";
import { useGlobalContext } from "contexts/Global";
import { SLCActionTypes, SLCState, useSLContext } from "contexts/SLC";

export type LightControlType = {
  slcState: SLCState[];
  lightMode: boolean;
  handleSwitch: (key: number) => void;
  handleBrightnessChange: (key: number, value: number) => void;
}

export default function LightControl() {
    const { globalState } = useGlobalContext();
    const { slcState, slcDispatch } = useSLContext();

    const handleSwitch = (key: number) => {
      console.log("hehehehe", key)
      slcDispatch({
          type: SLCActionTypes.SET_SWITCH,
          payload: { key, value: false }
      });
    };
    
    const handleBrightnessChange = (key: number, value: number) => {
      slcDispatch({
          type: SLCActionTypes.SET_BRIGHTNESS,
          payload: { key, value }
      });
    };
    
    // useEffect(() => {
    //   const interval = setInterval(() => {
    //     setData((prevData) =>
    //       prevData.map((item) => ({
    //         ...item,
    //         timestamp: new Date().toLocaleString(),
    //       }))
    //     );
    //   }, 1000);
  
    //   return () => clearInterval(interval);
    // }, []);

    return (
      <Self
        slcState={slcState}
        lightMode={globalState.LightMode}
        handleSwitch={handleSwitch} 
        handleBrightnessChange={handleBrightnessChange} 
      />
    );
}
