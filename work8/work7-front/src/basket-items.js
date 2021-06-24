
Vue.component("basket-items", {
    props:[],
    trmplate:`
      <div class="basket" v-if="showBasket">
        <div class="goods-item" v-for="good in basketGoods">
          <h3>{{good.product_name}}</h3>
          <p>{{good.price}}</p>
        </div>
      </div>
    `
  }); //export const BASKET_ITEMS = 

  export default 'basket-items';