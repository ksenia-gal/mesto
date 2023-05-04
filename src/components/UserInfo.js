export class UserInfo {
  constructor({ userNameSelector, userInfoSelector, avatarSelector }) {
    this._userNameElement = document.querySelector(userNameSelector);
    this._userInfoElement = document.querySelector(userInfoSelector);
    this._avatarElement = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return {
      userNameElement: this._userNameElement.textContent,
      userInfoElement: this._userInfoElement.textContent,
    };
  }

  setUserInfo(userNameElement, userInfoElement, avatarElement) {
    this._userNameElement.textContent = userNameElement;
    this._userInfoElement.textContent = userInfoElement;
    this._avatarElement.src = avatarElement;
  }
}
