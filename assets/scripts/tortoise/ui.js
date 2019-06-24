// const store = require('../store')
const showTortoisesTemplate = require('../templates/tortoise-listing.handlebars')

const onCreateTortoiseSuccess = responseData => {
  // console.log('success', responseData)
  // $('#message').text(responseData)
  $('#createTortoise').children('input:not(.submit)').val('')
}

const clearTortoises = () => {
  $('.content').empty()
}

const onGetTortoisesSuccess = (data) => {
  // console.log('success', data)
  const showTortoisesHtml = showTortoisesTemplate({ tortoises: data.tortoises })
  // console.log(showTortoisesHtml)
  $('.content').html(showTortoisesHtml)
}

const onEditTortoiseSuccess = responseData => {
  // console.log('success', responseData)
  // $('#message').text(responseData)
  $('#editTortoiseIn').children('input:not(.submit)').val('')
}

// const onGetTortoisesFailure = responseData

module.exports = {
  onCreateTortoiseSuccess,
  onGetTortoisesSuccess,
  onEditTortoiseSuccess,
  clearTortoises
  // onGetTortoisesFailure
}
