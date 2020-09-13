import * as actionType from './constants'

import {getBannerList} from '@/services/recommend'

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