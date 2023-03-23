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

function createCard(card) {
  const newCard = document
    .querySelector("#cardTemplate")
    .content.querySelector(".element")
    .cloneNode(true);
  const cardHeading = newCard.querySelector(".element__title");
  const deleteButton = newCard.querySelector(".element__delete-button");
  const cardImage = newCard.querySelector(".element__image");
  const likeButton = newCard.querySelector(".element__like-button");
  cardHeading.textContent = card.name;
  cardImage.setAttribute("src", card.link);
  cardImage.setAttribute("alt", card.alt);
  deleteButton.addEventListener("click", handleDeleteButtonClick);
  likeButton.addEventListener("click", handleLikeButtonClick);
  cardImage.addEventListener("click", () => openImage(card));
  return newCard;
}

cards.forEach(function (card) {
  const cardElement = createCard(card);
  elements.append(cardElement);
});

function openImage(card) {
  popupImage.src = card.link;
  popupImage.alt = card.name;
  popupHeading.textContent = card.name;
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
  disableButton(buttonSubmitPlace, config);
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

function handleLikeButtonClick(evt) {
  evt.target.classList.toggle("element__like-button_active");
}

function handleDeleteButtonClick(evt) {
  const button = evt.target;
  const element = button.closest(".element");
  element.remove();
}

buttonClosePopupZoom.addEventListener("click", function () {
  closePopup(popupZoom);
});
