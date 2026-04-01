// id="select-location

const selectLocation = document.querySelector("#select-location");

selectLocation.addEventListener("click", function () {
    const selectList = selectLocation.querySelector(".select__list");
    selectList.classList.toggle("select__list--visible");
});

var listItems = selectLocation.querySelectorAll(".select__list-item");
listItems.forEach(function (listItem) {
    listItem.addEventListener("click", function (event) {
        // event.stopPropagation();
        selectLocation
            .querySelector(".select__list-item--active")
            .classList.remove("select__list-item--active");
        this.classList.add("select__list-item--active");
        const selectedlistItem = selectLocation.querySelector(".select__value");
        selectedlistItem.innerText = this.innerText;
    });
});

document.addEventListener("click", function (event) {
    event.stopPropagation();
    if (event.target !== selectLocation) {
        selectLocation
            .querySelector(".select__list")
            .classList.remove("select__list--visible");
    }
});

// id = "select-property";

const selectProperty = document.querySelector("#select-property");
selectProperty.addEventListener("click", function () {
    const selectList = selectProperty.querySelector(".select__list");
    selectList.classList.toggle("select__list--visible");
});
var listItems = selectProperty.querySelectorAll(".select__list-item");
listItems.forEach(function (listItem) {
    listItem.addEventListener("click", function (event) {
        // event.stopPropagation();
        selectProperty
            .querySelector(".select__list-item--active")
            .classList.remove("select__list-item--active");
        this.classList.add("select__list-item--active");
        const selectedlistItem = selectProperty.querySelector(".select__value");
        selectedlistItem.innerText = this.innerText;
    });
} );

document.addEventListener("click", function (event) {
    event.stopPropagation();
    if (event.target !== selectProperty) {
        selectProperty
            .querySelector(".select__list")
            .classList.remove("select__list--visible");
    }
});

// id="select-price"

const selectPrice = document.querySelector("#select-price");

selectPrice.addEventListener("click", function () {
    const selectList = selectPrice.querySelector(".select__list");
    selectList.classList.toggle("select__list--visible");
});

var listItems = selectPrice.querySelectorAll(".select__list-item");
listItems.forEach(function (listItem) {
    listItem.addEventListener("click", function (event) {
        // event.stopPropagation();
        selectPrice
            .querySelector(".select__list-item--active")
            .classList.remove("select__list-item--active");
        this.classList.add("select__list-item--active");
        const selectedlistItem = selectPrice.querySelector(".select__value");
        selectedlistItem.innerText = this.innerText;
    });
});

document.addEventListener("click", function (event) {
    event.stopPropagation();
    if (event.target !== selectPrice) {
        selectPrice.querySelector(".select__list").classList.remove("select__list--visible");
    }
});

// 1April

const buttonApril = document.querySelector(".thanksWebCademy");
buttonApril.addEventListener( "click", function () {
    document.querySelector(".header__img").classList.add("none");
    document.querySelector(".foto-april1").classList.remove("none");
})
