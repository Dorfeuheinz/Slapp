import React from 'react';
import {A as Self} from 'components/A';

export type type_A = {
    name: string,
    num: number,
}

export const A: React.FC<any> = () => {
    return (
        <Self name={"watevs"} num={12} />
    );
};
