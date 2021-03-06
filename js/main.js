class ProductList {
    constructor (container = ".products"){
        this.container = container;
        this.goods = [];
        this._fetchProducts();
    }
    _fetchProducts(){
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50},
        ]
    }

    render(){
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const  productObj = new ProductItem(product);
            //block.innerHTML += productObj.render();
            block.insertAdjacentHTML("beforeend", productObj.render());
        }
    }

    summa(){
        let mas = this.goods;
        let sum = 0;
        mas.forEach(function (item){
            sum += item.price;
        })
        alert(sum);
    }

}

class ProductItem {
    constructor (product, img = 'https://www.ibisegypttours.com/images/accomadation/blogpost-placeholder-100x100.png'){
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img
    }

    render(){
        return `<div class="product-item">
                <img src="${this.img}">
                <h3 class="product-item-heading">${this.title}</h3>
                <p class="product-item-price">${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

let list = new ProductList();
list.render();
list.summa();

/* const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Mouse', price: 20},
    {id: 3, title: 'Keyboard', price: 200},
    {id: 4, title: 'Gamepad', price: 50},
];

const renderProduct = (product, img = 'https://www.ibisegypttours.com/images/accomadation/blogpost-placeholder-100x100.png') => {
    return `<div class="product-item">
                <img src="${img}">
                <h3 class="product-item-heading">${product.title}</h3>
                <p class="product-item-price">${product.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};

const renderPage = list => {
    document.querySelector('.products').innerHTML = list.map(item => renderProduct(item)).join('');
} 

renderPage(products); */