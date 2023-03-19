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
  const buttonElement = formElement.querySelector('.popup__submit');
const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
buttonElement.classList.add('popup__submit_disabled');
} else {
buttonElement.classList.remove('popup__submit_disabled');
} 
};


const setEventListeners = (formElement) => {
const inputList = Array.from(formElement.querySelectorAll('.popup__input'));

toggleButtonState(inputList, buttonElement);

inputList.forEach((inputElement) => {
inputElement.addEventListener('input', () => {
checkInputValidity(formElement, inputElement);
toggleButtonState(inputList, buttonElement);
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
enableValidation();

