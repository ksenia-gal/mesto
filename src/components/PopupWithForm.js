import { Popup } from "../../src/components/Popup.js";
export class PopupWithForm extends Popup {
  constructor(popupSelector, callbackSubmit) {
    super(popupSelector)
    this._callbackSubmit = callbackSubmit
    this._form = this._popupSelector.querySelector(".popup__container")
    this._inputs = this._popupSelector.querySelectorAll(".popup__input");
  }

  _getInputValues() {
    const values = {}
    this._inputs.forEach((input) => {
      values[input.name] = input.value
    })
    return values
  }

  close() {
    super.close()
    this._form.reset()
  }

  setEventListeners() {
    super.setEventListeners()
    this._form.addEventListener("submit", (event) => {
      event.preventDefault()
      this._callbackSubmit(this._getInputValues())
    })
  }
}