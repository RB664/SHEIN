<template>
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img id="carouselimg" src="https://i.postimg.cc/sXsvzkW8/Women-1.jpg" class="d-block" alt="...">
    </div>
    <div class="carousel-item">
      <img id="carouselimg" src="https://i.postimg.cc/2y8mj0JG/something.webp" class="d-block" alt="...">
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
      <img id="womenposters" src="https://i.postimg.cc/Cx6VJMWh/Women-Page.jpg" alt="">
    </div>
    <div>
      <h1 id="headings">#dailydrops</h1>
        <div class="row">
          <div class="col-lg-6">
            <img id="womenposters" src="https://i.postimg.cc/nL7w7Hxw/Women-dp-1.webp" alt="">
          </div>
          <div class="col-lg-6">
            <img id="womenposters" src="https://i.postimg.cc/nrw1g5ZD/Women-dp-2.webp" alt="">
          </div>
        </div>
    </div>
   <div class="row">
      <h1 id="headings">Brands</h1>
      
        <img id="sheglam" src="https://i.postimg.cc/rwx8JnBn/Brand-1.png" alt="">
    
        <img id="motf" src="https://i.postimg.cc/MGdt1X45/Brand-2.png" alt="">
    
        <img id="romwe" src="https://i.postimg.cc/7ZF5PTkc/Brand-3.jpg" alt="">
    
        <img id="emeryrose" src="https://i.postimg.cc/9Ft2wRZK/Brand-4.jpg" alt="">
  
        <img id="dazy" src="https://i.postimg.cc/50M1F4Hs/Brand-5.png" alt="">
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
    <div id="seemore">
    <router-link to="/womenproducts">See more-></router-link>
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

#womenposters{
  object-fit: cover;
  width: 100%;
  height: 500px;
}

#sheglam{
  border: 1px solid black;  
}

#motf{
  border: 1px solid black;
  height: 270px;
}

#romwe{
  border: 1px solid black;
  height: 270px;
}

#emeryrose{
  border: 1px solid black;
  height: 270px;
}

#dazy{
  border: 1px solid black;
  height: 270px;
}

#seemore{
  padding-left: 600px;
  margin-bottom: 30px;
  font-size: x-large;
}
</style>