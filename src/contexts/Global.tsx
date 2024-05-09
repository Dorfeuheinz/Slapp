import React, { createContext, useReducer, useContext, Dispatch } from 'react';

// Define an enum for action names
export enum ActionTypes {
    SET_MODAL_LIST = 'SET_MODAL_LIST',
}

// Define a type for the payload of each action
type ActionPayloads = {
    [ActionTypes.SET_MODAL_LIST]: string[];
};

type Action<T extends ActionTypes> = {
    type: T;
    payload: ActionPayloads[T];
};

// Define the state type
type State = {
    ModalList: string[],
};

// Define the initial state
const initialState: State = {
    ModalList: [],
};

// Define the reducer function
const reducer = (state: State, action: Action<ActionTypes>): State => {
    switch (action.type) {
        case ActionTypes.SET_MODAL_LIST:
            return {
            ...state,
            ModalList: action.payload,
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
