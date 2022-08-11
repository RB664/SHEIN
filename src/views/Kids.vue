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
    <div class="row">
      <h1 id="headings">Kids</h1>
      <div id="kidsclothesc1" class="col-lg-2">
        <img id="kidsclothes" src="https://i.postimg.cc/TYwkY2WX/Kids-Clothes-1.png" alt="">
      </div>
      <div id="kidsclothesc" class="col-lg-2">
        <img id="kidsclothes" src="https://i.postimg.cc/0NgZfpX8/Kids-Clothes-2.png" alt="">
      </div>
      <div id="kidsclothesc" class="col-lg-2">
        <img id="kidsclothes" src="https://i.postimg.cc/Wz473Sz7/Kids-Clothes-3.png" alt="">
      </div>
      <div id="kidsclothesc" class="col-lg-2">
        <img id="kidsclothes" src="https://i.postimg.cc/HLC45Tjn/Kids-Clothes-4.png" alt="">
      </div>
      <div id="kidsclothesc" class="col-lg-2">
        <img id="kidsclothes" src="https://i.postimg.cc/d3XG0Yzq/Kids-Clothes-5.png" alt="">
      </div>
    </div>
    <div id="seemore">
    <router-link to="/kidproducts">See more-></router-link>
  </div> 
  </div>
</template>

<style>
#carouselimg{
  width: 100%;
  height: 600px;
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

#kidclothesc1{
  margin-top: 20px;
  margin-bottom: 20px;
}

#kidclothesc{
  margin-left: 42px;
  margin-top: 20px;
  margin-bottom: 20px;
}

#kidposters{
  object-fit: cover;
  width: 100%;
  height: 500px;
  display: block;
}

#seemore{
  padding-left: 600px;
  margin-bottom: 30px;
  font-size: x-large;
}
</style> 
