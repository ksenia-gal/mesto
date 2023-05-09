export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  // обработка ответа сервера
  _checkResponse(res) {
    if (res.ok) {
      return Promise.resolve(res.json());
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  // загрузка информации о пользователе с сервера
  async getUserData() {
    const response = await fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    });
    return this._checkResponse(response);
  }

  // загрузка карточек с сервера
  async getInitialCards() {
    const response = await fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    });
    return this._checkResponse(response);
  }

  // редактирование профиля
  async editProfile(profileData) {
    const response = await fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: profileData.name,
        about: profileData.about,
      }),
    });
    return this._checkResponse(response);
  }

  // добавление новой карточки
  async addNewCard(cardData) {
    const response = await fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(cardData),
    });
    return this._checkResponse(response);
  }

  // постановка и удаление лайка
  async putLike(cardId) {
    const response = await fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: this._headers,
    });
    return this._checkResponse(response);
  }
  async deleteLike(cardId) {
    const response = await fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this._headers,
    });
    return this._checkResponse(response);
  }
  // удаление карточки
  async deleteCard(cardId) {
    const response = await fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    });
    return this._checkResponse(response);
  }

  // обновление аватара пользователя
  async changeAvatar(data) {
    const response = await fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    });
    return this._checkResponse(response);
  }
}
