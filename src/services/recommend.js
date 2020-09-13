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
