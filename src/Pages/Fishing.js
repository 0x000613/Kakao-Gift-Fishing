import React from 'react';
import { Link } from 'react-router-dom';
import FishingImage from '../Images/Fishing.png';

import '../CSS/Fishing.css';

const Fishing = () => {
    return (
        <div className='fishing-container'>
            <h1>낚였습니다!</h1>
            <img src={FishingImage} alt='FishingImage' />
            <Link to='/' className='gotofishing-button'>나도 낚시하러가기 &gt;&gt;</Link>
        </div>
    );
};

export default Fishing;