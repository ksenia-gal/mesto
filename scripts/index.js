const editPopup = document.querySelector(".popup");
const editProfileButton = document.querySelector(".profile__edit-button");
editProfileButton.addEventListener("click", function () {
  editPopup.classList.add("popup_opened");
});
 
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
elements.append(newCard) }

cards.forEach(createCard) 