import Popup from "./Popup.js";
export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._handleSubmitConfirmation = handleSubmit;
    this._popupForm = this._popupElement.querySelector(".popup__container");
  }

  open(card) {
    this._card = card;
    super.open();
  }

  setEventListeners() {
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmitConfirmation(this._card);
    });
    super.setEventListeners();
  }
}
