import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getBannerListAction } from '../../store/actionCreators'

import { TopBannerWrapper } from './style'
import { Carousel } from 'antd'

export default memo(function LWTopBanner() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const dispatch = useDispatch()
  const { bannerList } = useSelector(
    state => ({
      bannerList: state.getIn(['recommend', 'bannerList']),
    }),
    shallowEqual
  )

  useEffect(() => {
    dispatch(getBannerListAction())
  }, [dispatch])

  const bannerRef = useRef()

  const bannerChange = useCallback((from, to) => {
    setCurrentIndex(to)
  }, [])

  const backImg = bannerList[currentIndex] && bannerList[currentIndex].imageUrl

  return (
    <TopBannerWrapper backImage={backImg + '?imageView&blur=40x20'}>
      <div className="banner wrap-v2">
        <div className="banner-list">
          <Carousel effect="fade" autoplay beforeChange={bannerChange} ref={bannerRef}>
            {bannerList.map(item => {
              return (
                <div className="item" key={item.imageUrl}>
                  <img src={item.imageUrl} alt={item.title} />
                </div>
              )
            })}
          </Carousel>
        </div>
        <div className="right-download"></div>
        <div className="control">
          <div className="control-left" onClick={() => bannerRef.current.prev()}></div>
          <div className="control-right" onClick={() => bannerRef.current.next()}></div>
        </div>
      </div>
    </TopBannerWrapper>
  )
})
