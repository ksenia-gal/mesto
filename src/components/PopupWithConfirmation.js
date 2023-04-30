import { Popup } from "./Popup.js";
export class PopupWithConfirmation extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._buttonConfirm = this._popupElement.querySelector('.popup__submit_confirm');
    }

    setSubmitConfirmation(submitConfirmation) {
        this._handleSubmitConfirmation = submitConfirmation;
    }
    setEventListeners() {
        super.setEventListeners();
        this._buttonConfirm.addEventListeners('submit', 
            this._handleSubmitConfirmation()
        )
    }
}