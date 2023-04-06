import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

buttonEditProfile.addEventListener("click", function () {
  const formValidatorEditPopup = new FormValidator(config, editPopup);
  formValidatorEditPopup.enableValidation();
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

function createCard(item) {
  const card = new Card(item, "#cardTemplate", handleImageClick);
  const cardElement = card.generateCard();
  return cardElement;
}

cards.forEach((item) => {
  const cardElement = createCard(item);
  document.querySelector(".elements").append(cardElement);
});

function handleImageClick(link, name) {
  popupImage.src = link;
  popupImage.alt = name;
  popupHeading.textContent = name;
  openPopup(popupZoom);
}

function popupCloseByEsc(evt) {
  if (evt.key === "Escape") {
    const popupOpened = document.querySelector(".popup_opened");
    closePopup(popupOpened);
  }
}

document.querySelectorAll(".popup__overlay").forEach((item) => {
  item.addEventListener("click", (evt) => {
    if (evt.target === evt.currentTarget) {
      const popupOpened = document.querySelector(".popup_opened");
      closePopup(popupOpened);
    }
  });
});

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", popupCloseByEsc);
}

buttonAddProfile.addEventListener("click", function () {
  const formValidatorAddPopup = new FormValidator(config, popupAdd);
  formValidatorAddPopup.enableValidation();
  formPlace.reset();
  openPopup(popupAdd);
});

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", popupCloseByEsc);
}

buttonClosePopupAdd.addEventListener("click", function () {
  closePopup(popupAdd);
});

formPlace.addEventListener("submit", handleFormPlaceSubmit);

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

buttonClosePopupZoom.addEventListener("click", function () {
  closePopup(popupZoom);
});
