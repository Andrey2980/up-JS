// 1. Добавьте в соответствующие классы методы добавления товара в
// корзину, удаления товара из корзины и получения списка товаров корзины.
// Добавить кнопку "Добавить в корзину" для товаров из каталога, 
// чтобы при нажатии ваш товар попадал в корзину.

const modalButtonCart = document.querySelector(".cart-button");  
      modalButtonCart.onclick = function() {                       
        showModalCart()
      }
      function showModalCart() {  
        const modalCart = document.querySelector(".modalwindow"); 
        modalCart.style.display = "block";        
        setTimeout(function() {              
          modalCart.style.opacity = 1           
        }, 10);
        
        const hideButtonCart = document.querySelector(".cart-hide-btn") 
        hideButtonCart.onclick = function() {  
          modalCart.style.display = "";   
          hideButtonCart.onclick = null;     
        }
      }

class Basket { 
    constructor() {
      this.productnumber = 4; // счетчик коллличества товара всего в корзине
      this.totalCost = 1540; // счетчик стоимости корзины
      this.cart = [];


        // итоговая стоимсость вывод 

      this.interactionListElem2 = document.querySelector(".cart-total-price");
      let html2 = `[${this.totalCost}] рублей(я)`;
      this.element = document.createElement("span");
      this.element.className ="cart-value";

      console.log("ПришлО", html2);

      this.element.innerHTML = html2;
      this.element.style.display = "";
      this.interactionListElem2.appendChild(this.element);
      
      
      // итоговое количество вывод

      this.interactionListElem3 = document.querySelector(".cart-total-products");
      let html3 = `[${this.productnumber}] предметов(а)`;
      this.element = document.createElement("span");
      this.element.className ="total-products-value";

      console.log("ПришлО", html3);

      this.element.innerHTML = html3;
      this.element.style.display = "";
      this.interactionListElem3.appendChild(this.element);
    
  }

  addToCart(product) {
    console.log("PRODUCT", product);
    for (let interaction of this.cart) {
      if (interaction.id == product.id)
      return interaction.addQuantity()  
    }

    let interaction = new Interaction(
      product.id,
      product.src,
      product.name,
      product.price,
      product.description
    );
  
    this.cart.push(interaction) 
  }

  //sumOfBasket()
  //totalProduct()
   
  
  showBasketList () {  
    modalButtonCart.onclick = () => {
    this.element.style.display = "block";
    }
  }      
  
  showModalCart() {
  }
      
  сlearBasketList(event) { 
    clearlButtonCart.onclick = () => {
    this.element.style.display = "none";
    }
  }
}

/*получение сведений из массива в каталог и передача в корзину методом push*/

class Product {
  constructor(id, name, src,  price, description, basket) {
  this.id = id;
  this.name = name;
  this.src = src;
  this.price = price;
  this.description = description;
  this.basket = basket;
  this.productListElem = document.querySelector(".result-list")
  let html = `
    <img class="image-title" src=${src}>
    <div class="item-list">${this.name}</div>
    <div class="item-list">${this.price} руб.</div>
    <div class="item-list">${this.description}</div>
    <button class="cart-btn btn-primary buy-button" data-id="${this.id}">Купить</button>
    
  `;
  this.element = document.createElement("div");
  this.element.className ="result-item";
  
  this.element.style.backgroundSize = "cover";
  this.element.style.backgroundPosition = "50% 50%";
    
  this.element.innerHTML = html;
  this.productListElem.append(this.element);


  let buyButton = this.element.querySelector(".buy-button");
  buyButton.onclick = () => this.buyProduct() /*+++*/
    
}

buyProduct() {
    this.basket.addToCart(this) /*+++*/
  }
}

let basket = new Basket()

function createProductList(products) { // Магия newProduct
  for(product of products) {
    let newProduct = new Product(
      product.id,
      product.name,
      product.src,
      product.price,
      product.description,
      basket
    );
  }
}

  /*Добавление в корзину и очистка корзины*/ 

class Interaction {
  constructor(id, src, name, price, description) {
  this.id = id;
  this.src = src;
  this.name = name;
  this.price = price;
  this.description = description;
  this.basket = basket;
  this.quantity = 1; 
  this.interactionListElem = document.querySelector(".shoping");
  
  let html = `
        <img class="image-title-list" src=${src}>
        <div class="item-list">${this.name}</div>
        <div class="item-list">${this.price} руб.</div>
        <div class="item-list">${this.description}</div>
        <button class="btn-primary pay-button" data-id="${this.id}">Оплатить</button>
        <button class="btn-primary clear-button" data-id="${this.id}">Очистить</button>
        <p class="item-list quantity-element">кол-во:[${this.quantity}]шт.</p>`;
  this.element = document.createElement("div");
  this.element.className ="shoping-item";
  this.element.innerHTML = html;
  this.element.style.display = "";
  this.interactionListElem.after(this.element);
    
  let clearButton = this.element.querySelector(".clear-button");
  clearButton.onclick = () => this.removeQuantity()
  
  
  }

  addQuantity() {
    this.quantity++
    let quantityElement = this.element.querySelector(".quantity-element");
    this.element.style.display = "";
    quantityElement.innerHTML = `кол-во:[${this.quantity}]шт.`
  }

  removeQuantity(addQuantity) {
    this.quantity--
    let result = 0
    let quantityElement = this.element.querySelector(".quantity-element");
    quantityElement.innerHTML = `кол-во:[${this.quantity}]шт.`
    if (this.quantity === result)
    this.element.style.display = "none"
    return addQuantity
  } 
} 

  /*Получение массива*/
    
      send();
      function send() {
        let result  = [
          {
            id: 1,
            src: "img/Shirt.jpg",
            name:'Shirt',  
            price: 150, 
            description: "Lorem ipsum dollar sit ammet"
          },
          {
            id: 2,
            src: "img/Socks.jpg",
            name:'Socks',
            price: 140,
            description: "Lorem ipsum dollar sit ammet"
          },
          {
            id: 3,
            src: "img/Jacket.jpg",
            name:'Jacket',
            price: 350,
            description: "Lorem ipsum dollar sit ammet"
          },
          {
            id: 4,
            src: "img/Boots.jpeg",
            name:'Boots',
            price: 900,
            description: "Lorem ipsum dollar sit ammet"
          },
        ];
        if(result) {
          // console.log(result);
          createProductList(result);
        }
    }























