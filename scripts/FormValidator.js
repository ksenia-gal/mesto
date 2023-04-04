// 1. класс валидейшн конструктор пустой смотрите какие есть ф-ии и пытаетесь понять что общего у всех валидаций и начинаете переносить в конструктор есть одна самая главная
// она переносится первой
// Создайте класс FormValidator, который настраивает валидацию полей формы:
// принимает в конструктор объект настроек с селекторами и классами формы;
// принимает вторым параметром элемент той формы, которая валидируется;
// имеет приватные методы, которые обрабатывают форму: проверяют валидность поля, изменяют состояние кнопки сабмита, устанавливают все обработчики;
// имеет публичный метод enableValidation, который включает валидацию формы.
// Для каждой проверяемой формы создайте экземпляр класса FormValidator.

class FormValidator {
    constructor(config, form) {
        this._form = form;
        this._inputSelector = config.inputSelector;
        this._submitButton = form.querySelector(config.submitButtonSelector);
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputErrorClass = config.inputErrorClass;
        this._errorClass = config.errorClass;
        this._inputList = Array.from(form.querySelectorAll(config.inputSelector));
      }

      enableValidation(config) {
        const formList = document.querySelectorAll(config.formSelector);
        formList.forEach((form) => {
            this._setEventListeners(config, form);
        })
      }
}