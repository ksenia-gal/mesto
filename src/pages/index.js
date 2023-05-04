import "./index.css";
import {
  cards,
  config,
  editPopup,
  popupAdd,
  buttonEditProfile,
  buttonAddProfile,
  nameInput,
  jobInput,
  buttonEditAvatar,
  avatarPopup,
} from "../utils/constants.js";

import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { PopupWithConfirmation } from "../components/PopupWithConfirmation.js";
import { Api } from "../components/Api";

function createCard(item) {
  const card = new Card(item, "#cardTemplate", {
    handleImageClick: () => {
      popupZoom.open(item);
    },
    handleDeleteButtonClick,
  });
  const newCard = card.generateCard();
  return newCard;
}



function openEditProfile() {
  const { userNameElement, userInfoElement } = userInfo.getUserInfo();
  nameInput.value = userNameElement;
  jobInput.value = userInfoElement;
  popupEditProfile.open();
  formValidatorEditPopup.resetValidation();
}

function submitEditProfileForm(userProfileData) {
  popupEditProfile.buttonTextReplacement(true);
  api.saveProfileData(userProfileData)
  .then((res) => {
    userInfo.setUserInfo({userNameElement: res.name, userInfoElement: res.about});
  popupEditProfile.close();
  })
  .catch((error) => {
    console.log(`При редактировании профиля возникла ошибка,${error}`);
  })
  .finally(() => {
    popupEditAvatar.buttonTextReplacement(false);
  })
}



// ф-я открытия PopupWithConfirmation
function handleDeleteButtonClick(id, card) {
  popupConfirmation.setSubmitConfirmation(() => handlePopupWithConfirmation(id, card) );
  popupConfirmation.open();
}

// ф-я удаления карточек
function handlePopupWithConfirmation(id, card) {
  api.deleteCard(id)
  .then(() => {
    card.handleDeleteButtonClick();
    popupConfirmation.close();
  })
  .catch((error) => {
    console.log(`При удалении карточки возникла ошибка, ${error}`);
  })
  }

  function handleLikeButtonClick(id, isLiked, card) {
    if(isLiked) {
      api.dislikedCard(id)
      .then((cards) => {
        card.countLikes(cards.likes);
      })
      .catch((error) => {
        console.log(`При удалении лайка возникла ошибка, ${error}`);
      });
    } else {
      api.likedCard(id)
      .then((cards) => {
        card.countLikes(cards.likes);
      })
      .catch((error) => {
        console.log(`При добавлении лайка возникла ошибка, ${error}`);
      });
    }
  }

  function handleFormPlaceSubmit(values) {
    popupAddCard.buttonTextReplacement(true);
    api.addNewCard({ name: values.description, link: values.image})
    .then((card) => {
      section.addItem(renderCard(card));
      popupAddCard.close();
    })
    .catch((error) => { console.log(error)})
    .finally(() => {
      popupAddCard.buttonTextReplacement();
    })
  };

  // function handleFormPlaceSubmit(item) {
  //   renderCard({ name: item.description, link: item.image });
  //   popupAddCard.close();
  // }
// function renderCard(item) {
//   const cardElement = createCard(item);
//   section.addItem(cardElement);
// }

// создание экзмепляра класса Section
const section = new Section(
  { renderer: (data) => {
    section.addItem(renderCard(data));
  }},
  ".elements"
);

section.renderItems(items);


// создание экземпляра класса PopupEditAvatar ДОПИСАТЬ ФУНКЦИЮ САБМИТА НЕ ОТКРЫВАЕТСЯ ПОПАП
const popupEditAvatar = new PopupWithForm(
  ".popup_type_new-avatar"
);
popupEditAvatar.setEventListeners();
// ф-я открытия popupEditAvatar
buttonEditAvatar.addEventListener("click", () => {

  popupEditAvatar.open();
  // formValidatorAvatarPopup.resetValidation();
});

// создание экземпляра класса UserInfo
const userInfo = new UserInfo({
  userNameSelector: ".profile__title",
  userInfoSelector: ".profile__subtitle",
  avatarSelector: '.profile__avatar',
});


const popupEditProfile = new PopupWithForm(
  ".popup_type_edit",
  submitEditProfileForm
);
popupEditProfile.setEventListeners();
buttonEditProfile.addEventListener("click", () => openEditProfile());



// here
// создание экземпляра класса PopupWithForm (новое место)
const popupAddCard = new PopupWithForm(
  ".popup_type_add",
  handleFormPlaceSubmit
);
popupAddCard.setEventListeners();

// обработчик кнопки открытия попапа "новое место"
buttonAddProfile.addEventListener("click", () => {
  popupAddCard.open();
  formValidatorAddPopup.resetValidation();
});

// создание экземпляра класса PopupWithImage
const popupZoom = new PopupWithImage(".popup_type_zoom");
popupZoom.setEventListeners();

// создание экземпляра класса PopupWithConfirmation 
const popupConfirmation = new PopupWithConfirmation(".popup_type_confirmation");
popupConfirmation.setEventListeners();

// создание экземпляра класса API
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-65',
  headers: {
    authorization: 'dc4cc6fb-4780-4de8-be6c-e7f4fd89da24',
    'Content-Type': 'application/json'
  }
}); 

// создаем экземпляры класса FormValidator
const formValidatorEditPopup = new FormValidator(config, editPopup);
const formValidatorAddPopup = new FormValidator(config, popupAdd);
const formValidatorAvatarPopup = new FormValidator(config, avatarPopup);
formValidatorEditPopup.enableValidation();
formValidatorAddPopup.enableValidation();
formValidatorAvatarPopup.enableValidation();

Promise.all([
  api.getUserData(),
  api.getInitialCards()
])
.then(([userProfileData, cards]) => {
  userInfo.setUserInfo({userNameElement: userProfileData.name, userInfoElement: userProfileData.about});
  section.renderItems(cards.reverse());
})
.catch((error) => {
  console.log(`Ошибка: ${error}`);
});
