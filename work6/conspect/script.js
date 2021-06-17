// const API_URL =
//   "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";


Vue.component("some-component", {              // компоненты объявляются до объекта new Vue
  template: "<h1>{{name}} {{surname}}</h1>",
  props: ["name", "surname"], // позволяет внутри тега указываеть необходимые данные, например атрибуты
  // data() {
  //   return { name: "Andrey", surname: "Azarov"};
  // },
});

const app = new Vue({
  el: "#app",
  data: {
    secondName: "Sauron",
    secondSurname: "Sauronovich"
  }


});

