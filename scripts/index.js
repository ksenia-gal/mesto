const editPopup = document.querySelector(".popup_type_edit");
const buttonEditProfile = document.querySelector(".profile__edit-button");
const buttonClosePopupProfile = editPopup.querySelector(".popup__close-button");

buttonEditProfile.addEventListener("click", function () {
  openPopup(editPopup);
});

buttonClosePopupProfile.addEventListener("click", function () {
  closePopup(editPopup);
});

const fullName = "Жак-Ив Кусто";
const additionalInfo = "Исследователь океана";
const profileName = document.querySelector(".profile__title");
const profileAdditionalInfo = document.querySelector(".profile__subtitle");
const inputFullName = document.querySelector(".popup__input-full-name");
inputFullName.value = fullName;
const inputAdditionalInfo = document.querySelector(
  ".popup__input-additional-information"
);
inputAdditionalInfo.value = additionalInfo;

const formElement = editPopup.querySelector(".popup__container");
const nameInput = document.querySelector(".popup__input-full-name");
const jobInput = document.querySelector(".popup__input-additional-information");

function handleFormProfileSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAdditionalInfo.textContent = jobInput.value;
  closePopup(popup);
}

formElement.addEventListener("submit", handleFormProfileSubmit);

const cards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    alt: "Фотография гор",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    alt: "Фотография зимней реки",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    alt: "Фотография панельного дома",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    alt: "Фотография природы Камчатки",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    alt: "Фотография железной дороги",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    alt: "Фотография природы Байкала",
  },
];

const elements = document.querySelector(".elements");
const popupZoom = document.querySelector(".popup_type_zoom");
function createCard(card) {
  const newCard = document
    .querySelector("#cardTemplate")
    .content.querySelector(".element").cloneNode(true);
  const cardHeading = newCard.querySelector(".element__title");
  const deleteButton = newCard.querySelector(".element__delete-button");
  const cardImage = newCard.querySelector(".element__image");
  const likeButton = newCard.querySelector(".element__like-button");
  cardHeading.textContent = card.name;
  cardImage.setAttribute("src", card.link);
  cardImage.setAttribute("alt", card.alt);
  deleteButton.addEventListener("click", handleDeleteButtonClick);
  likeButton.addEventListener("click", handleLikeButtonClick);
  cardImage.addEventListener("click", openImage);
  return newCard;
}

cards.forEach(function (card) {
  const cardElement = createCard(card);
  elements.append(cardElement);
});
const popupImage = popupZoom.querySelector(".popup__image");
const popupHeading = popupZoom.querySelector(".popup__caption");

function openImage(evt) {
  popupImage.src = evt.target.src;
  popupHeading.textContent = evt.target.alt;
  openPopup(popupZoom);
}

const popup = document.querySelector(".popup");
const popupAdd = document.querySelector(".popup_type_add");
const buttonAddProfile = document.querySelector(".profile__add-button");
const buttonClosePopupAdd = popupAdd.querySelector(".popup__close-button");

function openPopup(popup) {
  popup.classList.add("popup_opened");
}
buttonAddProfile.addEventListener("click", function () {
  openPopup(popupAdd);
});

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

buttonClosePopupAdd.addEventListener("click", function () {
  closePopup(popupAdd);
});

const formPlace = popupAdd.querySelector(".popup__container");
formPlace.addEventListener("submit", handleFormPlaceSubmit);
const formInputPlaceName = formPlace.querySelector(".popup__input-name");
const formInputPlaceLink = formPlace.querySelector(".popup__input-link");

function handleFormPlaceSubmit(evt) {
  evt.preventDefault();
  const placeName = formInputPlaceName.value;
  const placeLink = formInputPlaceLink.value;
  const addCard = {
    name: placeName,
    link: placeLink,
  };
  elements.prepend(createCard(addCard));
  closePopup(popupAdd);
  formPlace.reset();
}

function handleLikeButtonClick(evt) {
  evt.target.classList.toggle("element__like-button_active");
}

function handleDeleteButtonClick(evt) {
  const button = evt.target;
  const element = button.closest(".element");
  element.remove();
}

const buttonClosePopupZoom = popupZoom.querySelector(".popup__close-button");
buttonClosePopupZoom.addEventListener("click", function () {
  closePopup(popupZoom);
});
