import * as actionType from './constants'

import { Map } from 'immutable'

const defaultState = Map({
  bannerList: [],
  hotRecommends: [],
  newAlbums: [],

  upRanking: [],
  newRanking: [],
  originRanking: [],
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionType.CHANGE_TOP_BANNERS:
      return state.set('bannerList', action.list)
    case actionType.CHANGE_HOT_RECOMMENDS:
      return state.set('hotRecommends', action.list)
    case actionType.CHANGE_NEW_ALBUMS:
      return state.set('newAlbums', action.list)
      
    case actionType.CHANGE_UP_RANKING:
      return state.set('upRanking', action.list)
    case actionType.CHANGE_NEW_RANKING:
      return state.set('newRanking', action.list)
    case actionType.CHANGE_ORIGIN_RANKING:
      return state.set('originRanking', action.list)
    default:
      return state
  }
}
