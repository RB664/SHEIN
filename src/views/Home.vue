<template>
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img id="carouselimg" src="https://i.postimg.cc/gcN2vkn7/Tom-and-jerry.jpg" class="d-block" alt="...">
    </div>
    <div class="carousel-item">
      <img id="carouselimg" src="https://i.postimg.cc/Z0t79htx/artist.jpg" class="d-block" alt="...">
    </div>
    <div class="carousel-item">
      <img id="carouselimg" src="https://i.postimg.cc/wBjpxDkT/accessories.jpg" class="d-block" alt="...">
    </div>
    <div class="carousel-item">
      <img id="carouselimg" src="https://i.postimg.cc/bwzXL1WH/Back-to-school-style.jpg" class="d-block" alt="...">
    </div>
    <div class="carousel-item">
      <img id="carouselimg" src="https://i.postimg.cc/gjv5H0KT/look-good-feel-good.jpg" class="d-block" alt="...">
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
    <div class="row">
      <h1 id="headings">Men</h1>
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
    <div class="row">
      <h1 id="headings">Women</h1>
      <div id="womensclothesc1" class="col-lg-2">
        <img id="womensclothes" src="https://i.postimg.cc/MTM4TWLT/Womens-Clothes-1.png" alt="">
      </div>
      <div id="womensclothesc" class="col-lg-2">
        <img id="womensclothes" src="https://i.postimg.cc/kXFHDYTx/Womens-Clothes-2.png" alt="">
      </div>
      <div id="womensclothesc" class="col-lg-2">
        <img id="womensclothes" src="https://i.postimg.cc/fysKNDn1/Womens-Clothes-3.png" alt="">
      </div>
      <div id="womensclothesc" class="col-lg-2">
        <img id="womensclothes" src="https://i.postimg.cc/VvzjhgX8/Womens-Clothes-4.png" alt="">
      </div>
      <div id="mensclothesc" class="col-lg-2">
        <img id="womensclothes" src="https://i.postimg.cc/Xq2yzbVf/Womens-Clothes-5.png" alt="">
      </div>
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
  </div>
  <Footing/>
</template>

<style>
#carouselimg{
  width: 100%;
  height: 500px;
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
  margin-left: 42px;
  margin-top: 20px;
  margin-bottom: 20px;
}
#womensclothes{
  width: 250px;
  height: 300px;
  height: auto;
  object-fit: cover;
}

#womensclothesc1{
  margin-top: 20px;
  margin-bottom: 20px;
}

#womensclothesc{
  margin-left: 42px;
  margin-top: 20px;
  margin-bottom: 20px;
}
#kidsclothes{
  width: 250px;
  height: 300px;
  height: auto;
  object-fit: cover;
}

#kidsclothesc1{
  margin-top: 20px;
  margin-bottom: 20px;
}

#kidsclothesc{
  margin-left: 42px;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>

