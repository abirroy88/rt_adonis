'use strict'

class propertyDetailsController {
  * detailsProperty(request, response) {
    yield response.sendView('Property/propertyDetails')
  }
}

module.exports = propertyDetailsController
