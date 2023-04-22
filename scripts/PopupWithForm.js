import { Popup } from "./Popup.js";

// наследуется от Popup, вызывает его конструктор, в который передает нужный параметр.
// При этом принимает еще и второй параметр - колбэк сабмита формы.
export class PopupWithForm extends Popup {
  constructor( {popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._formElement = document.querySelector(".popup__container");
    this._inputList = this._formElement.querySelectorAll(".popup__input");
    this._handleFormSubmit = handleFormSubmit;
  }

// будет метод getinputvalues кот будет брать зн-я с инпутов - соберешь инф-ю по полям(что пользователь 
// ввел) и запихнешь эти значения в сабмит
  _getInpuValues() {
    this._formValues = {};
    this._inputList.forEach(input => 
        this._formValues[input.id] = input.value);
    return this._formValues;
  }

  // seteventlisteners будет другой - повесить до слушатеь - сабмит на кнопку
  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", () => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
    });
  }

  // close будет другой (исп-я super; при закрытии нужно сбрасывать форму)
  close() {
    super.close();
    this._formElement.reset();
  }
}

// Создаем два экземпляра этого класса, в каждый передаем свой коллебек (помимо селектора попапа).
//  В одном случае форма редактирует данные пользователя на странице, во втором - добавляет новую карточку.
//  В качестве идеи - попробуйте совместить функцию коллбека при сабмите формы
//  добавления карточки с аргументом renderer у класса Section