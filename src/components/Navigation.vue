<template>
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
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
        <li class="nav-item">
          <router-link id="logo2" class="nav-link" to="/">S H E I N</router-link> 
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/">
            <i id="usericon" class="bi bi-person"></i>
          </router-link> 
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/">
            <i id="bagicon" class="bi bi-bag"></i>
          </router-link> 
        </li>
      </ul>
     </div>
    </div>
  </nav>
  
</template>

<style>
#logo{
  width: 200px;
  height: 30px;
  margin-left: 300px;
}
#logo2{
  font-size: 40px;
  font-weight: 700;
  color: black;
  padding-left: 450px;
}

#usericon{
  margin-left: 500px;
}
</style>

<script>
export default {
  name: 'Navigation'
}
</script>