import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/vue-element-admin/user/login',
    method: 'post',
    data
  })
}

export function getInfo(params) {
  return request({
    url: '/vue-element-admin/user/info',
    method: 'get',
    params
  })
}

export function getRoutes(params) {
  return request({
    url: '/vue-element-admin/user/routes',
    method: 'get',
    params
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}
