import React from 'react';

import KakaoShareButton from '../Components/KakaoShareButton'

const Coffee = () => {
    return (
        <div className='kakao-share-button-container'>
            <KakaoShareButton thumbnail_URL='https://kakao-gift-fishing.vercel.app/assets/images/coffee/ediya-ice-americano.png' giftName='이디야 아이스 아메리카노' buttonID='ediya-ice-americano'/>
        </div>
    );
};

export default Coffee;