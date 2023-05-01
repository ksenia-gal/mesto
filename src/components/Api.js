export class Api {
  constructor({ URL, headers }) {
    this._URL = URL;
    this._headers = headers;
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
        return fetch(`${this._URL}users/me`, {
            headers: this._headers
        })
        .then(res => {
            return this._serverResponse(res);
        })
    }

    // 2. Загрузка карточек с сервера
    getInitialCards() {
        return fetch(`${this._URL}cards`, {
            headers: this._headers
        })
        .then(res => {
            return this._serverResponse(res);
        })
    }
}

