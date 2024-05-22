import React, { createContext, useReducer, useContext, Dispatch } from 'react';
import { DatePicker } from "antd";
import type { GetProps } from 'antd';

export type RangePickerProps = GetProps<typeof DatePicker.RangePicker>;

// Define an enum for action names
export enum SLCActionTypes {
    SET_NAME = 'SET_NAME',
    SET_TIME = 'SET_TIME',
    SET_SWITCH = 'SET_SWITCH',
    SET_SCHEDULER = 'SET_SCHEDULER',
    SET_BRIGHTNESS = 'SET_BRIGHTNESS',
}

// Define a type for the payload of each action
type ActionPayloads = {
    [SLCActionTypes.SET_NAME]: { key: number, value: string };
    [SLCActionTypes.SET_TIME]: { key: number, value: string };
    [SLCActionTypes.SET_SWITCH]: { key: number, value: boolean };
    [SLCActionTypes.SET_SCHEDULER]: { key: number, value: RangePickerProps['value'] };
    [SLCActionTypes.SET_BRIGHTNESS]: { key: number, value: number };
};

type Action<T extends SLCActionTypes> = {
    type: T;
    payload: ActionPayloads[T];
};

// Define the state type
export type SLCState = {
    key: number;
    name: string;
    timestamp: string;
    switch: boolean;
    scheduler: RangePickerProps['value'];
    brightness: number;
};

const data: SLCState[] = [];
for (let i=0;i<100;i++) {
    data.push({
        key: i,
        name: `SLC ${i}`,
        timestamp: new Date().toLocaleString(),
        switch: true,
        scheduler: null,
        brightness: 0,
    });
}

// Define the initial state
const initialState: SLCState[] = data;


// Define the reducer function
const reducer = (state: SLCState[], action: Action<SLCActionTypes>): SLCState[] => {
    switch (action.type) {
        case SLCActionTypes.SET_NAME:
            return state.map((dataset) =>
                dataset.key === action.payload.key ? { ...dataset, name: action.payload.value as string } : dataset
            );

        case SLCActionTypes.SET_TIME:
            return state.map((dataset) =>
                dataset.key === action.payload.key ? { ...dataset, timestamp: action.payload.value as string } : dataset
            );
      
        case SLCActionTypes.SET_SWITCH:
            return state.map((dataset) =>
                dataset.key === action.payload.key ? { ...dataset, switch: !dataset.switch as boolean } : dataset
            );
      
        case SLCActionTypes.SET_SCHEDULER:
            return state.map((dataset) =>
                dataset.key === action.payload.key ? { ...dataset, scheduler: action.payload.value as RangePickerProps['value'] } : dataset
            );

        case SLCActionTypes.SET_BRIGHTNESS:
            return state.map((dataset) =>
                dataset.key === action.payload.key ? { ...dataset, brightness: action.payload.value as number } : dataset
            );

        default:
            return state;
    }
};

// Create the context
const Context = createContext<{ slcState: SLCState[]; slcDispatch: Dispatch<Action<SLCActionTypes>>;}>({
    slcState: initialState,
    slcDispatch: () => null,
});

// Define a hook to use the context
export const useSLContext = (): { slcState: SLCState[]; slcDispatch: Dispatch<Action<SLCActionTypes>> } => useContext(Context);

// Define the provider component
export const SLContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <Context.Provider value={{ slcState: state, slcDispatch: dispatch }}>
            {children}
        </Context.Provider>
    );
};
