import React from 'react';

import Game from './Game';
import Coffee from './Coffee';

const All = () => {
    return (
        <div className='main-contents-container'>
            <h3 className="category-title">커피</h3>
            <Coffee />
            <h3 className="category-title">게임/상품권</h3>
            <Game />
        </div>
    );
};

export default All;