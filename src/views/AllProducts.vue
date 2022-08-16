<template>
    <div class="products-container">
        <div v-if="products" class="row" id="productsrow">
            <div v-for="product of products" :key="product.id" class="card">
                <router-link :to="{ name: 'singleproduct', params: { id: product.product_Id } }">
                    <img id="productsimg" :src="product.imgURL" alt="">
                    <div class="card-body">
                        <h2 id="price">R{{ product.price }}</h2>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
#productsrow{
    gap: 50px;
    justify-content: center;
}

.card {
    width: 290px;
    height: 470px;
    border: none;
}

#productsimg {
    width: 265px;
    height: 400px;
    margin-right:15px;
    margin-top: 5px;
    object-fit: cover;
    border: 1px solid black;
}

a{
    color: white;
    text-decoration: none;
}
#price {
    text-align: center;
    color:black;
    text-decoration: none;
}
</style>

<script>
export default {
    computed: {
        products() {
            return this.$store.state.products
        }
    },
    mounted() {
        this.$store.dispatch("getProducts")
    },
}

</script>