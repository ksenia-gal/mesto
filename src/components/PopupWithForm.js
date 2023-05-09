import Popup from "../components/Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, callbackSubmit) {
    super(popupSelector);
    this._callbackSubmit = callbackSubmit;
    this._form = this._popupElement.querySelector(".popup__container");
    this._inputs = [...this._form.querySelectorAll(".popup__input")];
  }

  setEventListeners() {
    this._form.addEventListener("submit", (event) => {
      event.preventDefault();
      const buttonTextReplacement = event.submitter.textContent;
      event.submitter.textContent = "Сохранение...";
      this._callbackSubmit(this._getInputValues())
        .then(() => this.close())
        .finally(() => {
          event.submitter.textContent = buttonTextReplacement;
        });
    });
  }
  _getInputValues() {
    const values = {};
    this._inputs.forEach((input) => {
      values[input.name] = input.value;
    });
    return values;
  }

  setInputValue(data) {
    this._inputs.forEach((input) => {
      input.value = data[input.name];
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}
