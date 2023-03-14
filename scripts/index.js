const editPopup = document.querySelector(".popup_type_edit");
const buttonEditProfile = document.querySelector(".profile__edit-button");
const buttonClosePopupProfile = editPopup.querySelector(".popup__close-button");

buttonEditProfile.addEventListener("click", function () {
  openPopup(editPopup);
});

buttonClosePopupProfile.addEventListener("click", function () {
  closePopup(editPopup);
});

const fullName = "Жак-Ив Кусто";
const additionalInfo = "Исследователь океана";
const profileName = document.querySelector(".profile__title");
const profileAdditionalInfo = document.querySelector(".profile__subtitle");
const inputFullName = document.querySelector(".popup__input_name");
inputFullName.value = fullName;
const inputAdditionalInfo = document.querySelector(
  ".popup__input_information"
);
inputAdditionalInfo.value = additionalInfo;

const formElement = editPopup.querySelector(".popup__container");
const nameInput = document.querySelector(".popup__input_name");
const jobInput = document.querySelector(".popup__input_information");

function handleFormProfileSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAdditionalInfo.textContent = jobInput.value;
  closePopup(popup);
}

formElement.addEventListener("submit", handleFormProfileSubmit);

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

const elements = document.querySelector(".elements");
const popupZoom = document.querySelector(".popup_type_zoom");
function createCard(card) {
  const newCard = document
    .querySelector("#cardTemplate")
    .content.querySelector(".element").cloneNode(true);
  const cardHeading = newCard.querySelector(".element__title");
  const deleteButton = newCard.querySelector(".element__delete-button");
  const cardImage = newCard.querySelector(".element__image");
  const likeButton = newCard.querySelector(".element__like-button");
  cardHeading.textContent = card.name;
  cardImage.setAttribute("src", card.link);
  cardImage.setAttribute("alt", card.alt);
  deleteButton.addEventListener("click", handleDeleteButtonClick);
  likeButton.addEventListener("click", handleLikeButtonClick);
  cardImage.addEventListener("click", openImage);
  return newCard;
}

cards.forEach(function (card) {
  const cardElement = createCard(card);
  elements.append(cardElement);
});
const popupImage = popupZoom.querySelector(".popup__image");
const popupHeading = popupZoom.querySelector(".popup__caption");

function openImage(evt) {
  popupImage.src = evt.target.src;
  popupImage.alt = evt.target.alt;
  popupHeading.textContent = evt.target.closest("div").childNodes[5].childNodes[1].textContent;
  openPopup(popupZoom);
}

const popup = document.querySelector(".popup");
const popupAdd = document.querySelector(".popup_type_add");
const buttonAddProfile = document.querySelector(".profile__add-button");
const buttonClosePopupAdd = popupAdd.querySelector(".popup__close-button");

function openPopup(popup) {
  popup.classList.add("popup_opened");
}
buttonAddProfile.addEventListener("click", function () {
  openPopup(popupAdd);
});

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

buttonClosePopupAdd.addEventListener("click", function () {
  closePopup(popupAdd);
});

const formPlace = popupAdd.querySelector(".popup__container");
formPlace.addEventListener("submit", handleFormPlaceSubmit);
const formInputPlaceName = formPlace.querySelector(".popup__input_place-name");
const formInputPlaceLink = formPlace.querySelector(".popup__input_image");

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

function handleLikeButtonClick(evt) {
  evt.target.classList.toggle("element__like-button_active");
}

function handleDeleteButtonClick(evt) {
  const button = evt.target;
  const element = button.closest(".element");
  element.remove();
}

const buttonClosePopupZoom = popupZoom.querySelector(".popup__close-button");
buttonClosePopupZoom.addEventListener("click", function () {
  closePopup(popupZoom);
});

//1. Валидация формы «Редактировать профиль»
// const formElement = editPopup.querySelector(".popup__container");
const formInput = formElement.querySelector('.popup__input');
const formError = formElement.querySelector(`.${formInput.id}-error`);
// formElement.addEventListener('submit', function (evt) {
//   evt.preventDefault();
// });

// formInput.addEventListener('input', function (evt) {
//   console.log(evt.target.validity);
// });

// const formError = formElement.querySelector(`.${formInput.id}-error`);
// console.log(formInput.id);

// const showError = (input, errorMessage) => {
//   input.classList.add('form__input_type_error');
//   formError.textContent = errorMessage;
// formError.classList.add('form__input-error_active'); 
// };
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('form__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('form__input-error_active');
};

// const hideError = (input) => {
//   input.classList.remove('form__input_type_error');
//   formError.classList.remove('form__input-error_active');
//   formError.textContent = ' ';
// };
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('form__input_type_error');
  errorElement.classList.remove('form__input-error_active');
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
  return !inputElement.validity.valid;
}); 
}

function toggleButtonState(inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
  buttonElement.classList.add('button_inactive');
} else {
  buttonElement.classList.remove('button_inactive');
} 
}
form.addEventListener('submit', function (evt) {
  evt.preventDefault();
});

formInput.addEventListener('input', function () {
  checkInputValidity();
});

function setEventListeners(formElement) {
  const inputList = Array.from(formElement.querySelectorAll('.form__input'));
  inputList.forEach((inputElement) => {
  inputElement.addEventListener('input', function () {
    checkInputValidity(formElement, inputElement);
  });
});
}
setEventListeners(form);

function enableValidation() {
  const formList = Array.from(document.querySelectorAll('.form'));
  formList.forEach((formElement) => {
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
  });

    setEventListeners(formElement);
});
}
enableValidation();

// const checkInputAdditionalInfoValidity = () => {
//   if (!jobInput.validity.valid) {
//   showError(jobInput);
// } else {
//   hideError(jobInput);
// }}

// formElement.addEventListener('submit', function (evt) {
//   evt.preventDefault();
// });

// nameInput.addEventListener('input', function () {
//   checkInputNameValidity();
// });

// jobInput.addEventListener('input', function () {
//   checkInputAdditionalInfoValidity();
// });