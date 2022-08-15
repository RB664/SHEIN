<template>
    <Navigation/>

    <router-view/>

  <div class="container">
  <footer>
        <div class="row">
        <div class="col-lg-6">
          <div class="row">
            <div class="col-md-4">
            <strong id="fh">COMPANY INFO</strong>
            <ul>
              <li id="flink" >About SHEIN</li>
              <li id="flink" >Affiliate</li>
              <li id="flink" >Fashion Blogger</li>
            </ul>
          </div>
          <div class="col-md-4">
            <strong id="fh">HELP & SUPPORT</strong>
            <ul>
              <li id="flink" >Shipping Info</li>
              <li id="flink" >Returns</li>
              <li id="flink" >How To Order</li>
              <li id="flink" >How To Track</li>
              <li id="flink" >Size Guide</li>
              <li id="flink" >Social Responsibility</li>
              <li id="flink" >SHEIN VIP</li>
            </ul>
          </div>
          <div class="col-md-4">
            <strong id="fh">CUSTOMER CARE</strong>
            <ul>
              <li id="flink" >Contact Us</li>
              <li id="flink" >Payment Method</li>
              <li id="flink" >Bonus Point</li>
            </ul>
          </div>
          <div>
            <p>&copy;2009-20222 SHEIN All Righgts Reserved</p>
            <p>
              <a href="" id="flinks">Privacy Center</a> |
              <a href="" id="flinks">Privacy & Cookie Policy</a> |
              <a href="" id="flinks">Terms & Conditions</a> |
              <a href="" id="flinks">Copyright Notice</a> |
              <a href="" id="flinks">Imprint</a> |
              <a href="" id="flinks"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
</svg>South Africa</a>
            </p>
          </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="row">
            <div class="col-md-6">
            <strong>FIND US ON</strong>
            <div>
            <a href="" id="facebook"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="" id="grayicons"><i class="fa-brands fa-instagram"></i></a>
            <a href="" id="blackicons"><i class="fa-brands fa-twitter"></i></a>
            <a href="" id="grayicons"><i class="fa-brands fa-youtube"></i></a>
            <a href="" id="blackicons"><i class="fa-brands fa-pinterest-p"></i></a>
            <a href="" id="grayicons"><i class="fa-brands fa-snapchat"></i></a>
            <a href="" id="blackicons"><i class="fa-brands fa-tiktok"></i></a>
            </div>   
          </div>
          <div class="col-md-6">
            <strong>APP</strong>
            <div>
            <a href="" id="grayicons"><i class="fa-brands fa-apple"></i></a>
            <a href="" id="grayicons"><i class="bi bi-android2"></i></a>
            </div>
          </div>
          </div>
          <div>
            <strong>SIGN UP FOR SHEIN STYLE NEWS</strong>
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Your Email Address" aria-label="Recipient's username" aria-describedby="button-addon2">
              <button  class="btn btn-outline-secondary" type="button" id="button-addon2">SUBSCRIBE</button>
            </div>
            <strong id="fh">WE ACCEPT</strong>
            <div>
            <img id="we-accept" src="https://i.postimg.cc/NMXX9kPc/visa-blue-gradient-800x450.jpg" alt="">
            <img id="we-accept" src="https://i.postimg.cc/bvtr3N00/Master-Card.png" alt="">
            <img id="we-accept" src="https://i.postimg.cc/tCvgbV2t/Maestro-2016-svg.png" alt="">
            <img id="we-accept" src="https://i.postimg.cc/FKmVQqPL/American-Express.png" alt="">
            <img id="we-accept" src="https://i.postimg.cc/ZR69KKCY/Diners-Club.png" alt="">
            <img id="we-accept" src="https://i.postimg.cc/ZRmbHP5Z/download.png" alt="">
            <img id="we-accept" src="https://i.postimg.cc/MHMj2bV4/Paypal.png" alt="">
            <img id="we-accept" src="https://i.postimg.cc/7PWvYMr6/trustwave-1.webp" alt="">
            <img id="we-accept" src="https://i.postimg.cc/3wBVM2Z3/dmca-logo.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
</template>

<style>
*{
  margin: 0;
  padding: 0;
 
}
#app {}

#we-accept{
  height: 50px;
  margin-left: 20px;
  margin-top: 10px;
}

#blackicons{
  color: black;
  margin-left: 10px;
  font-size: 30px;
}

#grayicons{
  color: rgb(65, 65, 65);
  margin-left: 15px;
  font-size: 30px;
}

#facebook{
  color: black;
  font-size: 30px;
}

#flink{
  text-decoration: none;
  list-style: none;
  padding: 0;
  margin: 0;
}

#flinks{
  color: rgb(65, 65, 65);;
}

@media only screen and (min-width:300px) and (max-width:301px) {
  #fh{
    margin-left: 70px;
  }
  #flink{
    text-align: center;
    margin-right: 50px;
  }
  
  #we-accept{
    height: 35px;
  }
}
@media only screen and (min-width:320px) and (max-width:321px) {
  #fh{
    margin-left: 70px;
  }
  #flink{
    text-align: center;
    margin-right: 50px;
  }
  
  #we-accept{
    height: 35px;
  }
}
@media only screen and (min-width:375px) and (max-width:376px) {
  #fh{
    margin-left: 110px;
  }
  #flink{
    text-align: center;
    margin-right: 50px;
  }
  
  #we-accept{
    height: 35px;
  }
}
@media only screen and (min-width:425px) and (max-width:426px) {
  #fh{
  margin-left: 130px;
  }
  #flink{
    text-align: center;
    margin-right: 50px;
  }
  
  #we-accept{
    height: 35px;
  }
}
</style>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'


export default {
  components: {
    Navigation,
}
}
</script>