import * as actionType from './constants'

import { getBannerList, getHotRecommendsList, getNewAlbumsList, getTopRankingList } from '@/services/recommend'

const changeBannerList = list => ({
  type: actionType.CHANGE_TOP_BANNERS,
  list,
})

const changeHotRecommends = list => ({
  type: actionType.CHANGE_HOT_RECOMMENDS,
  list,
})

const changeNewAlbums = list => ({
  type: actionType.CHANGE_NEW_ALBUMS,
  list,
})

const changeUpRanking = list => ({
  type: actionType.CHANGE_UP_RANKING,
  list,
})

const changeNewRanking = list => ({
  type: actionType.CHANGE_NEW_RANKING,
  list,
})

const changeOriginRanking = list => ({
  type: actionType.CHANGE_ORIGIN_RANKING,
  list,
})

export const getBannerListAction = () => {
  return async dispatch => {
    const res = await getBannerList()
    dispatch(changeBannerList(res.banners))
  }
}

export const getHotRecommendsAction = limit => {
  return async dispatch => {
    const res = await getHotRecommendsList(limit)
    dispatch(changeHotRecommends(res.result))
  }
}

export const getNewAlbumsAction = () => {
  return async dispatch => {
    const res = await getNewAlbumsList()
    dispatch(changeNewAlbums(res.albums))
  }
}

export const getUpRankingAction = () => {
  return async dispatch => {
    const res = await getTopRankingList(3)
    dispatch(changeUpRanking(res.playlist))
  }
}

export const getNewRankingAction = () => {
  return async dispatch => {
    const res = await getTopRankingList(2)
    dispatch(changeNewRanking(res.playlist))
  }
}

export const getOriginRankingAction = () => {
  return async dispatch => {
    const res = await getTopRankingList(0)
    dispatch(changeOriginRanking(res.playlist))
  }
}
