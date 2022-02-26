import React from 'react';
import KakaoShareButton from '../Components/KakaoShareButton';

const Game = () => {
    return (
        <div className='kakao-share-button-container'>
            <KakaoShareButton thumbnail_URL='https://kakao-gift-fishing.vercel.app/assets/images/game/core-jamstone.png' giftName='코어 젬스톤' giftInfo='코어 젬스톤 X 30' buttonID='core-jamstone' />
        </div>
    );
};

export default Game;