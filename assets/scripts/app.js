'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events')
const parkEvents = require('./park/events')

$(() => {
  $('#signUp').on('submit', authEvents.onSignUp)
  $('#signIn').on('submit', authEvents.onSignIn)
  $('#changePassword').on('submit', authEvents.onChangePassword)
  $('#signOut').on('submit', authEvents.onSignOut)
  // $('#getParks').on('click', parkEvents.onGetParks)
  // $('#createPark').on('submit', parkEvents.onCreatePark)
  // $('#editPark').on('submit', parkEvents.onEditPark)
  parkEvents.addHandlers()
  // console.log('handlers added')
})
