export default class FormValidator {
  constructor(config, form) {
  this._form = form
  this._config = config
  console.log(this._config);
  console.log(this._form);
  this._buttonSave = this._form.querySelector(
    this._config.submitButtonSelector
  )
  console.log(this._buttonSave);
  console.log(this._form);
  this._inputList = Array.from(
    this._form.querySelectorAll(this._config.inputSelector)
  )
}

enableValidation() {
  this._setEventListeners()
}

disableSubmitButton() {
  this._buttonSave.classList.remove(this._config.activeButtonClass)
  this._buttonSave.classList.add(this._config.inactiveButtonClass)
  this._buttonSave.disabled = true
}

enableSubmitButton() {
  this._buttonSave.classList.add(this._config.activeButtonClass)
  this._buttonSave.classList.remove(this._config.inactiveButtonClass)
  this._buttonSave.disabled = false
}

_showInputError(inputElement) {
  const errorElement = this._form.querySelector(`.${inputElement.id}-error`)
  errorElement.classList.add(this._config.errorClass)
  errorElement.textContent = inputElement.validationMessage
  inputElement.classList.add(this._config.inputErrorClass)
}

_hideInputError(inputElement) {
  const errorElement = this._form.querySelector(`.${inputElement.id}-error`)
  errorElement.classList.remove(this._config.errorClass)
  errorElement.textContent = ""
  inputElement.classList.remove(this._config.inputErrorClass)
}

_checkInputValidity(inputElement) {
  if (inputElement.validity.valid) {
    this._hideInputError(inputElement)
  } else {
    this._showInputError(inputElement)
  }
}

_hasInvalidInput() {
  return this._inputList.some((inputElement) => !inputElement.validity.valid)
}

_toggleButtonState() {
  if (this._hasInvalidInput()) {
    this.disableSubmitButton()
  } else {
    this.enableSubmitButton()
  }
}

_setEventListeners() {
  this._toggleButtonState(this._inputList, this._buttonSave)

  this._inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      this._checkInputValidity(inputElement)
      this._toggleButtonState(this._inputList, this._buttonSave)
    })
  })
}
}
// VADIM
// export class FormValidator {
//   constructor(config, form) {
//     this._form = form;
//     this._inputSelector = config.inputSelector;
//     this._submitButton = form.querySelector(config.submitButtonSelector);
//     this._inactiveButtonClass = config.inactiveButtonClass;
//     this._inputErrorClass = config.inputErrorClass;
//     this._errorClass = config.errorClass;
//     this._inputList = Array.from(form.querySelectorAll(config.inputSelector));
//   }

//   _showInputError(inputElement, errorMessage) {
//     const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
//     inputElement.classList.add(this._inputErrorClass);
//     errorElement.textContent = errorMessage;
//     errorElement.classList.add(this._errorClass);
//   }

//   _hideInputError(inputElement) {
//     const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
//     inputElement.classList.remove(this._inputErrorClass);
//     errorElement.classList.remove(this._errorClass);
//     errorElement.textContent = "";
//   }

//   _checkInputValidity(inputElement) {
//     if (!inputElement.validity.valid) {
//       this._showInputError(inputElement, inputElement.validationMessage);
//     } else {
//       this._hideInputError(inputElement);
//     }
//   }

//   enableValidation() {
//     this._form.addEventListener("submit", function (evt) {
//       evt.preventDefault();
//     });
//     this._setEventListeners();
//   }

//   _hasInvalidInput() {
//     return this._inputList.some((inputElement) => {
//       return !inputElement.validity.valid;
//     });
//   }

//   _disableButton() {
//     this._submitButton.classList.add(this._inactiveButtonClass);
//     this._submitButton.disabled = true;
//   }

//   _enableButton() {
//     this._submitButton.classList.remove(this._inactiveButtonClass);
//     this._submitButton.disabled = false;
//   }

//   resetValidation() {
//     this._toggleButtonState();

//     this._inputList.forEach((inputElement) => {
//       this._hideInputError(inputElement);
//     });
//   }

//   _toggleButtonState() {
//     if (this._hasInvalidInput()) {
//       this._disableButton();
//     } else {
//       this._enableButton();
//     }
//   }

//   _setEventListeners() {
//     this._toggleButtonState();
//     this._inputList.forEach((inputElement) => {
//       inputElement.addEventListener("input", () => {
//         this._checkInputValidity(inputElement);
//         this._toggleButtonState();
//       });
//     });
//   }
// }
