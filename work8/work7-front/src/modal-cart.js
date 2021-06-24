
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
}); //export const MODAL_CART = 

export default 'modal-cart';