import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getUpRankingAction, getNewRankingAction, getOriginRankingAction } from '../../store/actionCreators'

import ThemeHeaderRcm from 'components/theme-header-rcm'
import TopRanking from 'components/top-ranking'
import { RecommendRankWrapper } from './style'

export default memo(function RecommendRank() {
  const dispatch = useDispatch()

  const { upRanking, newRanking, originRanking } = useSelector(state => ({
    upRanking: state.getIn(['recommend', 'upRanking']),
    newRanking: state.getIn(['recommend', 'newRanking']),
    originRanking: state.getIn(['recommend', 'originRanking']),
  }))

  useEffect(() => {
    dispatch(getUpRankingAction())
    dispatch(getNewRankingAction())
    dispatch(getOriginRankingAction())
  }, [dispatch])

  return (
    <RecommendRankWrapper>
      <ThemeHeaderRcm title="榜单" />
      <div className="content">
        <TopRanking info={upRanking} />
        <TopRanking info={originRanking} />
        <TopRanking info={newRanking} />
      </div>
    </RecommendRankWrapper>
  )
})
