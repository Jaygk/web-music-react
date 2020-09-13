import React, { memo } from 'react'

import { RecommendWrapper, RecommendContent, RecommendLeft, RecommendRight } from './style'
import LWTopBanner from './c-cpns/top-banner'
import HotRecommend from './c-cpns/hot-recommend'
import NewAlbum from './c-cpns/new-album'
import RecommendRank from './c-cpns/recommend-rank'

export default memo(function LWRecommend() {
  return (
    <RecommendWrapper>
      <LWTopBanner />
      <RecommendContent className="wrap-v2">
        <RecommendLeft>
          <HotRecommend />
          <NewAlbum />
          <RecommendRank />
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </RecommendContent>
    </RecommendWrapper>
  )
})
