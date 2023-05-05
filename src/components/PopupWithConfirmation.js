import Popup from "./Popup.js"

export default class PopupConfirmation extends Popup {
  constructor(popup, handleSubmit) {
    super(popup)
    this._handleSubmit = handleSubmit
    this._popupForm = this._popup.querySelector(".popup__container")
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault()
      this._handleSubmit(this._card)
    })
  }

  open(card) {
    this._card = card
    super.open()
  }
}

// import { Popup } from "./Popup.js";
// export class PopupWithConfirmation extends Popup {
//     constructor(popupSelector) {
//         super(popupSelector);
//         this._buttonConfirm = this._popupElement.querySelector('.popup__submit_confirm');
//     }

//     setSubmitConfirmation(submitConfirmation) {
//         this._handleSubmitConfirmation = submitConfirmation;
//     }
//     setEventListeners() {
//         super.setEventListeners();
//         this._buttonConfirm.addEventListeners('submit', (evt) => {
//             evt.preventDefault();
//             this._handleSubmitConfirmation()
//     });
//     }
// }