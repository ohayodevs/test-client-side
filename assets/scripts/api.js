'use strict'

const getAllBooks = function () {
  return $.ajax({
    url: config.apiOrigin + '/books',
    method: 'GET',
    headers: {
      contentType: 'application/json',
    }
  })
}

module.exports {

}
