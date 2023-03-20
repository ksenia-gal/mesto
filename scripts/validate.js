//1. Валидация формы «Редактировать профиль»

// Вынесем все необходимые элементы формы в константы
const formElement = document.querySelector('.popup__container');
const formInput = formElement.querySelector('.popup__input');
const formError = formElement.querySelector(`.${formInput.id}-error`);


// Функция, которая добавляет класс с ошибкой
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('popup__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__input-error_active');
};

// // Функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('popup__input_type_error');
  errorElement.classList.remove('popup__input-error_active');
  errorElement.textContent = '';
};

// // Функция, которая проверяет валидность поля
const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    // Если поле не проходит валидацию, покажем ошибку
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    // Если проходит, скроем
    hideInputError(formElement, inputElement);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
  return !inputElement.validity.valid;
  }); 
  }

const buttonSubmits = document.querySelectorAll('.popup__submit');

const disableButton = (buttonSubmits) => {
    buttonSubmits.forEach((buttonSubmit) => {
        buttonSubmit.classList.add('popup__submit_disabled');
        buttonSubmit.disabled = true;
    });
}

const enableButton = (buttonSubmits) => {
    buttonSubmits.forEach((buttonSubmit) => {
        buttonSubmit.classList.remove('popup__submit_disabled');
        buttonSubmit.disabled = false;
    });
}
const buttonDisabled = document.querySelector('.popup__button_disabled');
const toggleButtonState = (buttonSubmits) => {
    if(true) {
        enableButton(buttonSubmits);
    } else {
        disableButton(buttonSubmits);
    }
    };


// const toggleButtonState = (inputList, buttonSubmits) => {
//  if (hasInvalidInput(inputList)) {
// buttonSubmits.forEach((buttonSubmit) => {
//     buttonSubmit.classList.add('popup__submit_disabled');
// }); } else {
//     buttonSubmits.forEach((buttonSubmit) => {
//         buttonSubmit.classList.remove('popup__submit_disabled');
//     }); 
// };
// }

const setEventListeners = (formElement) => {
const inputList = Array.from(formElement.querySelectorAll('.popup__input'));

toggleButtonState(inputList, buttonSubmits);

inputList.forEach((inputElement) => {
inputElement.addEventListener('input', () => {
checkInputValidity(formElement, inputElement);
toggleButtonState(inputList, buttonSubmits);
});
});
};


const enableValidation = () => {
const formList = Array.from(document.querySelectorAll('.popup__container'));
formList.forEach((formElement) => {
  formElement.addEventListener('submit', function (evt) {
    evt.preventDefault();
  });
setEventListeners(formElement);
});
};
enableValidation(buttonDisabled);

//Функция валидации форм 
  
// const enableValidation = settings => { 
//       const formList = Array.from(document.querySelectorAll(settings.formSelector)); 
     
//       formList.forEach(formElement => { 
//         formElement.addEventListener('submit', evt => { 
//           evt.preventDefault(); 
//         }); 
//         setEventListeners(formElement, settings); 
//       }); 
//     }; 
     
    // enableValidation({ 
    //   formSelector: '.popup__form', 
    //   inputSelector: '.popup__input', 
    //   submitButtonSelector: '.popup__button', 
    //   inactiveButtonClass: 'popup__button_disabled', 
    //   inputErrorClass: 'popup__input_type_error', 
    //   errorClass: 'popup__error_visible' 
    // // });
    // const validationConfig = {
    //     formSelector: '.popup__form',
    //     inputSelector: '.popup__input',
    //     submitButtonSelector: '.popup__submit',
    //     inactiveButtonClass: 'popup__button_disabled',
    //     inputErrorClass: 'popup__input_type_error',
    //     errorClass: 'popup__error_visible'
    //   }; 

    enableValidation({
        '.popup__button_disabled',
    })