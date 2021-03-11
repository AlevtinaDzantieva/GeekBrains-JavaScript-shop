const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class List {
    constructor(url, container, list = list2) {
        this.container = container;
        this.list = list;
        this.url = url;
        this.goods= [];
        this.allProducts = [];
        this._init();
    }

    getJson(url) {
        return fetch(url ? url: `${API_URL}/catalogData.json`)
            .then(result =>result.json())
            .catch(error => {
                console.log(error);
            })
    }

    handleData(data){
        this.goods = [...data];
        this.render;
    }

    calcSumm(){
        return this.allProducts.reduce((accum, item) => accum += item.price, 0);
    }

    render(){
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const  productObj = new this.list[this.constructor.name](product);
            console.log(productObj);
            this.allProducts.push(productObj);
            //block.innerHTML += productObj.render();
            block.insertAdjacentHTML("beforeend", productObj.render());
        }
    }

    _init(){
        return false
    }
}

class Item {
    constructor(el, img = 'https://www.ibisegypttours.com/images/accomadation/blogpost-placeholder-100x100.png'){
        this.product_name = el.product_name;
        this.price = el.price;
        this.id_product = el.id_product;
        this.img = img;
    }

    render(){
        return `<div class="product-item" data-id="${this.id_product}">
                <img src="${this.img}" alt="photo">
                <div class="desc">
                    <h3 class="product-item-heading">${this.product_name}</h3>
                    <p class="product-item-price">${this.price}</p>
                    <button class="buy-btn"
                    data-id="${this.id_product}"
                    data-id="${this.product_name}"
                    data-id="${this.price}">Купить</button>
                </div>
            </div>`
    }
}

class ProductList extends List {
    constructor (cart, container = ".products", url = "/catalog.json"){
        super(url,container);
        this.cart = cart;
        this.getJson()
            .then(data => this.handleData(data));
    }
    _init(){
        document.querySelector(this.container).addEventListener('click', e => {
            if(e.target.classList.contains('buy-btn')) {
                this.cart.addProduct(e.target);
            }
        });
    }
}

    /*_fetchProducts(){
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50},
        ]*/

    /*_getProducts(){
        return fetch(`${API_URL}/catalogData.json`)
            .then(result =>result.json())
            .catch(error => {
                console.log(error);
            })
    }


    

    
    /*summa(){
        let mas = this.goods;
        let sum = 0;
        mas.forEach(function (item){
            sum += item.price;
        })
        alert(sum);
    }*/



class ProductItem extends Item {}

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
    
    }

/*let blockCart = document.querySelector('.btn-cart');
blockCart.addEventListener ('click', function() {
    document.querySelector('.cart__window').style.display = 'block'
});*/

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