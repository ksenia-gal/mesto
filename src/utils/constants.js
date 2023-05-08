//кнопки открытия попапов
const profileUpdateAvatar = document.querySelector(".profile__avatar-button")
const profileAddButton = document.querySelector(".profile__add-button")
const profileEditButton = document.querySelector(".profile__edit-button")

//константы профиля
const nameProfile = document.querySelector(".profile__title")
const aboutProfile = document.querySelector(".profile__subtitle")
const avatarProfile = document.querySelector(".profile__avatar")

//находим форму редактирования по ее name
const formEditProfile = document.forms.profileForm

//находим форму создания карточек по ее name
const formAddProfile = document.forms.placeForm

//находим форму обновления аватара по ее name
const formUpdateAvatar = document.forms.avatarForm

export {
  profileAddButton,
  profileEditButton,
  formEditProfile,
  formAddProfile,
  formUpdateAvatar,
  profileUpdateAvatar,
  nameProfile,
  aboutProfile,
  avatarProfile,
  popupAddCard,
  popupZoom,
  avatarPopup,
  editPopup,
  popupWithConfirmation
  
}


const editPopup = ".popup_type_edit"
const popupAddCard = ".popup_type_add"
const popupZoom = ".popup_type_zoom"
const avatarPopup = ".popup_type_new-avatar"
const popupWithConfirmation = ".popup_type_confirmation"
// const nameInput = document.querySelector(".popup__input_name")
// const jobInput = document.querySelector(".popup__input_information")

// const buttonEditProfile = ".profile__edit-button"
// const buttonEditAvatar = ".profile__avatar-button"
// const elements = document.querySelector(".elements")
// const buttonAddProfile = ".profile__add-button"
// const placeForm = document.forms["place-form"]
// const formInputPlaceName = placeForm.querySelector(".popup__input_place-name")
// const formInputPlaceLink = placeForm.querySelector(".popup__input_image")

// const config = {
//   formSelector: ".popup__container",
//   inputSelector: ".popup__input",
//   submitButtonSelector: ".popup__submit",
//   inactiveButtonClass: "popup__submit_disabled",
//   inputErrorClass: "popup__input_type_error",
//   errorClass: "popup__input-error_active",
// }

// export { cards, config, editPopup, popupAdd, buttonEditProfile, placeForm, buttonAddProfile, nameInput, jobInput, buttonEditAvatar, avatarPopup}