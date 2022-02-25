import React, { useEffect } from 'react'

const KakaoShareButton = ({ thumbnail_URL, buttonID, giftName, fishingRedirectURL='https://kakao-gift-fishing.vercel.app/fishing'}) => {
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
    <div className="kakao-share-button">
      {/* Kakao share button */}
      <button id={ buttonID }>{ giftName }</button>
    </div>
  )
}

export default KakaoShareButton;