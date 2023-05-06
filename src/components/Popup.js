export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);

    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popupElement.classList.add("popup_opened");

    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove("popup_opened");

    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._popupElement.addEventListener("mousedown", (evt) => {
      if (
        evt.target.classList.contains("popup__overlay") ||
        evt.target.classList.contains("popup__close-icon")
      ) {
        this.close();
      }
    });
  }
}

// export default class Popup {
//   constructor(popupSelector) {
//     this._popupElement = document.querySelector(popupSelector)
//     this._handleEscClose = this._handleEscClose.bind(this);
//   }

//   // open() {
//   //   //Сначала устанавливаем обработчики событий
//   //   this.setEventListeners()
//   //   //А только после показываем popup
//   //   this._popupElement.classList.add("popup_opened")
//   // }
//   open() {
//     this._popupElement.classList.add("popup_opened");
//     document.addEventListener("keydown", this._handleEscClose);
//   }
//   // close() {
//   //   //Сначала скрываем popup
//   //   this._popupElement.classList.remove("popup_opened")
//   //   //И только после этого удалаяем обработчики событий
//   //   this.delEventListeners()
//   // }
//   close() {
//     this._popupElement.classList.remove("popup_opened");
//     document.removeEventListener("keydown", this._handleEscClose);
//   }
//   // _handleSubmit() {
//   //   //Просто вызываем закрытие
//   //   this.close()
//   // }

//   // _handleEscClose(evt) {
//   //   //Проверяем нажата ли клавиша Escape
//   //   if (evt.key === "Escape") {
//   //     //По нажатию на клавишу Escape вызываем закрытие
//   //     this.close()
//   //   }
//   // }

//   // _handleClose(evt) {
//   //   //Зачем то проверяем наличие класса popup_opened у target
//   //   if (evt.target.classList.contains("popup_opened")) {
//   //     //При наличии вызываем закрытие
//   //     this.close()
//   //   }
//   // }
//   _handleEscClose = (evt) => {
//     if (evt.key === "Escape") {
//       this.close();
//     }
//   }

//     setEventListeners() {
//     this._popupElement.addEventListener("mousedown", (evt) => {
//       if (
//         evt.target.classList.contains("popup__overlay") ||
//         evt.target.classList.contains("popup__close-icon")
//       ) {
//         this.close();
//       }
//     });
//   }
//   // setEventListeners() {
//   //   //Установка обработчиков от popup на document
//   //   document.addEventListener("keydown", this._clickEscClose)
//   //   document.addEventListener("mouseup", this._clickClose)
//   // }

//   // delEventListeners() {
//   //   //Снятие обработчиков от popup на document
//   //   document.removeEventListener("keydown", this._clickEscClose)
//   //   document.removeEventListener("mouseup", this._clickClose)
//   // }
// }

// // export class Popup {
// //   constructor(popupSelector) {
// //     this._popupElement = document.querySelector(popupSelector);
// //     this._handleEscClose = this._handleEscClose.bind(this);
// //   }

// //   open() {
// //     this._popupElement.classList.add("popup_opened");
// //     document.addEventListener("keydown", this._handleEscClose);
// //   }

// //   close() {
// //     this._popupElement.classList.remove("popup_opened");
// //     document.removeEventListener("keydown", this._handleEscClose);
// //   }

// //   _handleEscClose(evt) {
// //     if (evt.key === "Escape") {
// //       this.close();
// //     }
// //   }

// //   setEventListeners() {
// //     this._popupElement.addEventListener("mousedown", (evt) => {
// //       if (
// //         evt.target.classList.contains("popup__overlay") ||
// //         evt.target.classList.contains("popup__close-icon")
// //       ) {
// //         this.close();
// //       }
// //     });
// //   }
// // }
