const showInputError = (formElement, inputElement, errorMessage, config) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorClass);
};

const hideInputError = (formElement, inputElement, config) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement, config) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      config.inputErrorClass,
      config.errorClass
    );
  } else {
    hideInputError(
      formElement,
      inputElement,
      config.inputErrorClass,
      config.errorClass
    );
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const disableButton = (buttonSubmit, config) => {
  buttonSubmit.classList.add(config.inactiveButtonClass);
  buttonSubmit.disabled = true;
};

const enableButton = (buttonSubmit, config) => {
  buttonSubmit.classList.remove(config.inactiveButtonClass);
  buttonSubmit.disabled = false;
};

const toggleButtonState = (inputList, buttonSubmit, config) => {
  if (hasInvalidInput(inputList)) {
    disableButton(buttonSubmit, config);
  } else {
    enableButton(buttonSubmit, config);
  }
};

const setEventListeners = (formElement, config, buttonSubmit) => {
  const inputList = Array.from(
    formElement.querySelectorAll(config.inputSelector)
  );
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement, config);
      toggleButtonState(inputList, buttonSubmit, config);
    });
  });
};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    const buttonSubmit = formElement.querySelector(config.submitButtonSelector);
    setEventListeners(formElement, config, buttonSubmit);
  });
};

enableValidation(config);
