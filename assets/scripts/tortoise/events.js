const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')
// const store = require('../store.js')

const onGetTortoises = (event) => {
  event.preventDefault()
  // console.log('index')
  api.getTortoises()
    .then(ui.onGetTortoisesSuccess)
    .catch(ui.onGetTortoisesFailure)
}
const onCreateTortoise = (event) => {
  // console.log('createtortoise events')
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.createTortoise(formData)
    .then(res => { onGetTortoises(event) })
    .then(ui.onCreateTortoiseSuccess)
    .catch(ui.onCreateTortoiseFailure)
}
const onEditTortoise = (event) => {
  // console.log('createtortoise events')
  event.preventDefault()
  const form = event.target
  const id = $(event.target).data('id')
  const formData = getFormFields(form)
  api.editTortoise(formData, id)
    .then(res => { onGetTortoises(event) })
    .then(ui.onEditTortoiseSuccess)
    .catch(ui.onEditTortoiseFailure)
}
const onDeleteTortoise = (event) => {
  // console.log('tortoise deleter')
  const id = $(event.target).data('id')
  api.deleteTortoise(id)
    .then(res => { onGetTortoises(event) })
    .catch(ui.failure)
}

const onClearTortoises = (event) => {
  event.preventDefault()
  ui.clearTortoises()
}

const addHandlers = () => {
  $('#createTortoise').on('submit', onCreateTortoise)
  $('#content').on('submit', '.editTortoise', onEditTortoise)
  $('#getTortoisesButton').on('click', onGetTortoises)
  $('#clearTortoisesButton').on('click', onClearTortoises)
  $('#content').on('click', '.delete-tortoise', onDeleteTortoise)
}

module.exports = {
  onGetTortoises,
  onCreateTortoise,
  onEditTortoise,
  onDeleteTortoise,
  addHandlers
}
