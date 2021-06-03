<!doctype html>
<html lang="ru">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Bootstrap CSS -->
    <!--<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">-->
    <link rel="stylesheet" href="style_1.css">
    
    <title>Elephant's каталог</title>
  </head>
  <body>
    <header class="header">
      <div class="container">
        <div class="header__inner">
          <div class="header__logo">Каталог Elephant's</div>
          
          <nav class="nav">
              <a class="nav__link" href="http://gugenot.beget.tech/magazin/index.php">Главная</a>
              <a class="nav__link" href="http://gugenot.beget.tech/magazin/index_1.php">Каталог</a>
              <a class="nav__link" href="#">Доставка</a>
              <a class="nav__link" href="#">Контакты</a>
              <a class="nav__link" href="http://gugenot.beget.tech/magazin/reg.php">Регистрация/вход</a>
              <button class="nav__link btn btn-primary modalcart-button" href="#"><i class="fa fa-shopping-cart" aria-hidden="true"></i></button>
              <a class="nav__link" href="#"><i class="fa fa-search" aria-hidden="true"></i></a>
              
          </nav>
        </div>
      </div>
    </header>
    
    <div class="intro">
      <div class="container">
        <!--<form action="catalog_obr.php" method="POST" class="product-form"> -->
        <div class ="about">
          <!--<div class="about__item" style="background: url(about/1.jpg) cover 50%/50%">
            
              <img src="about/1.jpg" alt="">
              <button class="btn btn-primary btn__item" id="data-id">Купить слона</button>
            
          </div>
          <div class="about__item" style="background: url(about/2.jpg) cover 50%/50%">
            
              <img src="about/2.jpg" alt="">
              <button class="btn btn-primary btn__item" id="data-id">Купить слона</button>
            
          </div>
          <div class="about__item" style="background: url(about/3jpg) cover 50%/50%">
            
              <img src="about/4.jpg" alt="">
              <button class="btn btn-primary btn__item" id="data-id">Купить слона</button>
            
          </div>
          <div class="about__item" style="background: url(about/9.jpg) cover 50%/50%">
            
              <img src="about/9.jpg" alt="">
              <button class="btn btn-primary btn__item" id="data-id">Купить слона</button>
              
          </div>
          <div class="about__item" style="background: url(about/5.jpg) cover 50%/50%">
            
              <img src="about/5.jpg" alt="">
              <button class="btn btn-primary btn__item" id="data-id">Купить слона</button>
            
          </div>
          <div class="about__item" style="background: url(about/6.jpg) cover 50%/50%">
           
              <img src="about/6.jpg" alt="">
              <button class="btn btn-primary btn__item" id="data-id">Купить слона</button>
              
            
          </div>
          <div class="about__item" style="background: url(about/7.jpg) cover 50%/50%">
           
              
              <img src="about/7.jpg" alt="">
              <button class="btn btn-primary btn__item" id="data-id">Купить слона</button>
              
          
          </div>
          <div class="about__item" style="background: url(about/8.jpg) cover 50%/50%">
            
              <img src="about/8.jpg" alt="">
              <button class="btn btn-primary btn__item" id="data-id">Купить слона</button>
          
          
          </div>-->
        </div>
      
      <div class="slider">
        <div class="container">
          <div class="slider__inner">
            <div class="slider__item active">
              <span class="slider__num">1</span>
                Подробнее
            </div>
            <div class="slider__item">
              <span class="slider__num">2</span>
                Конфиденциальность
              </div>
            <div class="slider__item">
              <span class="slider__num">3</span>
                FAQ
              </div>
            <div class="slider__item">
              <span class="slider__num">4</span>
                copyright <i class="fa fa-copyright" aria-hidden="true"></i>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modalwindowcart layer">
      <hr>
      <h2 class="modalwindowcart-title">Оплатить слона!</h2>
      <hr>
      <p class="modalwindowcart-text">Список Ваших покупок:</p>
      <hr>
      <table class ="shoping" align="left" width="100%" cellspacing="0" cellpadding="4">
        <!--<div class="shoping__item">
          <div class="about__img">
          <img src="#" alt="">
          </div>
        </div>
        <div class="shoping__item-button">
          <button class="btn btn-primary btn-danger">Оплатить</button>
          <button class="btn btn-primary delete-button">Очистить</button>
        </div>
        <div class="shoping__item">
          <div class="about__img">
          <img src="#" alt="">
          </div>
        </div>
        <div class="shoping__item">
          <button class="btn btn-primary btn-danger">Оплатить</button>
          <button class="btn btn-primary delete-button">Очистить</button>
        </div>
        <div class="shoping__item">
          <div class="about__img">
          <img src="#" alt="">
          </div>
        </div>
        <div class="shoping__item">
          <button class="btn btn-primary btn-danger">Оплатить</button>
          <button class="btn btn-primary delete-button">Очистить</button>
        </div>-->
      </table>
      <hr>
      <button class="btn btn-primary hide-modalcart">Закрыть</button>
    </div>
    
    <script>
      let modalButtonCart = document.querySelector(".modalcart-button");  
      modalButtonCart.onclick = function() {                       
        showModalCart()
      }
      function showModalCart() {  
        let modalCart = document.querySelector(".modalwindowcart"); 
        modalCart.style.display = "block";        
        setTimeout(function() {              
          modalCart.style.opacity = 1           
        }, 10);
        
        let hideButtonCart = document.querySelector(".hide-modalcart") 
        hideButtonCart.onclick = function() {  
          modalCart.style.display = "";   
          hideButtonCart.onclick = null;     
        }
      }
      
        
      
      /*создаем корзину*/
class Hamper {
    constructor() {
    this.cart = [];
    
    /*this.shoppingElement = document.querySelector(".shopping");*/
  /*let modalButton = this.element.querySelector(".modalcart-button");
    modalButton.onclick = () => this.showPieList()    
    */
    
    
  }
  addToCart(elephant) {
    console.log(elephant);
    
    for (let pie of this.cart) {
      if (pie.id == elephant.id)
      return pie.addQuantity()  /*- вызвать метод addQuantity*/
    }
    
    /*for (let pie of this.cart) {
      if(pie.id > elephant.id)
      return pie.removeQuantity()
    }*/
    
    let pie = new Pie(elephant.id, elephant.src, elephant.name, elephant.price, elephant.description) /*+++*/
    this.cart.push(pie)
    
  }
    
  showHamperList () {
    modalButtonCart.onclick = () => {
    this.element.style.display = "block";
    }
  }      
   
  showModalCart() {
    
  }
  /*buyElephant() {
    this.hamper.addToCart(this)
    buyButton.onclick = this.buyElephant;
  }*/
  
      
  сlearHamperList(event) {
    clearlButtonCart.onclick = () => {
    this.element.style.display = "none";
    }
  }
  
}
   
      
      
    /*получение сведений из массива в каталог и передача в корзину методом push*/
    
class Elephant {
    constructor(id, name, src,  price, description, hamper) {
    this.id = id;
    this.name = name;
    this.src = src;
    this.price = price;
    this.description = description;
    this.hamper = hamper;
    this.elephantListElem = document.querySelector(".about")
      
    let html = `
      <img src="#" alt="">
      <button class="btn btn-primary btn__item buy-button" data-id="${this.id}">Купить слона</button>
      
    `;
    this.element = document.createElement("div");
    this.element.className ="about__item";
    this.element.style.backgroundImage = `url(${this.src})`;
    this.element.style.backgroundSize = "cover";
    this.element.style.backgroundPosition = "50% 50%";
      
    this.element.innerHTML = html;
    this.elephantListElem.append(this.element);
    let buyButton = this.element.querySelector(".buy-button");
      
    buyButton.onclick = () => this.buyElephant() /*+++*/
    
  }
  
  buyElephant() {
      this.hamper.addToCart(this) /*+++*/
      
  }
}
  
  let hamper = new Hamper()
  
  function createElephantList(elephants) {
    for(elephant of elephants) {
      let newElephant = new Elephant(elephant.id, elephant.name, elephant.imageLink, elephant.price, elephant.description, hamper);
    }
  }
   
    /*Добавление в корзину и очистка корзины*/
    
    
    
class Pie {
    constructor(id, src, name, price, description,) {
    this.id = id;
    this.src = src;
    this.name = name;
    this.price = price;
    this.description = description;
    this.hamper = hamper;
    this.quantity = 1; 
    this.pieListElem = document.querySelector(".shoping")
    let html = `
   
          <td class="p2" style="height: 100px; width: 140px;
               background-size: contain; background-position: center; background-image: url(${this.src})"></td>
          <td class="p2" align="center" valign="top">${this.name}</td>
          <th class="p2" align="center" valign="top">${this.price} руб.</td>
          <td class="p2" align="center" valign="top" >${this.description}</td>
          <td min-height: 100%><button class="btn-primary pay-button text-danger" data-sql-id="${this.id}">Оплатить</button>
          <button class="btn-primary clear-button" data-sql-id="${this.id}">Очистить</button></td>
          <th class="p2 quantity-element" align="center" valign="top">кол-во:[${this.quantity}]шт.</td>
     
    `;
    this.element = document.createElement("tr");
    this.element.className ="shoping__item";
    this.element.innerHTML = html;
    this.element.style.display = "";
    this.pieListElem.after(this.element);
    let clearButton = this.element.querySelector(".clear-button");
    clearButton.onclick = () => this.removeQuantity()
    
    }
    
  
  
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
  

function createPieList(pies) {
    for(pie of pies) {
    let newPie = new Pie(pie.id, pie.imageLink, pie.name, pie.price, pie.description);
    }
 }
  
       
 /*Получение массива*/
    
      send();
      async function send() {
        let response = await fetch("catalog_obr.php");
        let result  = await response.json();
        if(result) {
          /*console.log(result);*/
          createElephantList(result);
        }
      }
      
    
    
    
    </script>
    <!-- Optional JavaScript -->
    <script src="https://use.fontawesome.com/4402de92b8.js"></script>
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </body>
</html>