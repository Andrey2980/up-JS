// 1. Добавьте пустые классы для корзины товаров и элемента корзины товаров. Продумайте,
// какие методы понадобятся для работы с этими сущностями.
// 2. Добавьте для GoodsList метод, определяющий суммарную стоимость всех товаров.
// 3. *Некая сеть фастфуда предлагает несколько видов гамбургеров:
// ### Маленький (50 рублей, 20 калорий).
// ### Большой (100 рублей, 40 калорий).
// ### Гамбургер может быть с одним из нескольких видов начинок (обязательно):
// ### С сыром (+10 рублей, +20 калорий).
// ### С салатом (+20 рублей, +5 калорий).
// ### С картофелем (+15 рублей, +10 калорий).
// ### Дополнительно гамбургер можно посыпать приправой
// (+15 рублей, +0 калорий) и полить майонезом (+20 рублей, +5 калорий).
// ### 3 Напишите программу, рассчитывающую стоимость и калорийность гамбургера.
// Можно использовать примерную архитектуру класса из методички, но можно использовать и свою.

let modalButtonCart = document.querySelector(".cart-button");  
      modalButtonCart.onclick = function() {                       
        showModalCart()
      }
      function showModalCart() {  
        let modalCart = document.querySelector(".modalwindow"); 
        modalCart.style.display = "block";        
        setTimeout(function() {              
          modalCart.style.opacity = 1           
        }, 10);
        
        let hideButtonCart = document.querySelector(".cart-hide-btn") 
        hideButtonCart.onclick = function() {  
          modalCart.style.display = "";   
          hideButtonCart.onclick = null;     
        }
      }



class Basket { 
    constructor() {
    this.cart = [];
  }

  addToCart(product) {
    console.log(product);
    for (let interaction of this.cart) {
      if (interaction.id == product.id)
      return interaction.addQuantity()  
    }

    let interaction = new Interaction(product.id, product.src, product.name, product.price, product.description) 
    this.cart.push(interaction)
  }
    
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
    <div class="item-list"; background-image: url(${this.src})"></div>
    <div class="item-list">${this.name}</div>
    <div class="item-list">${this.price} руб.</div>
    <div class="item-list">${this.description}</div>
    <button class="cart-btn btn-primary buy-button" data-id="${this.id}">Купить</button>
    
  `;
  this.element = document.createElement("div");
  this.element.className ="result-item";
  this.element.style.backgroundImage = `url(${this.src})`;
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

function createProductList(products) {
  for(product of products) {
    let newProduct = new Product(product.id, product.name, product.imageLink, product.price, product.description, basket);
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
  this.interactionListElem = document.querySelector(".shoping")
  let html = `
        <div class="item-list"; background-image: url(${this.src})"></div>
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

// addSumm() {
//   this.summ++
//   let cartValue = this.element.querySelector(".cart-value");
//   cartValue.innerHTML = `[${this.cartValue}]`

// }


addQuantity() {
  this.quantity++
  let quantityElement = this.element.querySelector(".quantity-element");
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

function createInteractionList(interactions) {
  for(interaction of interactions) {
  let newInteraction = new Interaction(interaction.id, interaction.imageLink, interaction.name, interaction.price, interaction.description);
  }
}

/*Получение массива*/
  
    send();
    function send() {
      //let response = await fetch("catalog_obr.php");
      let result  = [
        {id: 1, src: "img/Shirt.jpg", name:'Shirt',  price: 150, description: "Lorem ipsum dollar sit ammet"},
        {id: 2, src: "img/Socks.jpg", name:'Socks',  price: 140, description: "Lorem ipsum dollar sit ammet"},
        {id: 3, src: "img/Jacket.jpg", name:'Jacket', price: 350, description: "Lorem ipsum dollar sit ammet"},
        {id: 4, src: "img/Boots.jpeg", name:'Boots',  price: 900, description: "Lorem ipsum dollar sit ammet"},
      ]
      if(result) {
        console.log(result);
        createProductList(result);
      }
    }
    
  
  
    































// let totalProducts = 0;

  
  
// class GoodsItem {
//     constructor(title, price, description, image) {
//       this.title = title;
//       this.price = price;
//       this.description = description;
//       this.image = image;
// }

// render() {
//       return `<div class="goods-item"><h3 class="item-list">Наименование товара:<br>${this.title}</h3>
//       <p class="cart-description">${this.description}</p>
//       <div class="card-img-top" background-image: url(${this.image})"></div> 
//       <p>Цена товара:${this.price}</p><bottom class="cart-btn">Купить</bottom></div>`
//     }

// }

// class GoodsList {
//   constructor() {
//     this.goods = [];
//   }
//   fethGoods() {
//     this.goods = [
//       {title:'Shirt',  price: 150, description: "Lorem ipsum dollar sit ammet", image: "https://aloha-plus.ru/wp-content/uploads/2018/08/rabstol_net_elephant_07.jpg"},
//       {title:'Socks',  price: 140, description: "Lorem ipsum dollar sit ammet", image: "https://aloha-plus.ru/wp-content/uploads/2018/08/rabstol_net_elephant_07.jpg"},
//       {title:'Jacket', price: 350, description: "Lorem ipsum dollar sit ammet", image: "https://aloha-plus.ru/wp-content/uploads/2018/08/rabstol_net_elephant_07.jpg"},
//       {title:'Boots',  price: 900, description: "Lorem ipsum dollar sit ammet", image: "https://aloha-plus.ru/wp-content/uploads/2018/08/rabstol_net_elephant_07.jpg"},
//     ]
//   }
//   render () {
//     let listHtml = ""
//     this.goods.forEach(good => {
//       const goodItem = new GoodsItem(good.title, good.price, good.description, good.image);
//       listHtml += goodItem.render()
//     })
//     console.log(listHtml)
//     document.querySelector('.goods-list').innerHTML = listHtml
//   }

//   // countBasketPrice() {
//   //   let summHtml = ""
//   //   let sum = 0;
//   //   for (let i = 0; i < goods.length - 1; i++) {
//   //     sum += goods[i][1];
//   //   }
//   //   const result = document.querySelector('.cart-btn')
//   //   result.onclick = function() {
//   //     console.log("Ахуеть")
//   //     countBasketPrice()
//   //     document.querySelector('.cart-value').innerHTML = summHtml
//   //   }
//   //       return sum;

        
        
//   // }

//   scoringProducts() {
//     let result = document.querySelector('.cart-btn')
//     //const addingPoints = document.querySelector(".cart-total-price");
//     //const productsTotal =`<span id="cart-value" class="cart-value" >${totalProducts} </span>;`
//     result.onclick = function () {
//       console.log("получилось")
//     } 
//       //addingPoints.innerHTML = productsTotal; 
//       //totalProducts++;
//   }


// }

// const init = () => {

//   const goodsList = new GoodsList()
//   goodsList.fethGoods();
//   goodsList.render()
//   goodsList.scoringProducts()

// }

// window.onload = init;

// const modalButtonCart = document.querySelector(".cart-button");  
// modalButtonCart.onclick = function() {                       
//     showModalCart()
// }

// function showModalCart() {  
//   const modalCart = document.querySelector(".modalwindow"); 
//   modalCart.style.display = "block";        
//   setTimeout(function() {              
//     modalCart.style.opacity = 1           
//   }, 100);
    
//   const hideButtonCart = document.querySelector(".cart-hide-btn") 
//   hideButtonCart.onclick = function() {  
//     modalCart.style.display = "";   
//     hideButtonCart.onclick = null;     
//   }
// }