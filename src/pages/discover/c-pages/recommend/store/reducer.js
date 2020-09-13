import * as actionType from './constants'

import { Map } from 'immutable'

const defaultState = Map({
  bannerList: [],
  hotRecommends: [],
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionType.CHANGE_TOP_BANNERS:
      return state.set('bannerList', action.list)
    case actionType.CHANGE_HOT_RECOMMENDS:
      return state.set('hotRecommends', action.list)
    default:
      return state
  }
}
