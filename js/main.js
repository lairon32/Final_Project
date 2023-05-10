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


// function renderBestGames(arr) {
//     const container = document.createElement('div');
//     container.className = 'item-best__games'

//     const img = document.createElement('img')
//     img.src = arr.image;

//     const title = document.createElement('h2')
//     title.className = 'item-best__games__title'
//     title.textContent = arr.name;

//     price.className = 'price'
//     price.textContent = arr.price

//     const discount = document.createElement('p')
//     discount.className = 'item-best__games__discount'
//     discount.textContent = arr.discount

//     const newPrice = document.createElement('s')
//     newPrice.className = 'item-best__games__newprice'
//     newPrice.textContent = arr.newPrice

//     const button = document.createElement('p')
//     button.className = 'item-best__games__button'
//     button.textContent = arr.button

//     container.append(img, title, price, discount, newPrice, button);
//     return container;

// }

// bestGames.forEach((element) => {
//     const search = document.querySelector('.best-games__column')
//     search.append(renderCategory(element))
// })

