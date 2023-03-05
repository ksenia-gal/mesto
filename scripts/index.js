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
const zoomPopup = document.querySelector('.popup_type_zoom');
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
likeButton.addEventListener('click', handleLikeButtonClick)
cardImage.addEventListener('click', openImage)
return newCard;
}

cards.forEach(function (card) {
  const cardElement = createCard(card);
elements.append(cardElement);
}); 

function openImage(evt) {
  const popupImage = zoomPopup.querySelector('.popup__image');
  popupImage.src = evt.target.src;
  const popupHeading = zoomPopup.querySelector('.popup__caption');
  popupHeading.textContent = evt.target.alt;
  zoomPopup.classList.add('popup_opened');
}

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


// const formPlace = addPopup.querySelector('.popup__container');
// formPlace.addEventListener("submit", handleFormPlaceSubmit);

// function handleFormPlaceSubmit(evt) {
//   evt.preventDefault();
//   const name = formPlace.querySelector('.popup__input-name').value;
//   const link = formPlace.querySelector('.popup__input-link').value;
//   const card = {name, link};
// createCard(card);
// closePopup(addPopup);
// };
  
// function handleFormPlaceSubmit (evt) {
//   evt.preventDefault(); 
  
//   console.log(typeof document.querySelector("popup__input-full-name").value);
//   console.log(typeof document.querySelector(".popup__input-additional-information").value);
//   // Получите значение полей jobInput и nameInput из свойства value
  
//   // Выберите элементы, куда должны быть вставлены значения полей
//   nameInput.value = profileName.textContent;
//   additionalInfoInput.value = profileAdditionalInfo.textContent;
//   // Вставьте новые значения с помощью textContent
// }

// formElement.addEventListener('submit', handleFormSubmit); 


//4. Лайк карточки
function handleLikeButtonClick (evt) {
  evt.target.classList.toggle('element__like-button_active');
}; 
// 5. Удаление карточки
function handleDeleteButtonClick(evt) {
  const button = evt.target;
  const element = button.closest('.element');
  element.remove();
}

//6. Открытие попапа с картинкой
const zoomPopupCloseButton = zoomPopup.querySelector('.popup__close-button');

zoomPopupCloseButton.addEventListener('click', function () {
  closePopup(zoomPopup);
});
