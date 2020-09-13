import * as actionType from './constants'

import {getBannerList, getHotRecommendsList} from '@/services/recommend'

const changeBannerList = list => ({
  type: actionType.CHANGE_TOP_BANNERS,
  list
})

export const getBannerListAction = () => {
  return async dispatch => {
    const res = await getBannerList()
    dispatch(changeBannerList(res.banners))
  }
}

const changeHotRecommends = list => ({
  type: actionType.CHANGE_HOT_RECOMMENDS,
  list
})

export const getHotRecommends = (limit) => {
  return async dispatch => {
    const res = await getHotRecommendsList(limit)
    dispatch(changeHotRecommends(res.result))
  }
}