const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class ProductList {
    constructor (container = ".products"){
        this.container = container;
        this.goods = [];
        this._getProducts()
            .then(data => {
                this.goods = [...data];
                console.log (this.goods);
                this.render()
            });
    }

    /*_fetchProducts(){
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50},
        ]*/

    _getProducts(){
        return fetch(`${API_URL}/catalogData.json`)
            .then(result =>result.json())
            .catch(error => {
                console.log(error);
            })
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
        let res = this.goods.reduce((accum,item) => accum += item.price, 0);
        alert(res);
    }


    /*summa(){
        let mas = this.goods;
        let sum = 0;
        mas.forEach(function (item){
            sum += item.price;
        })
        alert(sum);
    }*/

}

class ProductItem {
    constructor (product, img = 'https://www.ibisegypttours.com/images/accomadation/blogpost-placeholder-100x100.png'){
        this.title = product.product_name;
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

class Cart {
    addGoods(){

    }
    removeGoods(){

    }
    changeGoods(){

    }
    render(){

    }
}

class ElemCart {
    constructor (product, img = 'https://www.ibisegypttours.com/images/accomadation/blogpost-placeholder-100x100.png'){
        this.title = product.;
        this.price = product.;
        this.id = product.;
        this.img = img
    }

    render(){
        return `<div class="cart__window">
                <img src="${this.img}">
                <h3 class="product-item-heading">${this.title}</h3>
                <p class="product-item-price">${this.price}</p>
            </div>`
    }
}

let blockCart = document.querySelector('.btn-cart');
blockCart.addEventListener ('click', function() {
    document.querySelector('.cart__window').style.display = 'block'
});

let list = new ProductList();
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