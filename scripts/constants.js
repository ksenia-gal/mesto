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

const popup = document.querySelector(".popup");
const editPopup = document.querySelector(".popup_type_edit");
const form = editPopup.querySelector(".popup__container");
const nameInput = document.querySelector(".popup__input_name");
const jobInput = document.querySelector(".popup__input_information");
const profileName = document.querySelector(".profile__title");
const profileAdditionalInfo = document.querySelector(".profile__subtitle");
const popupAdd = document.querySelector(".popup_type_add");
const popupZoom = document.querySelector(".popup_type_zoom");
const buttonEditProfile = document.querySelector(".profile__edit-button");
const inputFullName = document.querySelector(".popup__input_name");
const inputAdditionalInfo = document.querySelector(".popup__input_information");
const elements = document.querySelector(".elements");
const popupImage = popupZoom.querySelector(".popup__image");
const popupHeading = popupZoom.querySelector(".popup__caption");
const buttonAddProfile = document.querySelector(".profile__add-button");
const formPlace = popupAdd.querySelector(".popup__container");
const formInputPlaceName = formPlace.querySelector(".popup__input_place-name");
const formInputPlaceLink = formPlace.querySelector(".popup__input_image");
const buttonClosePopupProfile = editPopup.querySelector(".popup__close-button");
const buttonClosePopupAdd = popupAdd.querySelector(".popup__close-button");
const buttonClosePopupZoom = popupZoom.querySelector(".popup__close-button");
const buttonSubmitPlace = popupAdd.querySelector(".popup__submit_create");
const buttonSubmitEdit = editPopup.querySelector(".popup__submit_save");
const config = {
  formSelector: ".popup__container",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit",
  inactiveButtonClass: "popup__submit_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
};
