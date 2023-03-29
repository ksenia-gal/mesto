// как рефакторить? смотреть какие ф-ии есть и переносить их в методы, создаем класс, что запихнуть? 
// какие переменные создать? все остальное готово. нужно понимать что приватно что публично?
// почти все ф-ии вызываются внутри класса
// 1. класс валидейшн конструктор пустой смотрите какие есть ф-ии и пытаетесь понять что общего у всех валидаций и начинаете переносить в конструктор есть одна самая главная
// она переносится первой

// из задания:
// Создайте класс Card, который создаёт карточку с текстом и ссылкой на изображение:
// принимает в конструктор её данные и селектор её template-элемента;
// содержит приватные методы, которые работают с разметкой, устанавливают слушателей событий;
// содержит приватные методы для каждого обработчика;
// содержит один публичный метод, который возвращает полностью работоспособный и наполненный данными элемент карточки.
// Для каждой карточки создайте экземпляр класса Card.


class Card {
  constructor(cards, cardTemplateSelector, handleCardClick) {
    this._link = cards.link;
    this._name = cards.name;
    this._alt = cards.name;
    this._cardTemplateSelector = cardTemplateSelector;
    this._handleCardClick = handleCardClick;
    this._element = undefined;
  }
  _createCard() {
    const newCard = document
    .querySelector(this._cardTemplateSelector)
    .content.querySelector(".element")
    .cloneNode(true);
    
    return newCard;
  }

  _handleLikeButtonClick( {
    this.likeButton.classList.toggle("element__like-button_active");
  })

//   _handleCardLike( {
//     this.likeButton.classList.toggle('likeisactive')
//   })

_handleDeleteButtonClick( {
    this.const button = evt.target;
    const element = button.closest(".element");
    element.remove();
  }
  _handledeleteLike( {
    this.likeButton.classList.remove('likeisactive')
  })
// => functions only as they never have private context, it sees 'This' and goes up to class level and call the needed method
  _setEventListeners() {
    this.likeButton.addEventListener('click', () => {
        this._handleLikeButtonClick
    })

    this.deleteButton.addEventListener('clivk,' () => {
        this._handeDelete();

        this.cardpicture.addEventListener(click, ())
    })
  }

  generateCard () {
    this._element = this._getTemplate();
    this.cardPicture = this._element.querySelector('.photo-card_picture');
    this.cardPicture.src = this.link;
    this.cardPicture.alt = this._name;
    this._element.querySelector('.photo card description').textContent = this.name;
    this.likeButton = this._element.querySelector('.likebtn');
    this.deleteButton = this._element.querySelector('.deletebtn');

    this._setEventListener();
    
    return this._element;
  }

 
}

cards.forEach((card) => {
  const card = new Card(card, ".card", handleCardClick);
});

const cardItem = new Card(cards, ".card", handleCardClick);
