export class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._token = headers['authorization'];
  }

//   обработка ответа сервера
_serverResponse(res) {
    if(res.ok) {
        return res.json();
    } else {
        return Promise.reject(`Ошибка: ${res.status}`);
    }
    }

//1. Загрузка информации о пользователе с сервера
    getUserData() {
        return fetch(`${this._baseUrl}users/me`, {
            headers: {
                authorization: this._token,
              }
        })
        .then(res => {
            return this._serverResponse(res);
        })
    }

    // 2. Загрузка карточек с сервера
    getInitialCards() {
        return fetch(`${this._baseUrl}cards`, {
            headers: {
                authorization: this._token,
              }
        })
        .then(res => {
            return this._serverResponse(res);
        })
    }
    // 3. Редактирование профиля
    editProfile(profileData) {
        return fetch(`${this._baseUrl}users/me`, {
            headers: {
                authorization: this._token,
              },
            method: 'PATCH',
            body: JSON.stringify({ name: profileData.username, about: profileData.description})
        })
        .then(res => { return this._serverResponse(res); 
        })
    }

    // 4. Добавление новой карточки
    addNewCard({ name, link}) {
        return fetch(`${this._baseUrl}cards`, {
            headers: {
                authorization: this._token,
              },
            method: 'POST', 
            body: JSON.stringify({ name, link})
        })
        .then(res => { return this._serverResponse(res)})
    }

    // 5. Отображение количества лайков карточки
    // 6. Попап удаления карточки
    // 7. Удаление карточки
    deleteCard(cardId) {
        return fetch(`${this._baseUrl}cards/${cardId}`, {
            headers: {
                authorization: this._token,
              },
          method: 'DELETE',
        })
          .then(res => { return this._serverResponse(res); })
      }
    // 8. Постановка и снятие лайка
     putLike(cardId) {
        return fetch(`${this._baseUrl}cards/${cardId}/likes`, {
            headers: {
                authorization: this._token,
              },
            method: 'PUT',
        })
        .then(res => {return this._serverResponse(res); })
     }

     deleteLike(cardId) {
        return fetch(`${this._baseUrl}cards/${cardId}/likes`, {
            headers: {
                authorization: this._token,
              },
            method: 'DELETE',
        })
        .then(res => {return this._serverResponse(res);
        })
     }
    //  9. Обновление аватара пользователя
    changeAvatar(avatarLink) {
        return fetch(`${this._baseUrl}users/me/avatar`, {
            headers: {
                authorization: this._token,
              },
            method: 'PATCH',
            body: JSON.stringify({avatar: avatarLink.avatar})
        })
        .then(res => { return this._serverResponse(res);
        })
    }
}

