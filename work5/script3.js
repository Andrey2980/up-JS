                          // Модальное окно корзины

const modalButtonCart = document.querySelector(".cart-button");  
      modalButtonCart.onclick = function() {                       
        showModalCart()
      }
      function showModalCart() {  
        let modalCart = document.querySelector(".modalwindow"); 
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

                          // Модальное окно карточки регистрации

const modalwindowreg = document.querySelector(".cart-input-button");  
      modalwindowreg.onclick = function() {                       
       showModalInputCart()
      }

      function showModalInputCart() {  
        let modalRegCart = document.querySelector(".modalwindowreg"); 
        modalRegCart.style.display = "block";        
        setTimeout(function() {              
          modalRegCart.style.opacity = 1           
        }, 10);
        
        const hideButtonRegCart = document.querySelector(".cart-hidereg-btn") 
        hideButtonRegCart.onclick = function() {  
          modalRegCart.style.display = "";   
          hideButtonRegCart.onclick = null;     
        }
      }



      // Обьект корзина

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
      this.element.className = "total-products-value";

      console.log("ПришлО", html3);

      this.element.innerHTML = html3;
      this.element.style.display = "";
      this.interactionListElem3.appendChild(this.element);

      // окно регистрации

      this.interactionListElem = document.querySelector(".reg-form");

      let html4 = `
        <form class="users-form"> 
          
          <div class="input-group">

            <div class="input-group-prepend">
              <span class="input-group-text"></span>
            </div>
          </div>

          <div class="input-group">

            <div class="input-group-prepend">
              <span class="input-group-text"></span>
            </div>

            <input type="text" class="form-control-name" placeholder="Имя" name="name"required>
          </div>

          <div class="input-group">

            <div class="input-group-prepend">
              <span class="input-group-text"></span>
            </div>

            <input type="text" class="form-control-secondname" placeholder="Фамилия" name="secondname"required>
          </div>

          <div class="input-group">

            <div class="input-group-prepend">
              <span class="input-group-text"></span>
            </div>

            <input type="text" class="form-control-mail" placeholder="Адрес электронной почты" name="email"required>
          </div>

          <div class="input-group">

            <div class="input-group-prepend">
              <span class="input-group-text"></span>
            </div>

          <div class="input-group">
            <input type="text" class="form-control-phone" placeholder="Телефон" name="phone"required>
          </div>

          <div class="input-group">

            <div class="input-group-prepend">
              <span class="input-group-text"></span>
            </div>

            <input type="password" class="form-control-password-first" placeholder="Пароль" name="password"required>
          </div>

          <div class="input-group">

            <div class="input-group-prepend">
              <span class="input-group-text"></span>
            </div>

            <input type="password" class="form-control" placeholder="Повторите пароль" name="repeat"required>
          </div>

          <div class="input-group">

            <div class="input-group-prepend">
              <span class="input-group-text"></span>
            </div>

          <div class = "form-group">
            <label for="exampleFormControlTextarea1" class="text-phrase">Секртеное слово:</label>
            <textarea class="form-control-text" id="exampleFormControlTextarea1" rows="3" name="description"></textarea>
          </div>
          </div>


          <p class="error-text text-danger"></p>
        </form>

        <div class="alert alert-secondary">

          <button class="close-reg-btn">Отправить</button>
        </div 
`;
        this.element = document.createElement("div");
        this.element.className ="register-form";
        this.element.innerHTML = html4;
        this.element.style.display = "";
        this.interactionListElem.appendChild(this.element);

        let cheskDataControl = document.querySelector(".close-reg-btn") 
        cheskDataControl.onclick = () => this.cheskForm()
        const searchButton = document.querySelector(".search-button");
        searchButton.onclick = () => this.FilterGoods()

          
    
    }

    FilterGoods() {
      const searchName = document.getElementById("goods-search").value;
      if (searchName == "Shirt" || searchName == "Socks" || searchName == "Jacket" || searchName == "Boots") {
        console.log("product found")
      } else console.log("Not found")

    
    }
  

  cheskForm() {
    const cheskListName = document.querySelector(".form-control-name");
    const cheskListSecondname = document.querySelector(".form-control-secondname");
    const cheskListMail = document.querySelector(".form-control-mail");
    const cheskListPhone = document.querySelector(".form-control-phone");
    const numberRegExp = /^[a-zA-Z]+$/
    const emailRegExp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/
    const tellRegExp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/
      
    console.log(numberRegExp.test(cheskListName));
    console.log(numberRegExp.test(cheskListSecondname));
    console.log(emailRegExp.test(cheskListMail));
    console.log(tellRegExp.test(cheskListPhone));
    
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
    console.log(interaction)
  }
  
  showBasketList () {  
    modalButtonCart.onclick = () => {
    this.element.style.display = "block";
    }
  }      
  
  showModalCart() {
  }
      
  сlearBasketList() { 
    clearlButtonCart.onclick = () => {
    this.element.style.display = "none";
    }
  }
}

/*получение сведений из массива в каталог и передача в корзину методом push*/

class Product {
    constructor(id, name, src,  price, description, basket, productnumber) {
    this.id = id;
    this.name = name;
    this.src = src;
    this.price = price;
    this.description = description;
    this.basket = basket;
    this.productnumber = productnumber;
    this.productListElem = document.querySelector(".result-list")
    let html = `

      <div class="item-list">${this.name}</div>
      <img class="image-title" src=${src}>
      <div class="item-list">${this.price} руб.</div>
      <div class="item-list">${this.description}</div>
      <button class="cart-btn btn-primary buy-button" data-id="${this.id}">Купить</button>
      
    `;
    this.element = document.createElement("div");
    this.element.className ="result-item";
    this.element.innerHTML = html;
    this.productListElem.append(this.element);


    let buyButton = this.element.querySelector(".buy-button");
    buyButton.onclick = () => (this.buyProduct(),this.totalCart())  /*+++*/
    
}

totalCart() {
  console.log("+1")
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
  constructor(id, src, name, price, description, productnumber) {
    this.id = id;
    this.src = src;
    this.name = name;
    this.price = price;
    this.description = description;
    this.basket = basket;
    this.quantity = 1; 
    this.productnumber = productnumber;
    this.interactionListElem = document.querySelector(".shoping");
    
    let html = `
          <img class="image-title-list" src=${src}>
          <div class="item-list" v-if="name.lenght !==0">${this.name}</div>
          <div class="item-list">${this.price} руб.</div>
          <div class="item-list">${this.description}</div>
          <button class="btn-primary pay-button" data-id="${this.id}">Оплатить</button>
          <button class="btn-primary clear-button" data-id="${this.id}">Очистить</button>
          <p class="item-list quantity-element">кол-во:[${this.quantity}]шт.</p>`;
    this.element = document.createElement("div");
    this.element.className ="shoping-item";
    this.element.innerHTML = html;
    this.element.style.display = "";
    this.interactionListElem.appendChild(this.element);
      
    let clearButton = this.element.querySelector(".clear-button");
    clearButton.onclick = () => (this.removeQuantity(),this.totalCart())
    
    }

    totalCart() {

       console.log ("-1")
    }

    addQuantity() {
      this.quantity++
      let quantityElement = this.element.querySelector(".quantity-element");
      this.element.style.display = "";
      quantityElement.innerHTML = `кол-во:[${this.quantity}]шт.`
    }

    removeQuantity(addQuantity) {
      this.quantity--
      let quantityСounter = 0
      let quantityElement = this.element.querySelector(".quantity-element");
      quantityElement.innerHTML = `кол-во:[${this.quantity}]шт.`
      if (this.quantity === quantityСounter)
      this.element.style.display = "none"
      return addQuantity
    } 
} 

// Поиск товара по имени 


// const app = new Vue ({
//   el: ".goods-search",
//   data: {
//     name1: "Shirt",
//     name2: "Socks",
//     name3: "Jacket",
//     name4: "Boots",
//   },
//   methods: {
//     onClicksearchCart: (e) => {
//       console.log(e)
//       console.log(`Hello ${e.target.innerText}!`)
//     },
//   },

// });

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























