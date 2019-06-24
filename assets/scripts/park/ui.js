// const store = require('../store')
const showParksTemplate = require('../templates/park-listing.handlebars')

const onCreateParkSuccess = responseData => {
  // console.log('success', responseData)
  // $('#message').text(responseData)
  $('#createPark').children('input:not(.submit)').val('')
}

const clearParks = () => {
  $('.content').empty()
}

const onGetParksSuccess = (data) => {
  // console.log('success', data)
  const showParksHtml = showParksTemplate({ parks: data.parks })
  $('.content').html(showParksHtml)
}

const onEditParkSuccess = responseData => {
  // console.log('success', responseData)
  // $('#message').text(responseData)
  $('#editParkIn').children('input:not(.submit)').val('')
}

// const onGetParksFailure = responseData

module.exports = {
  onCreateParkSuccess,
  onGetParksSuccess,
  onEditParkSuccess,
  clearParks
  // onGetParksFailure
}
