import React from 'react';
import { multiply } from '../../utilities/Calculate';

const Shoes = () => {
    const first= 20;
    const second = 75;
    const total = multiply( first, second)
    return (
        <div>
            <h2>This is shoes compo </h2>
            <p>Result: {total}</p>
        </div>
    );
};

export default Shoes;