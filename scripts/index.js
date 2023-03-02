const editPopup = document.querySelector(".popup");
const editProfileButton = document.querySelector(".profile__edit-button");
editProfileButton.addEventListener("click", openPopup);
 
const closePopupButton = document.querySelector(".popup__close-button");
closePopupButton.addEventListener("click", closePopup);
 
function openPopup() {
  editPopup.classList.add("popup_opened");
}
 
function closePopup() {
  editPopup.classList.remove("popup_opened");
}

const fullName = "Жак-Ив Кусто";
const additionalInfo = "Исследователь океана";
 
const profileName = document.querySelector(".profile__title");
 
const profileAdditionalInfo = document.querySelector(".profile__subtitle");
 
const fullNameInput = document.querySelector(".popup__input-full-name");
fullNameInput.value = fullName;
const AdditionalInfoInput = document.querySelector(
  ".popup__input-additional-information"
);
AdditionalInfoInput.value = additionalInfo;
 
const formElement = document.querySelector(".popup__container");
const nameInput = document.querySelector(".popup__input-full-name");
const jobInput = document.querySelector(".popup__input-additional-information");
function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAdditionalInfo.textContent = jobInput.value;
  closePopup();
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
cardHeading.textContent = card.name;
const cardImage = newCard.querySelector('.element__image');
cardImage.setAttribute('src', card.link);
cardImage.setAttribute('alt', card.alt);
const deleteButton = newCard.querySelector(".element__delete-button");
deleteButton.addEventListener("click", handleDeleteButtonClick);

elements.append(newCard); 
return newCard;
}

cards.forEach(createCard) 


// 5. Удаление карточки
function handleDeleteButtonClick(evt) {
  const button = evt.target;
  const element = button.closest(".element");
  element.remove();
}

// 4ПР


//2. Форма добавления карточки
// const addProfileButton = document.querySelector(".profile__add-button");
// addProfileButton.addEventListener("click", openPopup);




// 3. Добавление карточки

// const formPlace = document.querySelector(".place__container");
// formPlace.addEventListener('submit', handleFormPlaceSubmit);

// function handleFormPlaceSubmit(evt) {
//   evt.preventDefault();
//   const formPlace = evt.target;
//   const placeLinkInput = formPlace.querySelector('.place__input-link').value;
//   const placeNameInput = formPlace.querySelector('.place__input-name').value;
//   const card = {
//     image: placeLinkInput,
//     heading: placeNameInput,
//   }
//   createCard(card);
// }


//4. Лайк карточки

// likeButton.forEach(like => {
//   like.addEventListener('click', () => {
//     like.classList.toggle('element__like-button_active');
//   })
// })
//6. Открытие попапа с картинкой
//7. Плавное открытие и закрытие попаповformPlace.addEventListener("submit", handleFormPlaceSubmit);
