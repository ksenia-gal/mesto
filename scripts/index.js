const editProfileButton = document.querySelector(".profile__edit-button");
editProfileButton.addEventListener("click", function () {
  const editPopup = document.querySelector(".popup");
  editPopup.classList.add("popup_opened");
});

const closePopupButton = document.querySelector(".popup__close-button");
closePopupButton.addEventListener("click", function () {
  const editPopup = document.querySelector(".popup");
  editPopup.classList.remove("popup_opened");
});
const popup = document.querySelector(".popup");
function openPopup() {
  popup.classList.add("popup_opened");
}

function closePopup() {
  popup.classList.remove("popup_opened");
}

const fullName = "Жак-Ив Кусто";
const additionalInfo = "Исследователь океана";

const profileName = document.querySelector(".profile__title");

const profileAdditionalInfo = document.querySelector(".profile__subtitle");

const fullNameInput = document.querySelector(".popup__input-full-name");
fullNameInput.value = fullName;
const AdditionalInfoInput = document.querySelector(
  ".popup__input-additional-information"
);
AdditionalInfoInput.value = additionalInfo;

const formElement = document.querySelector(".popup__container");
const nameInput = document.querySelector(".popup__input-full-name");
const jobInput = document.querySelector(".popup__input-additional-information");
function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAdditionalInfo.textContent = jobInput.value;
  closePopup();
  console.log(closePopup);
}

formElement.addEventListener("submit", handleFormSubmit);
