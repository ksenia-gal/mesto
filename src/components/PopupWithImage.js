import Popup from "../components/Popup.js"

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
    this._popupImage = this._popupElement.querySelector(".popup__image")
    this._popupHeading = this._popupElement.querySelector(".popup__caption")
  }

  open(name, link) {
    this._popupHeading.textContent = name
    this._popupImage.alt = name
    this._popupImage.src = link

    super.open()
  }
}
// import { Popup } from "../../src/components/Popup.js";
// export class PopupWithImage extends Popup {
//   constructor(popupSelector) {
//     super(popupSelector);
//     this._popupHeading = this._popupElement.querySelector(".popup__caption");
//     this._popupImage = this._popupElement.querySelector(".popup__image");
//   }
//   open = (item) => {
//     super.open();
//     this._popupImage.src = item.link;
//     this._popupImage.alt = item.name;
//     this._popupHeading.textContent = item.name;
//   };
// }
