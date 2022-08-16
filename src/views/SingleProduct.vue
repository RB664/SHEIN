<template>
    <div class="container" id="product-container">
    <div v-if="product" class="row" id="productrow">
        <div class="col-md-5">
            <img id="productimg" :src="product.imgURL" alt="">
        </div>
        <div class="col-md-4">
            <h2>For {{product.title}}</h2>
            <p>{{product.description}}</p>
            <p>Price: R{{product.price}}</p>
            <button id="addtobag">Add to Bag</button>
        </div>
    </div>
    </div>
</template>

<style>
#productimg{
    width:500px;
    height: auto;
    object-fit: cover;
    top: 10px;
}

#productrow{
    margin: 10px;
}

#addtobag{
    width:250px;
}

@media only screen and (min-width:300px ) and (max-width:301px ) {
    #productimg{
    width:100%;
    height: auto;
    object-fit: cover;
    top: 10px;
    margin-right: 15px;
}
}
@media only screen and (min-width:320px ) and (max-width:321px ) {
    #productimg{
    width:100%;
    height: auto;
    object-fit: cover;
    top: 10px;
    margin-right: 15px;
}
}
@media only screen and (min-width:375px ) and (max-width:376px ) {
    #productimg{
    width:100%;
    height: auto;
    object-fit: cover;
    top: 10px;
    margin-right: 15px;
}
}
@media only screen and (min-width:425px ) and (max-width:426px ) {
    #productimg{
    width:100%;
    height: auto;
    object-fit: cover;
    top: 10px;
    margin-right: 15px;
}
}
@media only screen and (min-width:768px ) and (max-width:769px ) {
    #productimg{
    width:100%;
    height: auto;
    object-fit: cover;
    top: 10px;
    margin-right: 15px;
}
}
@media only screen and (min-width:1024px ) and (max-width:1025px ) {
    #productimg{
    width:100%;
    height: auto;
    object-fit: cover;
    top: 10px;
    margin-right: 15px;
}
}

</style>

<script>
export default {
    props: ['product_Id'],
    computed: {
        product() {
            return this.$store.state.product
        }
    },
    mounted() {
        this.$store.dispatch("getProduct", this.$route.params.id)
    },
}

</script>