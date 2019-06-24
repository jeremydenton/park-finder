const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')
// const store = require('../store.js')

const onGetParks = (event) => {
  event.preventDefault()
  // console.log('index')
  api.getParks()
    .then(ui.onGetParksSuccess)
    .catch(ui.onGetParksFailure)
}
const onCreatePark = (event) => {
  // console.log('createpark events')
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.createPark(formData)
    .then(res => { onGetParks(event) })
    .then(ui.onCreateParkSuccess)
    .catch(ui.onCreateParkFailure)
}
const onEditPark = (event) => {
  // console.log('createpark events')
  event.preventDefault()
  const form = event.target
  const id = $(event.target).data('id')
  const formData = getFormFields(form)
  api.editPark(formData, id)
    .then(res => { onGetParks(event) })
    .then(ui.onEditParkSuccess)
    .catch(ui.onEditParkFailure)
}
const onDeletePark = (event) => {
  // console.log('park deleter')
  const id = $(event.target).data('id')
  api.deletePark(id)
    .then(res => { onGetParks(event) })
    .catch(ui.failure)
}

const onClearParks = (event) => {
  event.preventDefault()
  ui.clearParks()
}

const addHandlers = () => {
  $('#createPark').on('submit', onCreatePark)
  $('#content').on('submit', '.editPark', onEditPark)
  $('#getParksButton').on('click', onGetParks)
  $('#clearParksButton').on('click', onClearParks)
  $('#content').on('click', '.delete-park', onDeletePark)
}

module.exports = {
  onGetParks,
  onCreatePark,
  onEditPark,
  onDeletePark,
  addHandlers
}
