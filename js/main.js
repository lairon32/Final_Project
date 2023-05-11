const category = [
    {
        name: "Strategy",
        image: './image/Games Genres/1.png'
    },
    {
        name: "FPS",
        image: './image/Games Genres/2.png'
    },
    {
        name: "RPG",
        image: './image/Games Genres/3.png'
    },
    {
        name: "Puzzle",
        image: './image/Games Genres/4.png'
    },
    {
        name: "Role Playing",
        image: './image/Games Genres/5.png'
    },
    {
        name: "Sports",
        image: './image/Games Genres/6.png'
    },
]


const bestGames = [
    {
        name: "Minecraft",
        price: "Rp 260.000",
        discount: "90%",
        newPrice: "Rp 260.000",
        image: './image/Best games/best-games__img 1.png'
    },
    {
        name: "Asphalt 9: Legends",
        button: "Free Download",
        image: './image/Best games/best-games__img 2.png'
    },
    {
        name: "The Witcher 3",
        price: "Rp 420.000",
        discount: "25%",
        newPrice: "Rp 590.000",
        image: './image/Best games/best-games__img 3.png'
    },
    {
        name: "Minecraft",
        price: "Rp 260.000",
        image: './image/Best games/best-games__img 4.png'
    },
]

function renderCategory(obj) {
    const container = document.createElement('div');
    container.className = "games__genres-card";

    const text = document.createElement('p');
    text.className = 'games__genres-body'
    text.textContent = obj.name;

    const image = document.createElement('img');
    image.className = 'games__genres-img'
    image.src = obj.image;

    container.append(text, image);
    return container;
}

category.forEach((element) => {
    const search = document.querySelector('.games__genres-row')
    search.append(renderCategory(element))
})


document.addEventListener("DOMContentLoaded", function () {
    const modalContainer = document.getElementById("modal-container");
    const modal = document.getElementById("modal");
    const closeBtn = document.getElementById("close-btn");

    function openModal() {
        modalContainer.style.visibility = "visible";
        modalContainer.style.opacity = "1";
    }

    function closeModal() {
        modalContainer.style.visibility = "hidden";
        modalContainer.style.opacity = "0";
    }

    openModal();

    closeBtn.addEventListener("click", closeModal);

    modalContainer.addEventListener("click", function (modal) {
        if (modal.target === modalContainer) {
            closeModal();
        }
    });
});

const loginButton = document.querySelector(".header__Login");
const loginForm = document.querySelector(".form");


loginButton.addEventListener("click", function (event) {

    event.preventDefault();


    if (loginForm.classList.contains("open")) {

        loginForm.classList.remove("open");
    } else {

        loginForm.classList.add("open");
    }
});


document.addEventListener("click", function (event) {

    if (loginForm.contains(event.target) && loginButton.contains(event.target)) {

        loginForm.classList.remove("open");
    }
});

const registerButton = document.querySelector(".header__Signup");
const formRegister = document.getElementById("form-register");

registerButton.addEventListener("click", function (event) {
    event.preventDefault();
    formRegister.classList.toggle("open");
});

document.addEventListener("click", function (event) {
    if (formRegister.contains(event.target) && registerButton.contains(event.target)) {
        formRegister.classList.remove("open");
    }
});
