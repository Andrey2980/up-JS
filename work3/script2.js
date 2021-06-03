const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/'

function makeGETRequest(url, callback) {
  const xhr = new window.XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      callback(xhr.responseText);
    }
  };

  xhr.open('GET', url, true)
  xhr.send()

}

  class GoodsItem {
    constructor(title, price) {
      this.title = title;
      this.price = price;
      //this.src = src;
    }

    render() {
      return `<div class="goods-item"><h3>${this.title}</h3>
      <p>${this.price}</p></div>`
    }

  }

  class GoodsList {
    constructor() {
      this.goods = [];
    }

    fetchGoods(callback) {
      
      makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
        console.log(goods)
        this.goods = JSON.parse(goods);
        callback();
      });

      this.goods = [
        {title:'Shirt',  price: 150},
        {title:'Socks',  price: 140},
        {title:'Jacket', price: 350},
        {title:'Boots',  price: 900},
      ];
    }

    render () {
      let listHtml = ""
      this.goods.forEach((good) => {
        const goodItem = new GoodsItem(
          good.product_name,
          good.price,
          good.id_product
          );
        listHtml += goodItem.render()
      });
      console.log(listHtml)
      document.querySelector('.goods-list').innerHTML = listHtml


    }

  }


const init = () => {
  const list = new GoodsList()
  list.fetchGoods(() => {
      list.render();
  });
};

window.onload = init;