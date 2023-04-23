import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { Section } from "./Section.js";
import { PopupWithImage } from "./PopupWithImage.js";
import { PopupWithForm } from "./PopupWithForm.js";
import { UserInfo } from "./UserInfo.js";

const userInfo = new UserInfo({
  userNameSelector: ".profile__title",
  userInfoSelector: ".profile__subtitle",
})

// class FormValidation
const formValidatorEditPopup = new FormValidator(config, editPopup);
const formValidatorAddPopup = new FormValidator(config, popupAdd);
formValidatorEditPopup.enableValidation();
formValidatorAddPopup.enableValidation();

// class PopupWithForm #1
const popupEditProfile = new PopupWithForm('.popup_type_edit',
{handleFormSubmit: (item) => {
    userInfo.setUserInfo(item)
  }
});
popupEditProfile.setEventListeners();

// class PopupWithForm #2
// const addPopup = new PopupWithForm(popupAdd, {
//   handleFormPlaceSubmit: (data) => {
//     section.addItem(cardElement(data));
//   }
// });
// addPopup.setEventListeners();

// кнопка открытия попапа профиль
buttonEditProfile.addEventListener("click", () => {
  const currentUserInfo = userInfo.getUserInfo();
  nameInput.value = currentUserInfo.profileName;
  jobInput.value = currentUserInfo.profileAdditionalInfo;
  popupEditProfile.open();
  formValidatorEditPopup.resetValidation();
});

// class section
const section = new Section(
  { items: cards, renderer: renderCard },
  ".elements"
);
section.renderItems();

function renderCard(item) {
  const cardElement = createCard(item);
  section.addItem(cardElement);
}

// class Card
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

// слушатель кнопки открытия попапа добавления карточки
buttonAddProfile.addEventListener("click", function () {
  open(popupAdd);
  formValidatorAddPopup.resetValidation();
});

// слушатель сабмита попапа добавления карточки
placeForm.addEventListener("submit", handleFormPlaceSubmit);

// ф-я сабмита формы попапа добавления карточки
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
  closePopup(popupAdd);
}

// Обратить внимание:

// в основном файле не должно быть больше логики, кроме создания экземпляров и вызова их публичных методов,
// а также обработчиков на кнопках, которые открывают попапы через публичные методы
// все файлы с классами поместите в отдельную папку src/components
