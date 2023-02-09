const editProfileButton = document.querySelector('.profile__edit-button');
editProfileButton.addEventListener('click', function() {
    const editPopup = document.querySelector('.popup');
    console.log(editPopup);
    editPopup.removeAttribute('display:none');
});