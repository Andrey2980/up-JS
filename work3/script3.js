const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/'

class GoodsItem {
    constructor(title, price, id) {
        this.title = title;
        this.price = price;
        this.id = id;
        //this.src = src;
    }

    render() {
        return `<div class="goods-item" itemId=${this.id}><h3>${this.title}</h3>
        <p>${this.price}</p></div>`
    }

}

class GoodsList {
    constructor() {
        this.goods = [];
    }

    // fethGoods() {
    //     const responce = window.fetch(`${API_URL}/catalogData.json`) //promice
    //         .then(data => data.json())// получаем data
    //         .then((catalogItems) => {
    //             console.log(catalogItems)
    //         }); 

    //     this.goods = [
    //     {title:'Shirt',  price: 150},
    //     {title:'Socks',  price: 140},
    //     {title:'Jacket', price: 350},
    //     {title:'Boots',  price: 900},
    //     ]
    // }

    async fethGoods() {
        const responce = await fetch(`${API_URL}/catalogData.json`)
        if (responce.ok) {
            const catalogItems = await responce.json()
            this.goods = catalogItems;
            
            console.log(catalogItems)
            console.log(responce)
        }

        else {
            alert ('Ошибка при соединении с сервером')
        }
        
        
    }

    render () {
        let listHtml = "";

        this.goods.forEach((good) => {
        const goodItem = new GoodsItem(good.product_name, good.price, good.id_product);
        listHtml += goodItem.render();
        });

        console.log(listHtml)

        document.querySelector('.goods-list').innerHTML = listHtml;

    }

}

const init = async () => {

    const list = new GoodsList()
    await list.fethGoods();
    list.render()

};

    window.onload = init;


/*const init = () => {
    setTimeout(() => {
        console.log('Hi')
    }, 5000)
    setInterval(() => {
        console.log('Назойливый попап')
    }, 2000)
};

window.onload = init;*/