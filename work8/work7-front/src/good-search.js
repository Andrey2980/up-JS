
Vue.component ("goods-search", {
    props: ['value'],
    template: `
    <input type="text" class="goods-search"
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)" 
        placeholder="search"
        >
    `,
}); //export const GOOD_SEARCH = 

export default 'goods-search';