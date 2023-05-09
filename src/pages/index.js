import "./index.css";
import { config } from "../utils/constants.js";
import {
  buttonEditAvatar,
  buttonAddProfile,
  buttonEditProfile,
  formEditProfile,
  formAddProfile,
  formUpdateAvatar,
  nameProfile,
  aboutProfile,
  avatarProfile,
  popupAvatar,
  popupEdit,
  popupAddCard,
  popupWithConfirmation,
  popupZoomImage,
} from "../utils/constants.js";

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
let userId; 

function createCard(data) {
  const card = new Card(
    data,
    ".card",
    handleImageClick,
    userId,
    async () => {
      try {
        const response = await api.putLike(data._id);
        card.addLike();
        card.countLikes(response);
      } catch (error) {
        return console.log(`Ошибка: ${error}`);
      }
    },
    async () => {
      try {
        const response = await api.deleteLike(data._id);
        card.dislike();
        card.countLikes(response);
      } catch (error) {
        return console.log(`Ошибка: ${error}`);
      }
    },
    () => {
      popupConfirmation.open(card);
    }
  );
  const newCard = card.generateCard();
  return newCard;
}

function handleImageClick(name, link) {
  popupZoom.open(name, link);
}

async function submitEditProfileForm(profileData) {
  try {
    const userProfile = await api.editProfile(profileData);
    user.setUserInfo(userProfile);
  } catch (error) {
    return console.log(`При редактировании профиля возникла ошибка,${error}`);
  }
}

async function submitAvatarForm(data) {
  try {
    const userProfile = await api.changeAvatar(data);
    user.setUserInfo(userProfile);
  } catch (error) {
    return console.log(`При обновлении аватара возникла ошибка,${error}`);
  }
}

async function handleFormPlaceSubmit(cardData) {
  try {
    const newCard = await api.addNewCard(cardData);
    section.addItem(createCard(newCard));
  } catch (error) {
    return console.log(`Ошибка: ${error}`);
  }
}

function openEditProfile() {
  popupEditProfile.open();
  popupEditProfile.setInputValue(user.getUserInfo());
  formValidatorEditPopup.resetValidation();
}

// создание экземпляра класса Section
const section = new Section(
  {
    renderer: (data) => {
      const card = createCard(data);
      section.addItem(card);
    },
  },
  ".elements"
);

// создание экземпляра класса PopupWithForm (редактирование профиля)
const popupEditProfile = new PopupWithForm(popupEdit, submitEditProfileForm);
popupEditProfile.setEventListeners();

// обработчик кнопки открытия попапа "редактирования профиля"
buttonEditProfile.addEventListener("click", () => openEditProfile());

// создание экземпляра класса PopupWithForm (новое место)
const popupAdd = new PopupWithForm(popupAddCard, handleFormPlaceSubmit);
popupAdd.setEventListeners();

// обработчик кнопки открытия попапа "новое место"
buttonAddProfile.addEventListener("click", () => {
  popupAdd.open();
  formValidatorAddPopup.resetValidation();
});

// создание экземпляра класса PopupWithForm "обновление аватара"
const popupEditAvatar = new PopupWithForm(popupAvatar, submitAvatarForm);
popupEditAvatar.setEventListeners();

// обработчик кнопки открытия попапа "обновление аватара"
buttonEditAvatar.addEventListener(
  "click",
  () => {
    popupEditAvatar.open();
    formValidatorAvatarPopup.disableButton();
  },
  false
);

// создание экземпляра класса PopupWithImage
const popupZoom = new PopupWithImage(popupZoomImage); 
popupZoom.setEventListeners();

// создание экземпляра класса UserInfo
const user = new UserInfo({
  name: nameProfile,
  about: aboutProfile,
  avatar: avatarProfile,
});

// создание экземпляра класса PopupWithConfirmation
const popupConfirmation = new PopupWithConfirmation(popupWithConfirmation,
  async (card) => {
    api
      .deleteCard(card._id)
      .then(() => {
        card.remove();
        popupConfirmation.close();
      })
      .catch((error) => console.log(`Ошибка: ${error}`));
  }
);
popupConfirmation.setEventListeners();


// создаем экземпляры класса FormValidator
const formValidatorEditPopup = new FormValidator(config, formEditProfile);
formValidatorEditPopup.enableValidation();

const formValidatorAddPopup = new FormValidator(config, formAddProfile);
formValidatorAddPopup.enableValidation();

const formValidatorAvatarPopup = new FormValidator(config, formUpdateAvatar);
formValidatorAvatarPopup.enableValidation();

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-65",
  headers: {
    authorization: "dc4cc6fb-4780-4de8-be6c-e7f4fd89da24",
    "Content-Type": "application/json",
  },
});

Promise.all([api.getUserData(), api.getInitialCards()])
  .then(([userProfile, cards]) => {
    user.setUserInfo(userProfile);
    userId = userProfile._id;
    section.renderItems(cards);
  })
  .catch((error) => {
    console.log(`Ошибка: ${error}`);
  });