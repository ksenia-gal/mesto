// Cоздание класса утилиты Api, для описания работы логики, обращения к Api
export default class Api {
    constructor(options) {
      this._baseUrl = options.baseUrl
      this._headers = options.headers
    }
  
    // Формирую запрос на сервер, если прошел не удачно, возвращаем ошибку!
    _handleSendingRequest(res) {
      if (res.ok) {
        return Promise.resolve(res.json())
      }
  
      // Если ошибка пришла, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`)
    }
  
    // Метод загрузки информации о пользователе с сервера
    async getRealUserInfo() {
      const response = await fetch(`${this._baseUrl}/users/me`, {
        headers: this._headers,
      })
      return this._handleSendingRequest(response)
    }
  
    // Метод загрузки карточек с сервера
    async getInitialCards() {
      const response = await fetch(`${this._baseUrl}/cards`, {
        headers: this._headers,
      })
      return this._handleSendingRequest(response)
    }
  
    // Метод редактирование профиля
    async editProfileUserInfo(data) {
      const response = await fetch(`${this._baseUrl}/users/me`, {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
          name: data.name,
          about: data.about,
        }),
      })
      return this._handleSendingRequest(response)
    }
  
    // Метод добавления новой карточки с сервера
    async addNewCard(data) {
      const response = await fetch(`${this._baseUrl}/cards`, {
        method: "POST",
        headers: this._headers,
        body: JSON.stringify(data),
      })
      return this._handleSendingRequest(response)
    }
  
    // Метод постановки лайка карточки
    async addLike(cardId) {
      const response = await fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
        method: "PUT",
        headers: this._headers,
      })
      return this._handleSendingRequest(response)
    }
  
    // Метод удаления карточки
    async removeCard(cardId) {
      const response = await fetch(`${this._baseUrl}/cards/${cardId}`, {
        method: "DELETE",
        headers: this._headers,
      })
      return this._handleSendingRequest(response)
    }
  
    // Метод постановки и снятия лайка с карточки
    async removeLike(cardId) {
      const response = await fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
        method: "DELETE",
        headers: this._headers,
      })
      return this._handleSendingRequest(response)
    }
  
    // Метод обновления аватара пользователя
    async updateProfileUserAvatar(data) {
      const response = await fetch(`${this._baseUrl}/users/me/avatar`, {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
          avatar: data.avatar,
        }),
      })
      return this._handleSendingRequest(response)
    }
  }
  
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

