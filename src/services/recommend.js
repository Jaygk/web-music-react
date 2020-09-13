import request from './request'

export const getBannerList = () => {
  return request({
    url: '/banner'
  })
}