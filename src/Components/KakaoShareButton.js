import React, { useEffect } from 'react'

// Styles
import '../CSS/Button.css'

// Images
import KakaoLogo from'../Images/Kakao-Logo.png'

/*
  @thumbnail_URL = 썸네일 이미지 주소
  @buttonID = 생성될 HTML 객체의 ID
  @giftName = 상품명
  @giftInfo = 상품 상세설명 (null이 유지될 경우 giftName으로 대체됨)
  @fishingRedirectURL = 선물함으로 가기 버튼 클릭시 이동될 콜백 URL
 */
const KakaoShareButton = ({ thumbnail_URL, buttonID, giftName, giftInfo=null, fishingRedirectURL='https://kakao-gift-fishing.vercel.app/fishing'}) => {
  useEffect(() => {
    createKakaoButton()
  })

  const createKakaoButton = () => {
    // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다
    if (window.Kakao) {
      const kakao = window.Kakao

      // 중복 initialization 방지
      if (!kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        kakao.init(process.env.REACT_APP_KAKAO_KEY)
      }

      kakao.Link.createDefaultButton({
        // Render 부분 id=kakao-link-btn 을 찾아 그부분에 렌더링을 합니다
        container: '#' + buttonID,
        objectType: 'feed',
        content: {
          title: '선물과 메세지를 보냈습니다.',
          // giftInfo가 별도로 지정되어 있으면 
          description: giftInfo ? giftInfo : giftName,
          imageUrl: thumbnail_URL , // i.e. process.env.FETCH_URL + '/logo.png'
          link: {
            mobileWebUrl: fishingRedirectURL,
            webUrl: fishingRedirectURL,
          },
        },
        buttons: [
          {
            title: '선물함으로 가기',
            link: {
              mobileWebUrl: fishingRedirectURL,
              webUrl: fishingRedirectURL,
            },
          }
        ],
      })
    }
  }

  return (
    <div className="kakao-share-button-wrapper">
      {/* Item name */}
      <p className='kakao-share-button-title'>{ giftName }</p>
      {/* Item image */}
      <img src={thumbnail_URL} alt={giftName + ' 이미지'} />
      {/* Kakao share button */}
      <button className='kakao-share-button' id={ buttonID }><img src={ KakaoLogo } alt='KakaoLogo' /><span>카카오톡으로 선물하기</span></button>
    </div>
  )
}

export default KakaoShareButton;