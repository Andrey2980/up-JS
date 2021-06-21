const API_URL = "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";


const app = new Vue({
  el: "#app",
  data: {
    name: "Andrey",
    surname: "Azarov",
    listOfName: ["Andrey",
      "Roman",
      "Anytka",
      "Ira",
      "Elena",
      "Kolya"
    ],
    listOfCart: [
      {name:"comp", price:"1500"},
      {name:"mouse", price:"250"},
      {name:"keyboard",price:"350"}
    ],
  },
  methods: {
    onClickSayHello:(e) => {
      console.log(e)
      console.log(`Hello ${e.target.innerText}!`) // обработка событи
    },
  },

  // преобразуем данные в скрипте в обход HTML surname - из data

  computed: {   
        transformToUpperCase() {
        return this.surname.toUpperCase()
      },
    },
});


// const app = new Vue({
//   el: "#app",
//   data: {
//     goods: [],
//     filteredGoods: [],
//     searchLine: '',
//   },

//   methods: {
//     async getProducts() {
//       const responce = await fetch(`${API_URL}/catalogData.json`);
//       if (responce.ok) {
//         const catalogItems = await responce.json();
//         this.goods = catalogItems;
//         this.filteredGoods = catalogItems;
//       } else {
//         alert ("Ошибка соединения с сервером");
//       }
//     },
//   },

//   async mounted() {
//     await this.getProducts()
//   }
// });







