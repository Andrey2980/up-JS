const API_URL = "http://localhost:3000";


Vue.component ("goods-search", {
  props: ['value'],
  template: `
  <input type="text" class="goods-search"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)" 
      placeholder="search"
    >
  `,
})


Vue.component ("total-products-value", {
    data: function () {
      return {
        count: 0
      }
    },
    template: `
    <span class="total-products-value">{{count}}</span>
    `,
})

Vue.component ("cart-total-price", {
  data: function () {
    return {
      count: 0
    }
  },
  template: `
  <span class="cart-total-price">{{count}}</span>
  `,
})

Vue.component("modal-cart", {
  template:`
  <transition type="text/x-template" name="modal" id="modal-template">
      <div class="modal-cart-mask">
        <div class="modal-cart-wrapper">
          <div class="modal-cart-container">
            
              <div class="alert alert-secondary">
                <button class="modal-cart-button" @click="$emit('close')">
                  Оплатить   
                </button>
              </div 
            
          </div>
        </div>
      </div>
  </transition>
  `,
});

Vue.component("modal", {
  template:`
  <transition type="text/x-template" name="modal" id="modal-template">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">
              <slot>
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
                  <input type="text" class="form-control-name"
                  placeholder="Имя" name="name"required>
                </div>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text"></span>
                  </div>
                  <input type="text" class="form-control-secondname"
                  placeholder="Фамилия" name="secondname"required>
                </div>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text"></span>
                  </div>
                  <input type="text" class="form-control-mail"
                  placeholder="Адрес электронной почты" 
                  name="email"required>
                </div>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text"></span>
                  </div>
                <div class="input-group">
                  <input type="text" class="form-control-phone" 
                  placeholder="Телефон" name="phone"required>
                </div>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text"></span>
                  </div>
                  <input type="password" class="form-control-password-first" 
                  placeholder="Пароль" name="password"required>
                </div>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text"></span>
                  </div>
                  <input type="password" class="form-control-password-twice" 
                  placeholder="Повторите пароль" name="repeat"required>
                </div>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text"></span>
                  </div>
                <div class="input-group">
                  <div class = "form-group">
                    <label for="exampleFormControlTextarea1" class="text-phrase" ></label>
                    <textarea class="form-control-text" id="exampleFormControlTextarea1" rows="3"
                    name="description" placeholder="Контрольный вопрос" ></textarea>
                  </div>
                </div>
                <p class="error-text text-danger"></p>
                </form>
                <div class="alert alert-secondary">
                <button class="modal-default-button close-reg-btn" @click="$emit('close')">
                  Отправить   
                </button>
                </div 
              </slot>
            </div>
          </div>
        </div>
      </transition>
  `,
});

Vue.component("goods-list", {
  props:["goods"], 
  template: `
  <div class="goods-list">
    <goods-item v-for="goodEntity in goods" :goodProp="goodEntity"></goods-item>
  </div>
    ` 
})

Vue.component("goods-item", {
  props:["goodProp"],
  methods: {
      async addToCart(e) {
      console.log(this.goodProp);
      const responce = await fetch(`${API_URL}/addToCart`, {
        method: 'POST',
        mode: 'cors',
        headers: {  // указание на то, что мы принимаем и отправляем данные в формате JSON 
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(this.goodProp) // указываем на то что мы отправляем (преобразуя объект в строку)
      });
    }, 
  },
  template:`
    <div class="goods-item">
      <h3>{{goodProp.product_name}}</h3>
      <p>{{goodProp.price}}</p>
      <button class="cart-btn" @click=addToCart>Купить</button>
    </div>
  `,
});

Vue.component("busket-items", {
  props:[],
  trmplate:`
    <div class="basket" v-if="showBasket">
      <div class="goods-item" v-for="good in basketGoods">
        <h3>{{good.product_name}}</h3>
        <p>{{good.price}}</p>
      </div>
    </div>
  `
});



const app = new Vue({
  el: "#app",
  data: {
    goods: [],            // массив товаров
    filteredGoods: [],   // рендерит товар в каталоге
    basketGoods: [],   // добавляет товар в корзину
    id_product: "",
    quantity: [],
    totalCost: [],
    searchLine: "",
    name: "",
    searchText: "",
    showModal: false,
    showModalCart: false,
    showBasket: false, // задает значение видимости корзины на странице
  },

  
  methods: {
    async getProducts() {
      const responce = await fetch(`${API_URL}/catalogData`);
      console.log(responce);
      if (responce.ok) {
        const catalogItems = await responce.json();
        this.goods = catalogItems;
        this.filteredGoods = catalogItems;
      } else {
        alert("Ошибка при соединении с сервером");
      }
    },

    

  // async addToBasket(e) {
  //     this.showBasket = true; // задает значение видимости корзины на странице
  //     const itemId = parseInt(e.target.getAttribute("itemId"));
  //     const item = this.goods.find((i) => i.id_product === itemId);
  //     console.log(this.goods)
  //     this.basketGoods.push(item);
  //   },
  },

  async mounted() {
    await this.getProducts();
  },
});



