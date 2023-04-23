export class UserInfo {
  constructor({ userNameSelector, userInfoSelector }) {
    this._userNameElement = document.querySelector(userNameSelector);
    this._userInfoElement = document.querySelector(userInfoSelector);
  }

  getUserInfo() {
    return {
      userNameElement: this._userNameElement.textContent,
      userInfoElement: this._userInfoElement.textContent,
    };
  }

  setUserInfo(userNameElement, userInfoElement) {
    this._userNameElement.textContent = userNameElement;
    this._userInfoElement.textContent = userInfoElement;
  }
}
