import { Card } from "../../src/components/Card.js";
import { FormValidator } from "../../src/components/FormValidator.js";
import { Section } from "../../src/components/Section.js";
import { PopupWithImage } from "../../src/components/PopupWithImage.js";
import { PopupWithForm } from "../../src/components/PopupWithForm.js";
import { UserInfo } from "../../src/components/UserInfo.js";

const userInfo = new UserInfo({
  userNameSelector: ".profile__title",
  userInfoSelector: ".profile__subtitle",
});

const formValidatorEditPopup = new FormValidator(config, editPopup);
const formValidatorAddPopup = new FormValidator(config, popupAdd);
formValidatorEditPopup.enableValidation();
formValidatorAddPopup.enableValidation();

const popupAddCard = new PopupWithForm(
  ".popup_type_add",
  handleFormPlaceSubmit
);
popupAddCard.setEventListeners();

function formValues(value) {
  userInfo.setUserInfo(value.nameInput, value.jobInput);
  popupEditProfile.close();
}

function openEditProfile() {
  const { userNameElement, userInfoElement } = userInfo.getUserInfo();
  nameInput.value = userNameElement;
  jobInput.value = userInfoElement;
  popupEditProfile.open();
  formValidatorEditPopup.resetValidation();
}

const popupEditProfile = new PopupWithForm(".popup_type_edit", formValues);
popupEditProfile.setEventListeners();
buttonEditProfile.addEventListener("click", () => openEditProfile());

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
    },
  });
  const newCard = card.generateCard();
  return newCard;
}

const popupZoom = new PopupWithImage(".popup_type_zoom");
popupZoom.setEventListeners();

buttonAddProfile.addEventListener("click", () => {
  popupAddCard.open();
  formValidatorAddPopup.resetValidation();
});

placeForm.addEventListener("submit", handleFormPlaceSubmit);

function handleFormPlaceSubmit(evt) {
  evt.preventDefault();
  const placeName = formInputPlaceName.value;
  const placeLink = formInputPlaceLink.value;
  const addCard = {
    name: placeName,
    link: placeLink,
  };
  elements.prepend(createCard(addCard));
  evt.target.reset();
  popupAddCard.close();
}
