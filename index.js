const editPopup = document.querySelector('edit-popup')
const editProfileButton = document.querySelector('.profile__edit-button');
editProfileButton.addEventListener('click', function() {
    const editPopup = document.querySelector('.popup');
    console.log(editPopup);
    editPopup.classList.add('popup_opened');
});

const editPopupCloseButton = document.querySelector('.popup__close-button');
closeProfileButton.addEventListener('click', function() {
        editPopup.classList.remove('popup_opened');
});