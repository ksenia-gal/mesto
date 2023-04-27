import { Popup } from "../components/Popup.js";
export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupHeading = this._popupSelector.querySelector('.popup__caption');
    this._popupImage = this._popupSelector.querySelector('.popup__image');
  }
  open = (item) => {
    super.open();
    this._popupImage.src = item.link;
    this._popupImage.alt = item.name;
    this._popupHeading.textContent = item.name;
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> 48b236143c9efd00a0338258aa7319651af996ae
