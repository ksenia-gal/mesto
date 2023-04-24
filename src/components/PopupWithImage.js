import { Popup } from "../../src/components/Popup.js";
export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupHeading = this._popupSelector.querySelector('.popup__caption');
    this._popupImage = this._popupSelector.querySelector('.popup__image');
  }
  open = (item) => {
    super.open();
    // здесь мы еще дополняем, что мы вставляем в картинку линк и вописание нейм
    this._popupImage.src = item.link;
    this._popupImage.alt = item.name;
    this._popupHeading.textContent = item.name;
  }
}

// наследуется от Popup, вызывает его конструктор,
// в который передает нужный параметр - смотреть в сторону super.
// используя логику полиморфизма надо перезаписать метод open,
// сначала сделать в нем то что описано в ТЗ,
// а потом вызвать метод родительского класса чтобы открыть попап

// Создайте класс PopupWithImage
// Создайте класс PopupWithImage, который наследует от Popup.
// Этот класс должен перезаписывать родительский метод open.
// В методе open класса PopupWithImage нужно вставлять в попап картинку
// с src изображения и подписью к картинке.
