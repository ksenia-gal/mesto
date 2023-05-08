export default class UserInfo {
  constructor({ name, about, avatar }) {
    this._userData = {
      name: name.textContent,
      about: about.textContent,
      avatar: avatar.textContent
    }
    this._name = name
    this._about = about
    this._avatar = avatar
  }

  getUserInfo() {
    return {
      name: this._userData.name,
      about: this._userData.about,
      avatar: this._userData.avatar,
    }
  }

  setUserInfo(data) {
    this._userData.name = data.name
    this._userData.about = data.about
    this._userData.avatar = data.avatar
    if (data.name) {
      this._name.textContent = this._userData.name
    }

    if (data.about) {
      this._about.textContent = this._userData.about
    }

    if (data.avatar) {
      this._avatar.src = this._userData.avatar
      this._avatar.alt = this._userData.name
    }
  }
}