const editProfileButton = document.querySelector('.profile__edit-button');
editProfileButton.addEventListener('click', function() {
    const editPopup = document.querySelector('.popup');
    console.log(editPopup);
    editPopup.classList.add('popup_opened');
});

const editPopupCloseButton = document.querySelector('.popup__close-button');
editPopupCloseButton.addEventListener('click', function() {
    const closePopup = document.querySelector('.popup__container');
    console.log(closePopup);
    editPopup.classList.remove('popup_opened');
});