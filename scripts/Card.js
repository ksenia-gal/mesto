// из задания:
// Создайте класс Card, который создаёт карточку с текстом и ссылкой на изображение:
// принимает в конструктор её данные и селектор её template-элемента;
// содержит приватные методы, которые работают с разметкой, устанавливают слушателей событий;
// содержит приватные методы для каждого обработчика;
// содержит один публичный метод, который возвращает полностью работоспособный и наполненный данными элемент карточки.
// Для каждой карточки создайте экземпляр класса Card.
export class Card {
  constructor(cards, cardTemplateSelector, _handleImageClick) {
    this._link = cards.link;
    this._name = cards.name;
    this._alt = cards.name;
    this._cardTemplateSelector = cardTemplateSelector;
    this._handleImageClick = _handleImageClick; //???
    this._element = undefined;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardTemplateSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    return cardElement;
  }

  _handleLikeButtonClick() {
    this._likeButton.classList.toggle("element__like-button_active");
  }

  _handleDeleteButtonClick() {
    this._element.remove();
  }

  _handleImageClick() {
    this._element.classList.add('popup_opened');
    // popupImage.src = card.link;
    // popupImage.alt = card.name;
    // popupHeading.textContent = card.name;
    // openPopup(popupZoom);
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._handleLikeButtonClick();
    });

    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteButtonClick;
    });
    // открытие карточки по клику на нее
    this.cardImage.addEventListener('click', () => {
      this._handleImageClick;
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector(".element__image");
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector(".element__title").textContent = this._name;
    this._likeButton = this._element.querySelector(".element__like-button");
    this._deleteButton = this._element.querySelector(".element__delete-button");

    this._setEventListener();

    return this._element;
  }
}


