const API_URL = "http://127.0.0.1:3000";
  
  
  Vue.component("goods-item", {
    props:["goodProp"],
    methods: {
        async addToCart(e) {
        console.log(this.goodProp);
        await fetch(`${API_URL}/addToCart`, {
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
  }); //export const GOODS_ITEM = 

  export default 'goods-item';