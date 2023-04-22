export class UserInfo {
  constructor({ userNameSelector, userInfoSelector }) {
    this._userNameSelector = document.querySelector(userNameSelector);
    this._userInfoSelector = document.querySelector(userInfoSelector);
    this._userName = document.querySelector(this._userNameSelector);
    this._userInfo = document.querySelector(this._userInfoSelector);
  }

  getUserInfo() {
    this._userData = {};
    this._userData.name = this._userName.textContent;
    this._userData.description = this._userInfo.textContent;
    return this._userData;
  }

  setUserInfo(data) {
    this._userName.textContent = data.name;
    this._userInfo.textContent = data.description;
  }
}
// он меняет имя и работу, передаешь 2 селектора вызываешь в индекс жс нужен для закрытия открытия попапа(загрузить инфо) и при сабмите(обновить инфо)
// (обратите внимание что тут не нужны сеттеры и геттеры,
//     надо сделать обычными методами):
// есть кнопка сохранить на которую вешается слушатель сабмит

// Аргумент - объект с двумя ключами { элементИнформацииОСебе, элементИмени }
// есть метод getUserInfo который возвращает текущие значения из разметки.
// то есть textContent свойство двух элементов в виде объекта
// setUserInfo - получает объект с ключами и устанавливает их в разметку
// (то есть делает наоборот в отличие от getUserInfo)

// Экземпляр класса UserInfo создается единожды.

// Создайте класс UserInfo
// Класс UserInfo отвечает за управление отображением информации о пользователе на странице. Этот класс:
// Принимает в конструктор объект с селекторами двух элементов: элемента имени пользователя и элемента информации о себе.
// Содержит публичный метод getUserInfo, который возвращает объект с данными пользователя.
// Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии.
// Содержит публичный метод setUserInfo, который принимает новые данные пользователя и добавляет их на страницу.
// вебинар славы 1:40 1:50
