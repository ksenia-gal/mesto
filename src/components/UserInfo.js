export default class UserInfo {
  constructor({ name, about, avatar }) {
    this._data = {
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
      name: this._data.name,
      about: this._data.about,
      avatar: this._data.avatar,
    }
  }

  setUserInfo(data) {
    this._data.name = data.name
    this._data.about = data.about
    this._data.avatar = data.avatar
    if (data.name) {
      this._name.textContent = this._data.name
    }

    if (data.about) {
      this._about.textContent = this._data.about
    }

    if (data.avatar) {
      this._avatar.src = this._data.avatar
      this._avatar.alt = this._data.name
    }
  }
}
// export default class UserInfo {
//   constructor({ userNameSelector, userInfoSelector, avatarSelector }) {
//     this._userNameElement = document.querySelector(userNameSelector);
//     this._userInfoElement = document.querySelector(userInfoSelector);
//     this._avatarElement = document.querySelector(avatarSelector);
//   }

//   getUserInfo() {
//     return this._profileData = {
//       name: this._userNameElement.textContent,
//       about: this._userInfoElement.textContent,
//     };
//   }

//   setUserInfo( name, about, avatar ) {
//     this._userNameElement.textContent = name;
//     this._userInfoElement.textContent = about;
//     this._avatarElement.src = avatar;
//   }
// }
