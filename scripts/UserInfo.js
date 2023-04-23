export class UserInfo {
  constructor({ userNameSelector, userInfoSelector }) {
    this._userNameElement = document.querySelector(userNameSelector);
    this._userInfoElement = document.querySelector(userInfoSelector);
  }

  getUserInfo() {
    return {
      profileName: this._userNameElement.textContent,
      profileAdditionalInfo: this._userInfoElement.textContent,
    };
  }

  setUserInfo({ profileName, profileAdditionalInfo }) {
    this._userNameElement.textContent = profileName;
    this._userInfoElement.textContent = profileAdditionalInfo;
  }
}
