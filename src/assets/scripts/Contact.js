export default class Contact {
  firstName = null
  lastName = null
  picture = null
  isOnline = false

  // https://mighty.tools/mockmind-api/content/human/72.jpg

  constructor(firstName, lastName, picture, isOnline = false) {
    this.firstName = firstName
    this.lastName = lastName
    this.picture = picture
    this.isOnline = isOnline
  }

  getFullName () {
    return `${this.firstName} ${this.lastName}`
  }
}
