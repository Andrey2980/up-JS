
Vue.component("goods-list", {
    props:["goods"], 
    template: `
    <div class="goods-list">
      <goods-item v-for="goodEntity in goods" :goodProp="goodEntity"></goods-item>
    </div>
      ` 
  }); //const GOODS_LIST =

  export default 'goods-list';

