export default class Card {
  constructor(
    data,
    templateSelector,
    handleCardClick,
    userId,
    like,
    dislike,
    deleteCard
  ) {
    this._templateSelector = templateSelector
    this._handleCardClick = handleCardClick
    this._userId = userId
    this._like = like
    this._dislike = dislike
    this._deleteCard = deleteCard
    this._likes = data.likes
    this._id = data._id
    this._name = data.name
    this._link = data.link
    this._ownerId = data.owner._id
  }

  like() {
    this._likeButton.classList.add("element__like-button_active")
  }

  dislike() {
    this._likeButton.classList.remove("element__like-button_active")
  }

  _userLiked() {
    this._likes.forEach((elementId) => {
      if (elementId._id === this._userId) {
        this.like()
      } else {
        this.dislike()
      }
    })
  }

  likesCount(res) {
    this._likesCount.textContent = `${res.likes.length}`
  }

  remove() {
    this._cardElement.remove()
  }

  generateCard = () => {
    const template = document.querySelector(this._templateSelector)
    if (template) {
      const element = template.content.querySelector(".element")
      if (element) {
        this._cardElement = element.cloneNode(true)
      } else console.log("В классе Card не найден .element!")
    } else
      console.log("В классе Card не найден " + this._templateSelector + "!")

    this._likeButton = this._cardElement.querySelector(".element__like-button")

    // Устанавливаю счетчик для подсчета лайков
    this._likesCount = this._cardElement.querySelector(".element__count-like")
    this._likesCount.textContent = this._likes.length
    this._deleteButtonTrash = this._cardElement.querySelector(".element__delete-button")
    if (this._ownerId !== this._userId) {
      this._deleteButtonTrash.remove()
    }

    this._imageElementMask = this._cardElement.querySelector(".element__image")
    this._imageElementMask.src = this._link
    this._imageElementMask.alt = this._name
    this._cardElement.querySelector(".element__title").textContent = this._name

    this._setEventListeners()
    this._userLiked()

    return this._cardElement
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      if (this._likeButton.classList.contains("element__like-button_active")) {
        this._dislike()
      } else {
        this._like()
      }
    })
    this._deleteButtonTrash.addEventListener("click", () => {
      this._deleteCard(this._id)
    })
    this._imageElementMask.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link)
    })
  }
}

// export class Card {
//   constructor(cardObject, cardTemplateSelector, { handleImageClick, handleDeleteButtonClick, handleLikeButtonClick }, userId) {
//     this._link = cardObject.link;
//     this._name = cardObject.name;
//     this._alt = cardObject.name;
//     this._userId = userId;
//     this._cardId = cardObject._id;
//     this._authorId = cardObject.authorId;
//     this._likes = cardObject.likes;
//     this._cardTemplateSelector = cardTemplateSelector;
//     this._handleImageClick = handleImageClick;
//     this._handleDeleteButtonClick = handleDeleteButtonClick;
//     this._handleLikeButtonClick = handleLikeButtonClick;
//   }

//   _getTemplate() {
//     const cardElement = document
//       .querySelector(this._cardTemplateSelector)
//       .content.querySelector(".element")
//       .cloneNode(true);

//     return cardElement;
//   }

//   handleLikeButtonClick() {
//     this._likeButton.classList.toggle("element__like-button_active");
//   }

//   handleDeleteButtonClick() {
//     this._element.remove();
//     //this._element = null;
//   }

//   _likedCard() {
//     return this._likes.some(like => {
//       return like._id === this._userId;
//     });
//   }
// // Отображение количества лайков карточки; возможно лучше переместить в другое место
// countLikes(likes) {
//   this._likes = likes;
//   this._element.querySelector('.element__count-like').textContent = likes.length;
//   if (this._likedCard()) {
//     this._likeButton.classList.add('element__like-button_active');
//   } else {
//     this._likeButton.classList.remove('element__like-button_active');
//   }
// }
//   _setEventListeners() {
//     this._likeButton.addEventListener("click", () => {
//       this.handleLikeButtonClick();
//     }); //

//     this._deleteButton.addEventListener("click", () => {
//       this.handleDeleteButtonClick();
//     }); 

//     this._cardImage.addEventListener("click", () => {
//       this._handleImageClick();
//     });
//   }

//   generateCard() {
//     this._element = this._getTemplate();
//     this._cardImage = this._element.querySelector(".element__image");
//     this._cardImage.src = this._link;
//     this._cardImage.alt = this._name; //возможно нужно исправить
//     this._element.querySelector(".element__title").textContent = this._name;
//     this._likeButton = this._element.querySelector(".element__like-button");
//     this._deleteButton = this._element.querySelector(".element__delete-button");

//     // Сделайте так, чтобы иконка удаления была только на созданных вами карточках
//     if (this._userId !== this._authorId) {
//       this._deleteButton.remove();
//     }

//     this.countLikes(this._likes);

//     this._setEventListeners();
//     return this._element;
//   }
// }
