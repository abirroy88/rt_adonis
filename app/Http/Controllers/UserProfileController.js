'use strict'

class UserProfileController {
  * userProfile(request, response) {
    yield response.sendView('userProfile/publicUserProfile')
  }
}

module.exports = UserProfileController
