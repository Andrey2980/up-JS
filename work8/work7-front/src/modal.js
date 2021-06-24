

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
  }); //export const MODAL = 

  export default 'modal';