export default class Card {
  constructor(
    cardObject,
    cardTemplateSelector,
    handleImageClick,
    userId,
    addLike,
    dislike,
    handleDeleteButtonClick
  ) {
    this._cardTemplateSelector = cardTemplateSelector;
    this._handleImageClick = handleImageClick;
    this._userId = userId;
    this._addLike = addLike;
    this._dislike = dislike;
    this._handleDeleteButtonClick = handleDeleteButtonClick;
    this._likes = cardObject.likes;
    this._id = cardObject._id;
    this._name = cardObject.name;
    this._link = cardObject.link;
    this._ownerId = cardObject.owner._id;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardTemplateSelector)
      .content.querySelector(".element")
      .cloneNode(true);
    return cardElement;
  }

  addLike() {
    this._likeButton.classList.add("element__like-button_active");
  }

  dislike() {
    this._likeButton.classList.remove("element__like-button_active");
  }

  _likedCard() {
    this._likes.forEach((elementId) => {
      if (elementId._id === this._userId) {
        this.addLike();
      } else {
        this.dislike();
      }
    });
  }

  countLikes(res) {
    this._likesCount.textContent = `${res.likes.length}`;
  }

  remove() {
    this._element.remove();
  }

  generateCard = () => {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector(".element__image");
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._likeButton = this._element.querySelector(".element__like-button");
    this._likesCount = this._element.querySelector(".element__count-like");
    this._likesCount.textContent = this._likes.length;
    this._deleteButton = this._element.querySelector(".element__delete-button");
    // отображение иконки удаления только на созданных мной карточках
    if (this._ownerId !== this._userId) {
      this._deleteButton.remove();
    }
    this._element.querySelector(".element__title").textContent = this._name;
    this._setEventListeners();
    this._likedCard();
    return this._element;
  };

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      if (this._likeButton.classList.contains("element__like-button_active")) {
        this._dislike();
      } else {
        this._addLike();
      }
    });
    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteButtonClick(this._id);
    });
    this._cardImage.addEventListener("click", () => {
      this._handleImageClick(this._name, this._link);
    });
  }
}
