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
    <div class="row">
      <div id="mensclothesc1" class="col-lg-2">
        <img id="mensclothes" src="https://i.postimg.cc/hGNTWDb0/Mens-Clothes-1.png" alt="">
      </div>
      <div id="mensclothesc" class="col-lg-2">
        <img id="mensclothes" src="https://i.postimg.cc/029mqHmh/Mens-Clothes-2.png" alt="">
      </div>
      <div id="mensclothesc" class="col-lg-2">
        <img id="mensclothes" src="https://i.postimg.cc/J0xsnMJv/Mens-Clothes-3.png" alt="">
      </div>
      <div id="mensclothesc" class="col-lg-2">
        <img id="mensclothes" src="https://i.postimg.cc/mkksYsJ0/Mens-Clothes-4.png" alt="">
      </div>
      <div id="mensclothesc" class="col-lg-2">
        <img id="mensclothes" src="https://i.postimg.cc/fRmhj5qT/Mens-Clothes-5.png" alt="">
      </div>
    </div>
  <div id="seemore" class="container">
    <router-link to="/menproducts">See more-></router-link>
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
#mensclothes{
  width: 250px;
  height: 300px;
  height: auto;
  object-fit: cover;
}

#mensclothesc1{
  margin-top: 20px;
  margin-bottom: 20px;
}

#mensclothesc{
  margin-top: 20px;
  margin-bottom: 20px;
}

#menposters{
  object-fit: cover;
  width: 100%;
  height: 500px;
}

#seemore{
  margin-bottom: 30px;
  font-size: x-large;
  display: flex;
  align-items: center;
  justify-content: center;
  float:  center;
}
</style>