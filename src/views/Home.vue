<template>
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img id="carouselimg1" src="https://i.postimg.cc/gcN2vkn7/Tom-and-jerry.jpg" class="d-block" alt="...">
    </div>
    <div class="carousel-item">
      <img id="carouselimg1" src="https://i.postimg.cc/Z0t79htx/artist.jpg" class="d-block" alt="...">
    </div>
    <div class="carousel-item">
      <img id="carouselimg1" src="https://i.postimg.cc/wBjpxDkT/accessories.jpg" class="d-block" alt="...">
    </div>
    <div class="carousel-item">
      <img id="carouselimg1" src="https://i.postimg.cc/bwzXL1WH/Back-to-school-style.jpg" class="d-block" alt="...">
    </div>
    <div class="carousel-item">
      <img id="carouselimg1" src="https://i.postimg.cc/gjv5H0KT/look-good-feel-good.jpg" class="d-block" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div class="container">
    <div class="row" id="productsrow">
      <h1 id="headings">Men</h1>
      <div class="card">
        <router-link to="/allproduct/40">
          <img id="mensclothes" src="https://i.postimg.cc/KztZSxFX/ID-1.webp" alt="">
        </router-link>
      </div>
      <div class="card">
        <router-link to="/allproduct/28">
          <img id="mensclothes" src="https://i.postimg.cc/TPFrNq27/ID-15.webp" alt="">
        </router-link>
      </div>
      <div class="card">
        <router-link to="/allproduct/32">
          <img id="mensclothes" src="https://i.postimg.cc/P5bzx84N/ID-10.webp" alt="">
        </router-link>
      </div>
      <div class="card">
        <router-link to="/allproduct/30">
          <img id="mensclothes" src="https://i.postimg.cc/s2D6Ccr3/ID-13.webp" alt="">
        </router-link>
      </div>
      <div class="card">
        <router-link to="/allproduct/39">
          <img id="mensclothes" src="https://i.postimg.cc/yxvCsNbG/ID-2.webp" alt="">
        </router-link>
      </div>
    </div> 
    <div class="row" id="productsrow">
      <h1 id="headings">Women</h1>
      <div class="card" >
        <router-link to="/allproduct/25">
          <img id="womensclothes" src="https://i.postimg.cc/XvyHQvcb/ID-4.webp" alt="">
        </router-link>
      </div>
      <div class="card">
        <router-link to="/allproduct/21">
          <img id="womensclothes" src="https://i.postimg.cc/dtL88x9M/ID-8.webp" alt="">
        </router-link>
      </div>
      <div class="card">
        <router-link to="/allproduct/18">
          <img id="womensclothes" src="https://i.postimg.cc/s2wXHVVT/ID-11.webp" alt="">
        </router-link>
      </div>
      <div class="card">
        <router-link to="/allproduct/19">
          <img id="womensclothes" src="https://i.postimg.cc/k4gV721r/ID-10.webp" alt="">
        </router-link>
      </div>
      <div class="card">
        <router-link to="allproduct/27">
          <img id="womensclothes" src="https://i.postimg.cc/mk3KVr4D/ID-1.webp" alt="">
        </router-link>
      </div>
      </div> 
    <div class="row" id="productsrow">
      <h1 id="headings">Kids</h1>
      <div class="card">
        <router-link to="/allproduct/8">
          <img id="kidsclothes" src="https://i.postimg.cc/YSCHDYDW/ID-9.webp" alt="">
        </router-link>
      </div>
      <div class="card">
        <router-link to="/allproduct/5">
          <img id="kidsclothes" src="https://i.postimg.cc/GpWXT1Dm/ID-13.webp" alt="">
        </router-link>
      </div>
      <div class="card">
        <router-link to="/allproduct/13">
          <img id="kidsclothes" src="https://i.postimg.cc/Vk3637MC/ID-2.webp" alt="">
        </router-link>
      </div>
      <div class="card">
        <router-link to="/allproduct/7">
          <img id="kidsclothes" src="https://i.postimg.cc/2ypgYZGT/ID-11.webp" alt="">
        </router-link>
      </div>
      <div class="card">
        <router-link to="/allproduct/9">
          <img id="kidsclothes" src="https://i.postimg.cc/pVGPwGML/ID-6.webp" alt="">
        </router-link>
      </div>
    </div> 
  </div>
</template>

<style scoped>
#carouselimg1{
  width: 100%;
  height: auto;
  object-fit: cover;
}

#headings{
  text-align: center;
}

#productsrow{
    gap: 5px;
    justify-content: center;
    margin-top:20px ;
    margin-bottom: 30px;;
}

.card{
  width: 260px;
  height: 310px;
  border: none;
}

#mensclothes{
  width: 250px;
  height: 300px;
  height: auto;
  object-fit: cover;
}

#womensclothes{
  width: 250px;
  height: 300px;
  height: auto;
  object-fit: cover;
}

#kidsclothes{
  width: 250px;
  height: 300px;
  height: auto;
  object-fit: cover;
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