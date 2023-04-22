import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { Section } from "./Section.js";
import { PopupWithImage } from "./PopupWithImage.js";
// import { PopupWithForm } from "./PopupWithForm.js";
// import { UserInfo } from "./UserInfo.js";
// Обратить внимание:

// в основном файле не должно быть больше логики, кроме создания экземпляров и вызова их публичных методов,
// а также обработчиков на кнопках, которые открывают попапы через публичные методы
// все файлы с классами поместите в отдельную папку src/components

// 5
// const userInfo = new UserInfo({userNameSelector, userInformationSelector}, {
//   userNameSelector: profileName,
//   userInformationSelector: profileAdditionalInfo
// });
// 0
// class formValidation
const formValidatorEditPopup = new FormValidator(config, editPopup);
const formValidatorAddPopup = new FormValidator(config, popupAdd);
formValidatorEditPopup.enableValidation();
formValidatorAddPopup.enableValidation();

// 3
// // class PopupWithForm #1
// const popupEditProfile = new PopupWithForm({editPopup,
// handleFormSubmit: (data) => {
//     userInfo.setUserInfo(data)
//   }
// });
// popupEditProfile.setEventListeners();

// 3
// // class PopupWithForm #2
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

// кнопка закрытия попапа профиля по крестику
// buttonClosePopupProfile.addEventListener("click", function () {
//   closePopup(editPopup);
// });

// ф-я сабмита попапа профиля
// function handleFormProfileSubmit(evt) {
//   evt.preventDefault();
//   profileName.textContent = nameInput.value;
//   profileAdditionalInfo.textContent = jobInput.value;
//   closePopup(editPopup);
// }

// // слушатель попапа профиля
// profileForm.addEventListener("submit", handleFormProfileSubmit);

1;
// class section
const section = new Section(
  { items: cards, renderer: renderCard },
  ".elements"
);
section.renderItems();

//
function renderCard(item) {
  const cardElement = createCard(item);
  section.addItem(cardElement);
}

6;
// ф-я создания карточки
function createCard(item) {
  const card = new Card(item, "#cardTemplate", {
    handleImageClick: () => {
      popupZoom.open(item);
    },
  });
  const newCard = card.generateCard();
  return newCard;
}

// 4
const popupZoom = new PopupWithImage(".popup_type_zoom");
popupZoom.setEventListeners();
6;
// ф-я открытия попапа зум по нажатию на картинку
// function handleImageClick(cardData) {
//   popupZoom.open(cardData);
// }
// function popupCloseByEsc(evt) {
//   if (evt.key === "Escape") {
//     const popupOpened = document.querySelector(".popup_opened");
//     closePopup(popupOpened);
//   }
// }

// закрытие попапа по оверлею
// document.querySelectorAll(".popup__overlay").forEach((item) => {
//   item.addEventListener("click", (evt) => {
//     if (evt.target === evt.currentTarget) {
//       const popupOpened = document.querySelector(".popup_opened");
//       close(popupOpened);
//     }
//   });
// });

// function openPopup(popup) {
//   popup.classList.add("popup_opened");
//   document.addEventListener("keydown", popupCloseByEsc);
// }

// слушатель кнопки открытия попапа крестиком
buttonAddProfile.addEventListener("click", function () {
  open(popupAdd);
  formValidatorAddPopup.resetValidation();
});

// function closePopup(popup) {
//   popup.classList.remove("popup_opened");
//   document.removeEventListener("keydown", popupCloseByEsc);
// }

// закрытие попапа добавления карточки крестиком
// buttonClosePopupAdd.addEventListener("click", function () {
//   closePopup(popupAdd);
// });

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

// ф-я закрытия попапа зум крестиком
// buttonClosePopupZoom.addEventListener("click", function () {
//   close(popupZoom);
// });
