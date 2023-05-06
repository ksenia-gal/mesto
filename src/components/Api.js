export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  // обработка ответа сервера
  _serverResponse(res) {
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
    return this._serverResponse(response);
  }

  // загрузка карточек с сервера
  async getInitialCards() {
    const response = await fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    });
    return this._serverResponse(response);
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
    return this._serverResponse(response);
  }

  // добавление новой карточки
  async addNewCard(cardData) {
    const response = await fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(cardData),
    });
    return this._serverResponse(response);
  }

  // постановка и удаление лайка
  async putLike(cardId) {
    const response = await fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: this._headers,
    });
    return this._serverResponse(response);
  }
  async deleteLike(cardId) {
    const response = await fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this._headers,
    });
    return this._serverResponse(response);
  }
  // удаление карточки
  async deleteCard(cardId) {
    const response = await fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    });
    return this._serverResponse(response);
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
    return this._serverResponse(response);
  }
}
//  9. Обновление аватара пользователя
//     changeAvatar(avatarLink) {
//         return fetch(`${this._baseUrl}users/me/avatar`, {
//             headers: {
//                 authorization: this._token,
//               },
//             method: 'PATCH',
//             body: JSON.stringify({avatar: avatarLink.avatar})
//         })
//         .then(res => { return this._serverResponse(res);
//         })
//     }
// }

// export class Api {
//   constructor({ baseUrl, headers }) {
//     this._baseUrl = baseUrl;
//     this._token = headers['authorization'];
//   }

// //   обработка ответа сервера
// _serverResponse(res) {
//     if(res.ok) {
//         return res.json();
//     } else {
//         return Promise.reject(`Ошибка: ${res.status}`);
//     }
//     }

// //1. Загрузка информации о пользователе с сервера
//     getUserData() {
//         return fetch(`${this._baseUrl}users/me`, {
//             headers: {
//                 authorization: this._token,
//               }
//         })
//         .then(res => {
//             return this._serverResponse(res);
//         })
//     }

//     // 2. Загрузка карточек с сервера
//     getInitialCards() {
//         return fetch(`${this._baseUrl}cards`, {
//             headers: {
//                 authorization: this._token,
//               }
//         })
//         .then(res => {
//             return this._serverResponse(res);
//         })
//     }
//     // 3. Редактирование профиля
//     editProfile(profileData) {
//         return fetch(`${this._baseUrl}users/me`, {
//             headers: {
//                 authorization: this._token,
//               },
//             method: 'PATCH',
//             body: JSON.stringify({ name: profileData.username, about: profileData.description})
//         })
//         .then(res => { return this._serverResponse(res);
//         })
//     }

//     // 4. Добавление новой карточки
//     addNewCard({ name, link}) {
//         return fetch(`${this._baseUrl}cards`, {
//             headers: {
//                 authorization: this._token,
//               },
//             method: 'POST',
//             body: JSON.stringify({ name, link})
//         })
//         .then(res => { return this._serverResponse(res)})
//     }

//     // 5. Отображение количества лайков карточки
//     // 6. Попап удаления карточки
//     // 7. Удаление карточки
//     deleteCard(cardId) {
//         return fetch(`${this._baseUrl}cards/${cardId}`, {
//             headers: {
//                 authorization: this._token,
//               },
//           method: 'DELETE',
//         })
//           .then(res => { return this._serverResponse(res); })
//       }
//     // 8. Постановка и снятие лайка
//      putLike(cardId) {
//         return fetch(`${this._baseUrl}cards/${cardId}/likes`, {
//             headers: {
//                 authorization: this._token,
//               },
//             method: 'PUT',
//         })
//         .then(res => {return this._serverResponse(res); })
//      }

//      deleteLike(cardId) {
//         return fetch(`${this._baseUrl}cards/${cardId}/likes`, {
//             headers: {
//                 authorization: this._token,
//               },
//             method: 'DELETE',
//         })
//         .then(res => {return this._serverResponse(res);
//         })
//      }
//     //  9. Обновление аватара пользователя
//     changeAvatar(avatarLink) {
//         return fetch(`${this._baseUrl}users/me/avatar`, {
//             headers: {
//                 authorization: this._token,
//               },
//             method: 'PATCH',
//             body: JSON.stringify({avatar: avatarLink.avatar})
//         })
//         .then(res => { return this._serverResponse(res);
//         })
//     }
// }
