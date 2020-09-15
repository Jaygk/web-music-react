import request from './request'

export const getBannerList = () => {
  return request({
    url: '/banner',
  })
}

export const getHotRecommendsList = limit => {
  return request({
    url: '/personalized',
    params: {
      limit,
    },
  })
}

export const getNewAlbumsList = () => {
  return request({
    url: '/album/newest',
  })
}

export const getTopRankingList = idx => {
  return request({
    url: '/top/list',
    params: {
      idx,
    },
  })
}
