import React from 'react';

import MapleStory from './MapleStory';
import Coffee from './Coffee';

const All = () => {
    return (
        <div className='main-contents-container'>
            <h3 className="category-title">Coffee</h3>
            <Coffee />
            <h3 className="category-title">MapleStory</h3>
            <MapleStory />
        </div>
    );
};

export default All;