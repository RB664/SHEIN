<template>
 <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img id="carouselimg" src="https://i.postimg.cc/wvzG2mWY/Kids-1.png" class="d-block" alt="...">
    </div>
    <div class="carousel-item">
      <img id="carouselimg" src="https://i.postimg.cc/kX2fxsnt/Kids-2.jpg" class="d-block" alt="...">
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
      <img id="kidposters" src="https://i.postimg.cc/d3jvnFR4/Women-2.jpg" alt="">
    </div>
    <div>
      <h1 id="headings">#dailydrops</h1>
      <img id="kidposters" src="https://i.postimg.cc/C1QjhQrH/Kid-page-1.jpg" alt="">
    </div>
    <div>
      <h1 id="headings">Brands</h1>
      <img id="kidposters" src="https://i.postimg.cc/4x7jsD8w/Kid-page.png" alt="">
    </div>
    <div class="row" id="productsrow">
      <h1 id="headings">Kids</h1>
      <div id="kidsclothesc" class="card">
        <router-link to="/allproduct/8">
          <img id="kidclothes" src="https://i.postimg.cc/YSCHDYDW/ID-9.webp" alt="">
        </router-link>
      </div>
      <div id="kidsclothesc" class="card">
        <router-link to="/allproduct/5">
          <img id="kidclothes" src="https://i.postimg.cc/GpWXT1Dm/ID-13.webp" alt="">
        </router-link>
      </div>
      <div id="kidsclothesc" class="card">
        <router-link to="/allproduct/13">
          <img id="kidclothes" src="https://i.postimg.cc/Vk3637MC/ID-2.webp" alt="">
        </router-link>
      </div>
      <div id="kidsclothesc" class="card">
        <router-link to="/allproduct/7">
          <img id="kidclothes" src="https://i.postimg.cc/2ypgYZGT/ID-11.webp" alt="">
        </router-link>
      </div>
      <div id="kidsclothesc" class="card">
        <router-link to="/allproduct/9">
          <img id="kidclothes" src="https://i.postimg.cc/pVGPwGML/ID-6.webp" alt="">
        </router-link>
      </div>
    </div> 
    <div id="seemore" class="container">
    <router-link to="/allproducts">See more-></router-link>
  </div> 
  </div>
</template>

<style scoped>
#carouselimg{
  width: 100%;
  height:auto;
  object-fit: cover;
}

#headings{
  text-align: center;
}
#kidclothes{
  width: 250px;
  height: 300px;
  height: auto;
  object-fit: cover;
}

#productsrow{
    gap: 5px;
}

.card{
  width: 260px;
  height: 310px;
  border: none;
}

#kidposters{
  object-fit: cover;
  width: 100%;
  height: auto;
  display: block;
}

#seemore{
  margin-bottom: 30px;
  padding-top: 30px;
  font-size: x-large;
  display: flex;
  align-items: center;
  justify-content: center;
  float:  center;
}
</style> 
