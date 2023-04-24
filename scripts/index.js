import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { Section } from "./Section.js";
import { PopupWithImage } from "./PopupWithImage.js";
import { PopupWithForm } from "./PopupWithForm.js";
import { UserInfo } from "./UserInfo.js";

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

//передача текста на страницу профиля редактирования полей Имя, О себе
function formValues(value) {
  userInfo.setUserInfo(value.nameInput, value.jobInput);
  popupEditProfile.close();
}

//функция открытия попапа редактирования профиля
function openEditProfile() {
  const { userNameElement, userInfoElement } = userInfo.getUserInfo();
  nameInput.value = userNameElement;
  jobInput.value = userInfoElement;
  popupEditProfile.open();
  formValidatorEditPopup.resetValidation();
  /*formEditValidator.disableSubmitButton()*/
  /*classEditPopup.open()*/
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

// слушатель кнопки открытия попапа добавления карточки
buttonAddProfile.addEventListener("click", () => {
  popupAddCard.open();
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
  popupAddCard.close();
}

// Обратить внимание:

// в основном файле не должно быть больше логики, кроме создания экземпляров и вызова их публичных методов,
// а также обработчиков на кнопках, которые открывают попапы через публичные методы
// все файлы с классами поместите в отдельную папку src/components
