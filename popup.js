const PP = document.querySelector('.pricePopup')
const SP = document.querySelector('.succesPopup')

function openPopup() {
    PP.classList.add("open-PP");
};

function closePopup() {
    PP.classList.remove("open-PP");
};

function changePS () {
    closePopup()
    SP.classList.add("open-SP")
}

function closeSP () {
    SP.classList.remove("open-SP")
}