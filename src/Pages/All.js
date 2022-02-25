import React from 'react';

import MapleStory from './MapleStory';
import Coffee from './Coffee';

const All = () => {
    return (
        <div>
            <h3>Coffee</h3>
            <Coffee />
            <h3>MapleStory</h3>
            <MapleStory />
        </div>
    );
};

export default All;