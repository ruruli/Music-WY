

import { request } from './request'
const urlApi = 'http://localhost:3000'
export function getLogin() {
  return request(urlApi + '/login', {
    user: 324, pass: 343
  })

}

export function getFoundMultidata() {
  return request({
    url: urlApi + '/banner?type=1',
  })
}

export function getFoundRecommend() {
  return request({
    url: urlApi + '/homepage/dragon/ball'
  })
}
export function getFoundPlaylist() {
  return request({
    url: urlApi + '/user/playlist?uid=32953014'
  })
}