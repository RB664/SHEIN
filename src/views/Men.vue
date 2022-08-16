<template>
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img id="carouselimg" src="https://i.postimg.cc/HL6Y1dFK/Men-1.jpg" class="d-block" alt="...">
    </div>
    <div class="carousel-item">
      <img id="carouselimg" src="https://i.postimg.cc/HxfjFTym/Men-2.jpg" class="d-block" alt="...">
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
    <div>
      <h1 id="headings">#SHEINcampaigns</h1>
      <img id="menposters" src="https://i.postimg.cc/rF1ZFbDT/Men-Tom-and-Jerry.webp" alt="">
    </div>
    <div>
      <h1 id="headings">#dailydrops</h1>
      <img id="menposters" src="https://i.postimg.cc/Y0q0GTtP/Mens-Page.webp" alt="">
    </div>
    <div>
      <h1 id="headings">Brands</h1>
      <img id="menposters" src="https://i.postimg.cc/fyLWTXKn/Mens-Page-2.webp" alt="">
    </div>

    <h1 id="headings">Men</h1>
    <div class="row" id="productsrow">
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
  <div id="seemore" class="container">
    <router-link to="/allproducts">See more-></router-link>
  </div> 
  </div>
</template>

<style scoped>
#productsrow{
  gap: 5px;
  justify-content: center;
}
.card{
  width: 260px;
  height: 310px;
  border: none;
}

#carouselimg{
  width: 100%;
  height: auto;
  object-fit: cover;
}

#headings{
  text-align: center;
}
#mensclothes{
  width: 250px;
  height: 300px;
  object-fit: cover;
}

#menposters{
  object-fit: cover;
  width: 100%;
  height: auto;
}

#seemore{
  margin-bottom: 30px;
  font-size: x-large;
  display: flex;
  justify-content: center;
}

</style>