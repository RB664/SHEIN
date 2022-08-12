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
              <div class="logocontainer">
                S H E I N
              </div>
          </router-link>
            </li>
          <li class="nav-item dropdown" id="usericon">
            <div class="iconcontainer">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                <i class="bi bi-person"></i>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <routerLink to="/register" class="dropdown-item">Register</routerLink>
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
  bottom: 25%;
}

#bagicon{
  position: absolute;
  right:6%;
  bottom: 24%;
}

li{
  list-style: none;
}

  /* works but non resposnsive */


/* #bagicon{

} */

.nav-link {
  font-size: 20px;
  margin-top: 10px;
}

/* .dropdown-menu{
  display: flex;
  justify-content: end;
  align-items: flex-end;
} */
</style>

<script>
export default {
  name: 'Navigation'
}

</script>