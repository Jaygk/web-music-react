import * as actionType from './constants'

import { Map } from 'immutable'

const defaultState = Map({
  bannerList: [],
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionType.CHANGE_TOP_BANNERS:
      return state.set('bannerList', action.list)
    default:
      return state
  }
}
