import React from 'react';
import {Link} from 'react-router-dom';

const Fishing = () => {
    return (
        <div>
            <h1>낚였습니다!</h1>
            <Link to='/'>나도 낚시하러가기</Link>
        </div>
    );
};

export default Fishing;