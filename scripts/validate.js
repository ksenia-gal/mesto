const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("popup__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("popup__input-error_active");
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("popup__input_type_error");
  errorElement.classList.remove("popup__input-error_active");
  errorElement.textContent = "";
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
};

const buttonSubmits = document.querySelectorAll(".popup__submit");

const disableButton = (buttonSubmits) => {
  buttonSubmits.forEach((buttonSubmit) => {
    buttonSubmit.classList.add("popup__submit_disabled");
    buttonSubmit.disabled = true;
  });
};

const enableButton = (buttonSubmits) => {
  buttonSubmits.forEach((buttonSubmit) => {
    buttonSubmit.classList.remove("popup__submit_disabled");
    buttonSubmit.disabled = false;
  });
};

const toggleButtonState = (inputList, buttonSubmits) => {
  if (hasInvalidInput(inputList)) {
    disableButton(buttonSubmits);
  } else {
    enableButton(buttonSubmits);
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".popup__input"));

  toggleButtonState(inputList, buttonSubmits);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonSubmits);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".popup__container"));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
};
enableValidation();