import React, { useEffect } from "react";
import Self from "components/LightSchedule";
import { useGlobalContext, GlobalActionTypes } from "contexts/Global";
import { Dayjs } from "dayjs";
import { RangeValueType } from "rc-picker/lib/PickerInput/RangePicker";
import { SLCActionTypes, SLCState, useSLContext } from "contexts/SLC";

export type LightScheduleType = {
    slcState: SLCState[];
    lightMode: boolean;
    handleScheduler: (key: number) => (value: RangeValueType<Dayjs> | null | undefined) => void;
    handleScheduleEvent: () => void;
    handleBrightnessChange: (key: number, value: number) => void;
}

export default function LightSchedule() {
    const { globalState, globalDispatch } = useGlobalContext();
    const { slcState, slcDispatch } = useSLContext();

    const handleScheduler = (key: number) => (value: RangeValueType<Dayjs> | null | undefined) => {
        if(value !== null && value !== undefined && value[0] && value[1]){
            slcDispatch({
                type: SLCActionTypes.SET_SCHEDULER,
                payload: { key, value }
            });
            console.log('onOk: ', value![0]!.format('DD/MM/YYYY HH:MM Z'), value![1]!.format('DD/MM/YYYY HH:MM Z'));
        }
        else {
            alert("Operation not allowed, time range undefined!");
        }
    };
    
    const handleScheduleEvent = () => {
        globalDispatch({
            type: GlobalActionTypes.SET_MODAL_LIST,
            payload: ['bulkScheduler']
        });
        console.log('onOk: Schedule red color button for bulk scheduling based upon modal inputs');
    };     
    
    const handleBrightnessChange = (key: number, value: number) => {
        slcDispatch({
            type: SLCActionTypes.SET_BRIGHTNESS,
            payload: { key, value }
        });
    };
    
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setData((prevData) =>
    //         prevData.map((item) => ({
    //             ...item,
    //             timestamp: new Date().toLocaleString(),
    //         }))
    //         );
    //         slcDispatch({
    //             type: SLCActionTypes.SET_BRIGHTNESS,
    //             payload: { key, value }
    //         });
    //     }, 1000);

    //     return () => clearInterval(interval);
    // }, []);

    return (
        <Self 
            slcState={slcState}
            lightMode={globalState.LightMode}
            handleScheduler={handleScheduler}
            handleScheduleEvent={handleScheduleEvent}
            handleBrightnessChange={handleBrightnessChange}
        />
    );
}
