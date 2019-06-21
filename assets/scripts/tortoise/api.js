'use strict'
const config = require('../config')
const store = require('../store')

const getTortoises = () => {
  console.log('from api getTortoises')
  console.log(store.user.token)
  return $.ajax({
    url: config.apiUrl + '/tortoises',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createTortoise = formData => {
  console.log('from api getTortoises')
  console.log(store.user.token)
  console.log(formData)
  return $.ajax({
    url: config.apiUrl + '/tortoises',
    method: 'POST',
    data: formData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const editTortoise = (formData, id) => {
  console.log('from api getTortoises')
  console.log(store.user.token)
  console.log(formData)
  return $.ajax({
    url: config.apiUrl + `/tortoises/${id}`,
    method: 'PATCH',
    data: formData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteTortoise = (id) => {
  console.log('from api getTortoises')
  console.log(store.user.token)
  return $.ajax({
    url: config.apiUrl + '/tortoises/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getTortoises,
  createTortoise,
  editTortoise,
  deleteTortoise
}
