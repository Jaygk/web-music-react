import { combineReducers } from 'redux-immutable'

import recommendReducer from '@/pages/discover/c-pages/recommend/store'

export default combineReducers({
  recommend: recommendReducer,
})
