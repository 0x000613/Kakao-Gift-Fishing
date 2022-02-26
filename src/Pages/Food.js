import React from 'react';
import KakaoShareButton from '../Components/KakaoShareButton';

const Food = () => {
    return (
        <div className='kakao-share-button-container'>
            <KakaoShareButton thumbnail_URL='https://kakao-gift-fishing.vercel.app/assets/images/food/newyork-burger.png' giftName='뉴욕버거 라지세트' buttonID='newyork-burger' />
        </div>
    );
};

export default Food;