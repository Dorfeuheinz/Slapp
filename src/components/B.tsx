import React from 'react';
import { type_B } from 'containers/B';

const B: React.FC<type_B> = ({ name, num }) => {
    return (
        <div>
            Hello, {name}!
            Codename: {num}
        </div>
    );
};
  
export default B;