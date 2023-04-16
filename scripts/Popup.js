class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._buttonClosePopupProfile = buttonClosePopupProfile;
  }
  open() {
    this._popupSelector.classList.add("popup_opened");
    document.addEventListener("keydown", () => { 
      this._handleEscClose})
  };
  close() {
    this._popupSelector.classList.remove("popup_opened");
    document.removeEventListener("keydown", () => { 
      this._handleEscClose})
  };
  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      const popupOpened = this._popupSelector.querySelector(".popup_opened");
      close(popupOpened);
    }
  }
  setEventListeners(evt) {
    if (evt.target.classList.contains('popup__close-button')) {
      close()
    }
  };
}

// Аргумент: popupSelector
// popupSelector - селектор конкретного попапа
// должно быть 4 метода, описанных в ТЗ, исходя из принципа,
// что более общий класс должен описывать поведение всех попапов.
// А конкретизация каких-то методов должна происходить уже на уровне
// дочерних классов - PopupWithImage и PopupWithForm

// Класс Popup базовый, имеет двух наследников, которые создаются для каждого модального окна.

// Создайте класс Popup, который отвечает за открытие и закрытие попапа. Этот класс:
// Принимает в конструктор единственный параметр — селектор попапа.
// Содержит публичные методы open и close, которые отвечают за открытие и закрытие попапа.
// Содержит приватный метод _handleEscClose, который содержит логику закрытия попапа клавишей Esc.
// Содержит публичный метод setEventListeners, который добавляет слушатель клика иконке закрытия попапа.
// Модальное окно также закрывается при клике на затемнённую область вокруг формы.
