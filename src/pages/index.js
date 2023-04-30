import "./index.css";
import {
  cards,
  config,
  editPopup,
  popupAdd,
  buttonEditProfile,
  buttonAddProfile,
  nameInput,
  jobInput
} from "../utils/constants.js";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { PopupWithConfirmation } from "../components/PopupWithConfirmation.js";


const userInfo = new UserInfo({
  userNameSelector: ".profile__title",
  userInfoSelector: ".profile__subtitle",
});

const formValidatorEditPopup = new FormValidator(config, editPopup);
const formValidatorAddPopup = new FormValidator(config, popupAdd);
formValidatorEditPopup.enableValidation();
formValidatorAddPopup.enableValidation();

const section = new Section(
  { items: cards, renderer: renderCard },
  ".elements"
);
section.renderItems();

function renderCard(item) {
  const cardElement = createCard(item);
  section.addItem(cardElement);
}

function createCard(item) {
  const card = new Card(item, "#cardTemplate", {
    handleImageClick: () => {
      popupZoom.open(item);
    }, handleDeleteButtonClick
  });
  const newCard = card.generateCard();
  return newCard;
}

buttonAddProfile.addEventListener("click", () => {
  popupAddCard.open();
  formValidatorAddPopup.resetValidation();
});

function handleFormPlaceSubmit(item) {
 renderCard({name: item.description, link: item.image});
  popupAddCard.close();
}

const popupAddCard = new PopupWithForm(
  ".popup_type_add",
  handleFormPlaceSubmit
);
popupAddCard.setEventListeners();

function submitEditProfileForm(value) {
  userInfo.setUserInfo(value.nameInput, value.jobInput);
  popupEditProfile.close();
}

// создание экземпляра класса PopupWithConfirmation
const popupConfirmation = new PopupWithConfirmation('.popup_type_confirmation');
popupConfirmation.setEventListeners();

// ф-я открытия PopupWithConfirmation
 function handleDeleteButtonClick () {
  popupConfirmation.setSubmitConfirmation();
  popupConfirmation.open();
 }

function openEditProfile() {
  const { userNameElement, userInfoElement } = userInfo.getUserInfo();
  nameInput.value = userNameElement;
  jobInput.value = userInfoElement;
  popupEditProfile.open();
  formValidatorEditPopup.resetValidation();
}

const popupEditProfile = new PopupWithForm(".popup_type_edit", submitEditProfileForm);
popupEditProfile.setEventListeners();
buttonEditProfile.addEventListener("click", () => openEditProfile());

const popupZoom = new PopupWithImage(".popup_type_zoom");
popupZoom.setEventListeners();
