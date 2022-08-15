<template>
  <nav class="navbar navbar-expand-sm bg-light sticky-top">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/home">HOME</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/men">MEN</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/women">WOMEN</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/kids">KIDS</router-link>
          </li>
        </ul>
      </div>
      <div>
         <li class="nav-item">
          <router-link id="logo2" class="nav-link" to="/home">
              <div>
                S H E I N
              </div>
          </router-link>
            </li>
          <li class="nav-item dropdown" id="usericon">
            <div class="iconcontainer">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
              >
                <i class="bi bi-person"></i>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <div>
                    <routerLink to="/register" class="dropdown-item">Register</routerLink>
                  </div>
                </li>
                <li>
                  <routerLink to="/login" class="dropdown-item">Login</routerLink>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <div>
              <router-link class="nav-link" to="/bag">
                <i id="bagicon" class="bi bi-bag"></i>
              </router-link>
            </div>
          </li>
      </div>
    </div>
  </nav>

</template>

<style>
#logo2 {
  font-size: 40px;
  font-weight: 700;
  color: black;
  position: absolute;
  left: 45%;
  top:0%;
}

#usericon{
  position: absolute;
  right: 8%;
  top: 15%;
}

#bagicon{
  position: absolute;
  right:6%;
  top: 15%;
}

li{
  list-style: none;
}

.nav-link {
  font-size: 20px;
}

@media only screen and (min-width:300px) and (max-width: 301px) {
  #logo2{
    left: 35%;
    font-size: 25px;
    top: 5%;
    margin-top: 5px;
  }

  #usericon{
    margin-right: 15px;
    top: 0%;
    margin-top: 10px;
  }

  #bagicon{
    top: 0%;
    margin-top: 10px;
  }
}
@media only screen and (min-width:320px) and (max-width: 321px) {
  #logo2{
    left: 30%;
    font-size: 30px;
    top: 0%;
    margin-top: 5px;
  }

  #usericon{
    margin-right: 15px;
    top: 0%;
    margin-top: 10px;
  }

  #bagicon{
    top: 0%;
    margin-top: 10px;
  }
}

@media only screen and (min-width:375px) and (max-width: 376px) {
  #logo2{
    left: 33%;
    font-size: 30px;
    top: 0%;
    margin-top: 5px;
  }

  #usericon{
    margin-right: 20px;
    top: 0%;
    margin-top: 10px;
  }

  #bagicon{
    top: 0%;
    margin-top: 10px;
  }
}

@media only screen and (min-width:425px) and (max-width: 426px) {
  #logo2{
    left: 33%;
    font-size: 30px;
    top: 0%;
    margin-top: 5px;
  }

  #usericon{
    margin-right: 20px;
    top: 0%;
    margin-top: 10px;
  }

  #bagicon{
    top: 0%;
    margin-top: 10px;
  }
}

@media only screen and (min-width:768px) and (max-width: 769px) {
#usericon{
    right: 10%;
    top: 0%;
    margin-top: 10px;
  }

}
</style>

<script>
export default {
  name: 'Navigation'
}

</script>