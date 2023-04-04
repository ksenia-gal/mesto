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
function createCard(item) { 
  const card = new Card(item, '#cardTemplate', handleImageClick);
  const cardElement = card.generateCard();
  return cardElement; 

} 

// ф-я добавления карточек в разметку @@@@@@
cards.forEach((item) => {
  const cardElement = createCard(item);
  document.querySelector('.elements').append(cardElement);
});

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

//  общая ф-я открыти попапов
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

// ф-я закрытия попапа зум
buttonClosePopupZoom.addEventListener("click", function () {
  closePopup(popupZoom);
});
