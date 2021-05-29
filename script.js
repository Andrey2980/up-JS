
const goods = [
    {title:'Shirt',  price: 150, description: "lorem ipsum sit dolar"},
    {title:'Socks',  price: 140, description: "lorem ipsum sit dolar"},
    {title:'Jacket', price: 350, description: "lorem ipsum sit dolar"},
    {title:'Shoes',  price: 250, description: "lorem ipsum sit dolar"},
    
]

// картинку при данном методе перебора добавить нельзя, так как list.map :-(

const renderGoodsItem = (title, price, description) => {
    
    return `<div class="goods-item"><h3 class="item-list">Наименование товара:<br>${title}</h3>
    <p class="cart-description">${description}</p>
    <p>Цена товара:${price}</p><bottom class="cart-btn">Добавить</bottom></div>`
}



const renderGoodsList = list => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price, item.description))
    //let goodsList = list.forEach(item => renderGoodsItem(item.title, item.price, item.description))
    

    document.querySelector('.goods-list').innerHTML = goodsList
    goodsList.join("")

}

// const quantitu = 0;
// quantity++;
//     
//         function postponedProduct () {
//             const addingPoints = document.querySelector(".quantity");
//             let points =`<span id="quantity-value" class="value">${quantity}</span>`;
//             postponedProduct.innerHTML = value; 
//     } 
// postponedProduct(quantity);

const init = () => {
    
    renderGoodsList(goods)
}


window.onload = init


const modalButtonCart = document.querySelector(".cart-button");  
  modalButtonCart.onclick = function() {                       
    showModalCart()
  }

  function showModalCart() {  
    const modalCart = document.querySelector(".modalwindow"); 
    modalCart.style.display = "block";        
    setTimeout(function() {              
      modalCart.style.opacity = 1           
    }, 100);
    
    const hideButtonCart = document.querySelector(".cart-hide-btn") 
    hideButtonCart.onclick = function() {  
      modalCart.style.display = "";   
      hideButtonCart.onclick = null;     
    }
  }