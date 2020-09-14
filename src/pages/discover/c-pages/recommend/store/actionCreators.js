import * as actionType from './constants'

import { getBannerList, getHotRecommendsList, getNewAlbumsList } from '@/services/recommend'

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
