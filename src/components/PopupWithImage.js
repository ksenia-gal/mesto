import { Popup } from "../../src/components/Popup.js";
export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupHeading = this._popupElement.querySelector(".popup__caption");
    this._popupImage = this._popupElement.querySelector(".popup__image");
  }
  open = (item) => {
    super.open();
    this._popupImage.src = item.link;
    this._popupImage.alt = item.name;
    this._popupHeading.textContent = item.name;
  };
}
