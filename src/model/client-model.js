import cookie from '../util/cookie.js'
const axios = require('axios')

const createError = require('../util/util.js')

const request = axios.create({
  baseURL: '/'
})

const handleRequest = (request) => {
  return new Promise((resolve, reject) => {
    request.then(response => {
      const data = response.data
      if (!data) {
        reject(createError(400, 'no data'))
        return
      }
      resolve(data)
    }).catch(err => {
      console.log(err)
      if (err.response.status === 401) {
        reject(createError(401, 'need login'))
        return
      }
      if (err.response.status === 400) {
        reject(createError(400, err.response.data.message))
        return
      }
      if (err.response.status === 404 && err.response.data.detail === 'Not found.') {
        resolve({status: false, detail: '该用户不存在'})
        return
      }
      if (err.response.status === 404) {
        reject(createError(404, '路径错误'))
      }
    })
  })
}

module.exports = {
  getAllMenus (param) {
    return handleRequest(request.get(`api/points/?${param}`))
  },
  addMenu (todo) {
    return handleRequest(request.post('api/points/', todo))
  },
  updateMenu (id, todo) {
    return handleRequest(request.put(`api/points/${id}/`, todo))
  },
  deleteMenu (id) {
    return handleRequest(request.delete(`api/todo/${id}`))
  },
  addOrder (ids) {
    return handleRequest(request.post('/api/delete/completed', {ids}))
  }
}
