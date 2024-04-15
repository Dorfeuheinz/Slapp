import React from 'react';
import Self from 'components/B';

export type type_B = {
    name: string,
    num: number,
}

import { ActionTypes, useGlobalContext } from 'contexts/Global';

const B: React.FC = () => {
    const { state, dispatch } = useGlobalContext();

    const handleClick = () => {
        // Dispatch an action to update the state
        dispatch({ type: ActionTypes.ACTION_1, payload: 'New Value' });
    };

    return (
        <div>
        <h1>Value: {state.value}</h1>
        <h1>Count: {state.count}</h1>
        <button onClick={handleClick}>Update Value</button>
        <Self name={"watevs"} num={12} />
        </div>
    );
};

export default B;