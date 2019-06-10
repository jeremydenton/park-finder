'use strict'

const store = require('../store')

const onSignUpSuccess = responseData => {
  console.log('success', responseData)
  $('#message').text('Signed up successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#signUp').children('input:not(.submit)').val('')
}

const onSignUpFailure = responseData => {
  console.log('failure', responseData)
  $('#message').text('Sign up failed')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('#signUp').children('input:not(.submit)').val('')
}

const onSignInSuccess = responseData => {
  console.log('success', responseData)
  $('#message').text('Signed in successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('.signedOut').hide()
  $('.signedIn').show()
  $('#signIn').children('input:not(.submit)').val('')

  store.user = responseData.user
  console.log('store is', store)
}

const onSignInFailure = responseData => {
  console.log('failure', responseData)
  $('#message').text('Sign in failed')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('#signIn').children('input:not(.submit)').val('')
}

const onChangePasswordSuccess = () => {
  $('#message').text('Changed password successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#changePassword').children('input:not(.submit)').val('')
}

const onChangePasswordFailure = () => {
  $('#message').text('Change password failed')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('#changePassword').children('input:not(.submit)').val('')
}

const onSignOutSuccess = () => {
  $('#message').text('Signed out successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('.signedOut').show()
  $('.signedIn').hide()
}

const onSignOutFailure = () => {
  $('#message').text('Sign out failed')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

$('#message').removeClass()
$('#message').addClass('success')

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
