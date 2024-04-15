import React from 'react';
import { type_A } from 'containers/A';

export const A: React.FC<type_A> = ({ name, num }) => {
    return (
        <div>
            Hello, {name}!
            Codename: {num}
        </div>
    );
};