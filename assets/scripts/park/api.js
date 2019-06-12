'use strict'
const config = require('../config')
const store = require('../store')

const getParks = () => {
  // console.log('from api getParks')
  // console.log(store.user.token)
  return $.ajax({
    url: config.apiUrl + '/parks',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createPark = formData => {
  // console.log('from api getParks')
  // console.log(store.user.token)
  // console.log(formData)
  return $.ajax({
    url: config.apiUrl + '/parks',
    method: 'POST',
    data: formData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const editPark = (formData, id) => {
  // console.log('from api getParks')
  // console.log(store.user.token)
  // console.log(formData)
  return $.ajax({
    url: config.apiUrl + `/parks/${id}`,
    method: 'PATCH',
    data: formData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deletePark = (id) => {
  // console.log('from api getParks')
  // console.log(store.user.token)
  return $.ajax({
    url: config.apiUrl + '/parks/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getParks,
  createPark,
  editPark,
  deletePark
}
