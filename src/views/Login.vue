<template>
<div class="container">
    <form id="forml">
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        <div>Not registered click here to go back to <router-link to="/register">Register</router-link></div>
    </form>
</div>
</template>

<style>
#forml{
    width:500px;
    text-align: center;
    height: 625px;
    margin-left: 400px;
    margin-top: 100px;
    padding-top: 50px;
}
#exampleInputEmail1{
    width: 350px;
    margin-left: 65px;
}

#exampleInputPassword1{
    width: 350px;
    margin-left: 65px;
}

</style>