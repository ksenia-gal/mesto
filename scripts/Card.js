export class Card {
  constructor(cards, cardTemplateSelector, handleImageClick) {
    this._link = cards.link;
    this._name = cards.name;
    this._alt = cards.name;
    this._cardTemplateSelector = cardTemplateSelector;
    this._handleImageClick = handleImageClick;
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

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._handleLikeButtonClick();
    });

    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteButtonClick();
    });

    this._cardImage.addEventListener("click", () => {
      this._handleImageClick(this._link, this._name);
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

    this._setEventListeners();
    return this._element;
  }
}
