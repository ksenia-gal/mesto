// 4ПР

const editPopup = document.querySelector('.popup_type_edit');
const editProfileButton = document.querySelector('.profile__edit-button');
const editProfileCloseButton = editPopup.querySelector('.popup__close-button');
editProfileButton.addEventListener("click", function () {
  openPopup(editPopup);
});

editProfileCloseButton.addEventListener('click', function () {
  closePopup(editPopup);
});

const fullName = "Жак-Ив Кусто";
const additionalInfo = "Исследователь океана";
const profileName = document.querySelector('.profile__title');
const profileAdditionalInfo = document.querySelector('.profile__subtitle');
const fullNameInput = document.querySelector('.popup__input-full-name');
fullNameInput.value = fullName;
const AdditionalInfoInput = document.querySelector('.popup__input-additional-information');
AdditionalInfoInput.value = additionalInfo;
 
const formElement = editPopup.querySelector('.popup__container');
const nameInput = document.querySelector('.popup__input-full-name');
const jobInput = document.querySelector('.popup__input-additional-information');

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAdditionalInfo.textContent = jobInput.value;
  closePopup(popup);
}
 
formElement.addEventListener("submit", handleFormSubmit);

//1. Шесть карточек «из коробки»
const cards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
    alt: 'Фотография гор',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
    alt: 'Фотография зимней реки',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
    alt: 'Фотография панельного дома',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
    alt: 'Фотография природы Камчатки',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
    alt: 'Фотография железной дороги',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
    alt: 'Фотография природы Байкала',
  }
];

const elements = document.querySelector('.elements');

function createCard(card) {
const newCard = document.querySelector('#cardTemplate').content.cloneNode(true);
const cardHeading = newCard.querySelector('.element__title');
const deleteButton = newCard.querySelector(".element__delete-button");
const cardImage = newCard.querySelector('.element__image');
const likeButton = newCard.querySelector('.element__like-button');
cardHeading.textContent = card.name;
cardImage.setAttribute('src', card.link);
cardImage.setAttribute('alt', card.alt);
deleteButton.addEventListener('click', handleDeleteButtonClick)
likeButton.addEventListener('click', function (evt) {
  evt.target.classList.toggle('element__like-button_active');
}); 
return newCard;
}

cards.forEach(function (card) {
  const cardElement = createCard(card);
elements.append(cardElement);
}); 

//2. Форма добавления карточки
const popup = document.querySelector('.popup');
const addPopup = document.querySelector('.popup_type_add');
const addProfileButton = document.querySelector('.profile__add-button');
const addPopupCloseButton = addPopup.querySelector('.popup__close-button');
function openPopup(popup) {
  popup.classList.add('popup_opened');
}
addProfileButton.addEventListener('click', function () {
  openPopup(addPopup);
});

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}
 
addPopupCloseButton.addEventListener('click', function () {
  closePopup(addPopup);
});

// 3. Добавление карточки
//  ПРИДУМАТЬ КАК СОЗДАВАТЬ КАРТИНКИ С ТЕМИ ЖЕ СТИЛЯМИ
const formPlace = addPopup.querySelector('.popup__container');
formPlace.addEventListener('submit', handleFormPlaceSubmit);

function handleFormPlaceSubmit(evt) {
evt.preventDefault();
const formPlace = evt.target;
const placeLinkInput = formPlace.querySelector('.popup__input-link').value;
const placeNameInput = formPlace.querySelector('.popup__input-name').value;
const card = {
image: placeLinkInput,
heading: placeNameInput,
}
createCard(card);
}
//4. Лайк карточки
// 5. Удаление карточки
function handleDeleteButtonClick(evt) {
  const button = evt.target;
  const element = button.closest('.element');
  element.remove();
}











//6. Открытие попапа с картинкой
//7. Плавное открытие и закрытие попаповformPlace.addEventListener("submit", handleFormPlaceSubmit);
