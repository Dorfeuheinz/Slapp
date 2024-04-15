import React, { createContext, useReducer, useContext, Dispatch } from 'react';

// Define an enum for action names
export enum ActionTypes {
    ACTION_1 = 'ACTION_1',
    ACTION_2 = 'ACTION_2',
    // Add more action types as needed
}

// Define a type for the payload of each action
type ActionPayloads = {
    [ActionTypes.ACTION_1]: string;
    [ActionTypes.ACTION_2]: number;
    // Add more action payloads as needed
};

type Action<T extends ActionTypes> = {
    type: T;
    payload: ActionPayloads[T];
};

// Define the state type
type State = {
    value: string;
    count: number;
};

// Define the initial state
const initialState: State = {
    value: '',
    count: 0,
};

// Define the reducer function
const reducer = (state: State, action: Action<ActionTypes>): State => {
    switch (action.type) {
        case ActionTypes.ACTION_1:
            return {
            ...state,
            value: action.payload as string,
            };

        case ActionTypes.ACTION_2:
            return {
            ...state,
            count: action.payload as number,
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
