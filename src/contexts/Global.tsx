import React, { createContext, useReducer, useContext, Dispatch } from 'react';

// Define an enum for action names
export enum ActionTypes {
    SET_MODAL_LIST = 'SET_MODAL_LIST',
    LIGHT_MODE = 'LIGHT_MODE',
    SIDEBAR_OPTION = 'SIDEBAR_OPTION',
}

// Define a type for the payload of each action
type ActionPayloads = {
    [ActionTypes.SET_MODAL_LIST]: string[];
    [ActionTypes.LIGHT_MODE]: boolean;
    [ActionTypes.SIDEBAR_OPTION]: string;
};

type Action<T extends ActionTypes> = {
    type: T;
    payload: ActionPayloads[T];
};

// Define the state type
type State = {
    ModalList: string[],
    LightMode: boolean,
    SidebarOption: string,
};

// Define the initial state
const initialState: State = {
    ModalList: [],
    LightMode: true,
    SidebarOption: 'dashboard',
};

// Define the reducer function
const reducer = (state: State, action: Action<ActionTypes>): State => {
    switch (action.type) {
        case ActionTypes.SET_MODAL_LIST:
            return {
            ...state,
            ModalList: action.payload as string[],
            };
        
        case ActionTypes.LIGHT_MODE:
            return {
            ...state,
            LightMode: action.payload as boolean,
            };

        case ActionTypes.SIDEBAR_OPTION:
            return {
            ...state,
            SidebarOption: action.payload as string,
            };

        default:
            return state;
    }
};

// Create the context
const Context = createContext<{state: State; dispatch: Dispatch<Action<ActionTypes>>;}>({
    state: initialState,
    dispatch: () => null,
});

// Define a hook to use the context
export const useGlobalContext = (): { state: State; dispatch: Dispatch<Action<ActionTypes>> } => useContext(Context);

// Define the provider component
export const GlobalContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    );
};
