<template>
<section id="womenProducts">
    <div v-if="products">
    <div v-for="product in products" :key="product">
    <h2>{{product.title}}</h2>
    <img :src="product.imgURL" alt="">
    </div>
</div>
</section>
</template>

<script>
export default {
computed: {
    products() {
       return this.$store.state.products
    }
},
mounted() {
    return this.$store.dispatch("getProducts")
},
}
 
</script>

<style>
#womenProducts {
    min-height: 100vh;
    /* background-color: black; */
}
</style>