import {Card} from './Card.js';
buttonEditProfile.addEventListener("click", function () {
  disableButton(buttonSubmitEdit, config);
  openPopup(editPopup);
});

buttonClosePopupProfile.addEventListener("click", function () {
  closePopup(editPopup);
});

const fullName = "Жак-Ив Кусто";
const additionalInfo = "Исследователь океана";
inputFullName.value = fullName;
inputAdditionalInfo.value = additionalInfo;

function handleFormProfileSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAdditionalInfo.textContent = jobInput.value;
  closePopup(popup);
}

form.addEventListener("submit", handleFormProfileSubmit);

// ф-я создания карточки + навешивание слушателей @@@@@@


// ф-я добавления карточек в разметку @@@@@@
// cards.forEach((item) => {
//   const card = new Card(item, "#cardTemplate");
//   const cardElement = card.generateCard();
//   document.querySelector('.elements').append(cardElement);
// });
cards.forEach((item) => {
  const card = new Card(item, '#cardTemplate', handleImageClick);
  const cardElement = card.generateCard();
  document.querySelector('.elements').append(cardElement);
});

// ф-я откарытия карточки зум @@@@@@
// function openImage(card) {
//   popupImage.src = card.link;
//   popupImage.alt = card.name;
//   popupHeading.textContent = card.name;
//   openPopup(popupZoom);
// }
function handleImageClick(link, name) {
  popupImage.src = link;
  popupImage.alt = name;
  popupHeading.textContent = name;
  openPopup(popupZoom);
}
// ф-я закрытия кнопкой esc
function popupCloseByEsc(evt) {
  if (evt.key === "Escape") {
    const popupOpened = document.querySelector(".popup_opened");
    closePopup(popupOpened);
  }
}

// overlay
document.querySelectorAll(".popup__overlay").forEach((item) => {
  item.addEventListener("click", (evt) => {
    if (evt.target === evt.currentTarget) {
      const popupOpened = document.querySelector(".popup_opened");
      closePopup(popupOpened);
    }
  });
});

//  общая ф-я открыти попапов
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", popupCloseByEsc);
}

// ф-я открытия попапа Add
buttonAddProfile.addEventListener("click", function () {
  disableButton(buttonSubmitPlace, config);
  formPlace.reset();
  openPopup(popupAdd);
});

// общая ф-я закрытия попапов
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", popupCloseByEsc);
}

// ф-я закрытия попапа Add
buttonClosePopupAdd.addEventListener("click", function () {
  closePopup(popupAdd);
});

formPlace.addEventListener("submit", handleFormPlaceSubmit);

// submit формы place + добавление новой картинки в начало галереи 
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
// ф-я лайка @@@@@@
// function handleLikeButtonClick(evt) {
//   evt.target.classList.toggle("element__like-button_active");
// }
// ф-я удаления карточки @@@@@@
// function handleDeleteButtonClick(evt) {
//   const button = evt.target;
//   const element = button.closest(".element");
//   element.remove();
// }
// ф-я закрытия попапа зум
buttonClosePopupZoom.addEventListener("click", function () {
  closePopup(popupZoom);
});