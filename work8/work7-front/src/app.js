import goodsList from "./goods-list";
import goodsItem from "./goods-item";
import basketItems from "./basket-items";
import cartTotalPrice from "./cart-total-price";
import totalProductsValue from "./total-products-value";
import goodSearch from "./good-search";
import modalCart from "./modal-cart";
import modal from "./modal";

// goodsList;
// goodsItem;
// basketItems;
// cartTotalPrice;
// totalProductsValue;
// goodSearch;
// modalCart;
// modal;



// GOODS_LIST;
// GOODS_ITEM;// BASKET_ITEMS;
// CART_TOTAL_PRICE;
// TOTAL_PRODUCT_VALUE;
// GOOD_SEARCH;
// MODAL_CART;
// MODAL;

const API_URL = "http://127.0.0.1:3000";



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
        if (responce.ok) {
            const catalogItems = await responce.json();
            this.goods = catalogItems;
            this.filteredGoods = catalogItems;
        } else {
            alert("Ошибка при соединении с сервером");
        }
    },

    
    },

    async mounted() {
        await this.getProducts();
    },
});
