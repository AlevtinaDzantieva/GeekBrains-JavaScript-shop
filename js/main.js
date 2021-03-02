const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Mouse', price: 20},
    {id: 3, title: 'Keyboard', price: 200},
    {id: 4, title: 'Gamepad', price: 50},
];

const renderProduct = (title, price) => {
    return `<div class="product-item">
                <img src="./img/brains.jpg" alt="" width=100 >
                <h3 class="product-item-heading">${title}</h3>
                <p class="product-item-price">${price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};

const renderPage = list => {
    const productsList = list.map(item => renderProduct(item.title, item.price));
    console.log(productsList);
    const str = productsList.join(' ');
    document.querySelector('.products').innerHTML = str;
} 

renderPage(products);