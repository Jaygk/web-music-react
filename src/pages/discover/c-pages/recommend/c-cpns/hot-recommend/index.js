import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getHotRecommendsAction } from '../../store/actionCreators'

import { HotRecommendWrapper } from './style'

import LWThemeHeaderRcm from 'components/theme-header-rcm'
import SongsCover from 'components/songs-cover'

export default memo(function HotRecommend() {
  const dispatch = useDispatch()

  const { hotRecommendsList } = useSelector(
    state => ({
      hotRecommendsList: state.getIn(['recommend', 'hotRecommends']),
    }),
    shallowEqual
  )

  useEffect(() => {
    dispatch(getHotRecommendsAction(8))
  }, [dispatch])

  return (
    <HotRecommendWrapper>
      <LWThemeHeaderRcm title="热门推荐" keywords={['华语', '流行', '摇滚', '民谣', '电子']} />
      <div className="recommend-list">
        {hotRecommendsList.map(item => {
          return (
            <div className="list-item" key={item.id}>
              <SongsCover songsList={item} />
            </div>
          )
        })}
      </div>
    </HotRecommendWrapper>
  )
})
