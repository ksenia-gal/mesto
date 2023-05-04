import { Popup } from "../../src/components/Popup.js";
export class PopupWithForm extends Popup {
  constructor(popupSelector, callbackSubmit) {
    super(popupSelector);
    this._callbackSubmit = callbackSubmit;
    this._form = this._popupElement.querySelector(".popup__container");
    this._inputs = this._popupElement.querySelectorAll(".popup__input");
    this._button = this._form.querySelector('.popup__submit');
    this._buttonText = this._button.textContent;
  }

  _getInputValues() {
    const values = {};
    this._inputs.forEach((input) => {
      values[input.name] = input.value;
    });
    return values;
  }

  close() {
    super.close();
    this._form.reset();
  }

  //При редактировании профиля уведомите пользователя о процессе загрузки, поменяв текст кнопки на: «Сохранение...», пока данные загружаются:
buttonTextReplacement(status) {
  if(status) {
    this._button.textContent = 'Сохранение...';
  } else {
    this._button.textContent = this._buttonText;
  }
}

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._callbackSubmit(this._getInputValues());
    });
  }
}
