import "./index.css";

//импорты переменных-конфигов
// import { popupConfig } from "../utils/popupConfig.js"; //delete config
import { validationConfig } from "../utils/validationConfig.js"; //rename config

import {
  profileUpdateAvatar,
  profileAddButton,
  profileEditButton,
  formEditProfile,
  formAddProfile,
  formUpdateAvatar,
  nameProfile,
  aboutProfile,
  avatarProfile,
  popupZoom,
  avatarPopup,
  editPopup,
  popupAddCard,
  popupWithConfirmation,
} from "../utils/constants.js";

//импорты классов
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
let userId; //?
// import "./index.css";
// import {
//   cards,
//   config,
//   editPopup,
//   popupAdd,
//   buttonEditProfile,
//   buttonAddProfile,
//   nameInput,
//   jobInput,
//   buttonEditAvatar,
//   avatarPopup,
// } from "../utils/constants.js";

// import Card from "../components/Card.js";
// import FormValidator from "../components/FormValidator.js";
// import Section from "../components/Section.js";
// import PopupWithImage from "../components/PopupWithImage.js";
// import PopupWithForm from "../components/PopupWithForm.js";
// import UserInfo from "../components/UserInfo.js";
// import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
// import Api from "../components/Api.js";

// Функция создания карточек по экземпляру класса Card //change
function createCard(data) {
  const card = new Card(
    data,
    ".card",
    openPopupImage,

    userId,
    async () => {
      try {
        const response = await api.putLike(data._id);
        card.handleLikeButtonClick();
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

  return card.generateCard();
}
//Открытие увеличенной картинки
function openPopupImage(name, link) {
  popupImage.open(name, link);
}
// function createCard(cardObject) {
//   const card = new Card(
  // cardObject,  
  // ".card", 
  // handleImageClick,
  // userId,
  // async () => {
// try {
//   const response = await api.putLike(data._id);
// card.handleLikeButtonClick();
// card.countLikes(response);
//  } catch (error) {
//   return console.log(`Ошибка: ${error}`);
// }
// },
// async () => {
//   try {
//     const response = await api.deleteLike(data._id);
//     card.dislike();
//     card.countLikes(response);
//   } catch (error) {
//     return console.log(`Ошибка: ${error}`);
//   }
// },
// () => {
//   popupConfirmation.open(card);
// }
// );

// return card.generateCard();
// }


//     handleDeleteButtonClick,
//     handleLikeButtonClick,
//   }, id);
//   const newCard = card.generateCard();
//   return newCard;
// }

// function renderCard(cardObject) {
//   const cardElement = createCard(cardObject);
//   section.addItem(cardElement);
// }

// // открыте popupZoom
//     function handleImageClick (name, link) {
//       popupZoom.open(name, link);
//     }

// Форма редактирования профиля
async function handleSubmitFormEditProfile(profileData) {
  try {
    const userProfile = await api.editProfile(profileData);
    user.setUserInfo(userProfile);
  } catch (error) {
    return console.log(`Ошибка: ${error}`);
  }
}

// Форма обновления аватара //rename
async function handleSubmitFormUpdateAvatar(data) {
  try {
    const userProfile = await api.changeAvatar(data);
    user.setUserInfo(userProfile);
  } catch (error) {
    return console.log(`Ошибка: ${error}`);
  }
}

// Форма добавления карточек
async function handleSubmitFormAddCard(cardData) {
  try {
    const newCard = await api.addNewCard(cardData);
    cardList.addItem(createCard(newCard));
  } catch (error) {
    return console.log(`Ошибка: ${error}`);
  }
}

// Для каждого попапа создавайте свой экземпляр класса PopupWithForm
const popupImage = new PopupWithImage(popupZoom); //no popup config
popupImage.setEventListeners();

const popupAdd = new PopupWithForm(
  popupAddCard,
  handleSubmitFormAddCard
);
popupAdd.setEventListeners();

const popupEdit = new PopupWithForm(
  editPopup,
  handleSubmitFormEditProfile
);
popupEdit.setEventListeners();

const popupAvatar = new PopupWithForm(
  avatarPopup,
  handleSubmitFormUpdateAvatar
);
popupAvatar.setEventListeners();

const user = new UserInfo({
  name: nameProfile,
  about: aboutProfile,
  avatar: avatarProfile,
});

profileEditButton.addEventListener(
  "click",
  () => {
    popupEdit.open();
    popupEdit.setInputValue(user.getUserInfo());
    validatorFormEditProfile.disableButton();
  },
  false
);

profileUpdateAvatar.addEventListener(
  "click",
  () => {
    popupAvatar.open();
    validatorFormUpdateAvatar.disableButton();
  },
  false
);

profileAddButton.addEventListener(
  "click",
  () => {
    popupAdd.open();
    validatorFormAddProfile.disableButton();
  },
  false
);

// Для каждой проверяемой формы новый экземпляр класса FormValidator
const validatorFormEditProfile = new FormValidator(
  validationConfig,
  formEditProfile
);

validatorFormEditProfile.enableValidation();

const validatorFormAddProfile = new FormValidator(
  validationConfig,
  formAddProfile
);

validatorFormAddProfile.enableValidation();

const validatorFormUpdateAvatar = new FormValidator(
  validationConfig,
  formUpdateAvatar
);

validatorFormUpdateAvatar.enableValidation();

const popupConfirmation = new PopupWithConfirmation(
  popupWithConfirmation,
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

// Загружка карточек с сервера
const cardList = new Section(
  {
    renderer: (data) => {
      const card = createCard(data);

      cardList.addItem(card);
    },
  },
  ".elements"
);

// const section = new Section(
//   {
//     renderer: (cardObject) => {
//       section.addItem(createCard(cardObject));
//     },
//   },
//   ".elements"
// );
// section.renderItems(cardObject.reverse());

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-65",
  headers: {
    authorization: "dc4cc6fb-4780-4de8-be6c-e7f4fd89da24",
    "Content-Type": "application/json",
  },
});

// Отрисовка карточек с сервера + отрисовка данных пользователя
Promise.all([api.getUserData(), api.getInitialCards()])
  .then(([userProfile, cards]) => {
    user.setUserInfo(userProfile);
    userId = userProfile._id;
    cardList.renderItems(cards);
  })

  .catch((error) => console.log(`Ошибка: ${error}`));

  // Promise.all([api.getUserData(), api.getInitialCards()])
//   .then(([userProfileData, cardObject]) => {
//     userInfo.setUserInfo({
//       userNameElement: userProfileData.name,
//       userInfoElement: userProfileData.about,
//     });
//     section.renderItems(cardObject.reverse());
//   })
//   .catch((error) => {
//     console.log(`Ошибка: ${error}`);
//   });

// import "./index.css";
// import {
//   cards,
//   config,
//   editPopup,
//   popupAdd,
//   buttonEditProfile,
//   buttonAddProfile,
//   nameInput,
//   jobInput,
//   buttonEditAvatar,
//   avatarPopup,
// } from "../utils/constants.js";

// import { Card } from "../components/Card.js";
// import { FormValidator } from "../components/FormValidator.js";
// import { Section } from "../components/Section.js";
// import { PopupWithImage } from "../components/PopupWithImage.js";
// import { PopupWithForm } from "../components/PopupWithForm.js";
// import { UserInfo } from "../components/UserInfo.js";
// import { PopupWithConfirmation } from "../components/PopupWithConfirmation.js";
// import { Api } from "../components/Api.js";

// const section = new Section(
//   {
//     renderer: (cardObject) => {
//       section.addItem(createCard(cardObject));
//     },
//   },
//   ".elements"
// );
// section.renderItems(cardObject.reverse());

// function createCard(cardObject) {
//   const card = new Card(cardObject, "#cardTemplate", {
//     handleImageClick: () => {
//       popupZoom.open(item);
//     },
//     handleDeleteButtonClick,
//     handleLikeButtonClick,
//   }, id);
//   const newCard = card.generateCard();
//   return newCard;
// }

// function renderCard(cardObject) {
//   const cardElement = createCard(cardObject);
//   section.addItem(cardElement);
// }

// function openEditProfile() {
//   const { userNameElement, userInfoElement } = userInfo.getUserInfo();
//   nameInput.value = userNameElement;
//   jobInput.value = userInfoElement;
//   popupEditProfile.open();
//   formValidatorEditPopup.resetValidation();
// }

// function submitEditProfileForm(userProfileData) {
//   popupEditProfile.buttonTextReplacement(true);
//   api
//     .saveProfileData(userProfileData)
//     .then((data) => {
//       userInfo.setUserInfo({
//         userNameElement: data.name,
//         userInfoElement: data.about,
//       });
//       popupEditProfile.close();
//     })
//     .catch((error) => {
//       console.log(`При редактировании профиля возникла ошибка,${error}`);
//     })
//     .finally(() => {
//       popupEditAvatar.buttonTextReplacement(false);
//     });
// }

// // ф-я открытия PopupWithConfirmation
// function handleDeleteButtonClick(id, card) {
//   popupConfirmation.setSubmitConfirmation(() =>
//     handlePopupWithConfirmation(id, card)
//   );
//   popupConfirmation.open();
// }

// // ф-я удаления карточек
// function handlePopupWithConfirmation(id, card) {
//   api
//     .deleteCard(id)
//     .then(() => {
//       card.handleDeleteButtonClick();
//       popupConfirmation.close();
//     })
//     .catch((error) => {
//       console.log(`При удалении карточки возникла ошибка, ${error}`);
//     });
// }

// function handleLikeButtonClick(id, isLiked, card) {
//   if (isLiked) {
//     api
//       .dislikedCard(id)
//       .then((data) => {
//         card.countLikes(data.likes);
//       })
//       .catch((error) => {
//         console.log(`При удалении лайка возникла ошибка, ${error}`);
//       });
//   } else {
//     api
//       .likedCard(id)
//       .then((data) => {
//         card.countLikes(data.likes);
//       })
//       .catch((error) => {
//         console.log(`При добавлении лайка возникла ошибка, ${error}`);
//       });
//   }
// }

// function handleFormPlaceSubmit(values) {
//   popupAddCard.buttonTextReplacement(true);
//   api.addNewCard({ createCard(data, data.owner._id)})
//   .then((card) => {
//     section.addItem(renderCard(card));
//     popupAddCard.close();
//   })
//   .catch((error) => { console.log(error)})
//   .finally(() => {
//     popupAddCard.buttonTextReplacement(false);
//   })
// };

// function handleFormPlaceSubmit(item) {
//   renderCard({ name: item.description, link: item.image });
//   popupAddCard.close();
// }

// // создание экземпляра класса PopupEditAvatar ДОПИСАТЬ ФУНКЦИЮ САБМИТА НЕ ОТКРЫВАЕТСЯ ПОПАП
// const popupEditAvatar = new PopupWithForm(".popup_type_new-avatar");
// popupEditAvatar.setEventListeners();
// // ф-я открытия popupEditAvatar
// buttonEditAvatar.addEventListener("click", () => {
//   popupEditAvatar.open();
//   // formValidatorAvatarPopup.resetValidation();
// });

// // создание экземпляра класса UserInfo
// const userInfo = new UserInfo({
//   userNameSelector: ".profile__title",
//   userInfoSelector: ".profile__subtitle",
//   avatarSelector: ".profile__avatar",
// });

// const popupEditProfile = new PopupWithForm(
//   ".popup_type_edit",
//   submitEditProfileForm
// );
// popupEditProfile.setEventListeners();
// buttonEditProfile.addEventListener("click", () => openEditProfile());

// here
// // создание экземпляра класса PopupWithForm (новое место)
// const popupAddCard = new PopupWithForm(
//   ".popup_type_add",
//   handleFormPlaceSubmit
// );
// popupAddCard.setEventListeners();

// // обработчик кнопки открытия попапа "новое место"
// buttonAddProfile.addEventListener("click", () => {
//   popupAddCard.open();
//   formValidatorAddPopup.resetValidation();
// });

// // создание экземпляра класса PopupWithImage
// const popupZoom = new PopupWithImage(".popup_type_zoom");
// popupZoom.setEventListeners();

// // создание экземпляра класса PopupWithConfirmation
// const popupConfirmation = new PopupWithConfirmation(".popup_type_confirmation");
// popupConfirmation.setEventListeners();

// // создание экземпляра класса API
// const api = new Api({
//   baseUrl: "https://mesto.nomoreparties.co/v1/cohort-65",
//   headers: {
//     authorization: "dc4cc6fb-4780-4de8-be6c-e7f4fd89da24",
//     "Content-Type": "application/json",
//   },
// });

// // создаем экземпляры класса FormValidator
// const formValidatorEditPopup = new FormValidator(config, editPopup);
// const formValidatorAddPopup = new FormValidator(config, popupAdd);
// const formValidatorAvatarPopup = new FormValidator(config, avatarPopup);
// formValidatorEditPopup.enableValidation();
// formValidatorAddPopup.enableValidation();
// formValidatorAvatarPopup.enableValidation();

// Promise.all([api.getUserData(), api.getInitialCards()])
//   .then(([userProfileData, cardObject]) => {
//     userInfo.setUserInfo({
//       userNameElement: userProfileData.name,
//       userInfoElement: userProfileData.about,
//     });
//     section.renderItems(cardObject.reverse());
//   })
//   .catch((error) => {
//     console.log(`Ошибка: ${error}`);
//   });
