<template>
<div class="container">
    <h1 id="headings">Login</h1>
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

<style scoped>
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

#headings{
    text-align: center;
}

@media only screen and (min-width:300px) and (max-width:301px) {
    #forml{
        margin-left: 0px;
        width: 300px;
    }
    #usernameinput{
    width: 280px;
    margin-left: 0px;
}
#exampleInputEmail1{
    width: 280px;
    margin-left: 0px;
}

#exampleInputPassword1{
    width: 280px;
    margin-left: 0px;
}
}

@media only screen and (min-width:320px) and (max-width:321px) {
    #forml{
        margin-left: 0px;
        width: 300px;
    }
    #usernameinput{
    width: 280px;
    margin-left: 0px;
}

#exampleInputEmail1{
    width: 280px;
    margin-left: 0px;
}

#exampleInputPassword1{
    width: 280px;
    margin-left: 0px;
}
}
@media only screen and (min-width:375px) and (max-width:376px) {
    #forml{
        margin-left: 30px;
        width: 300px;
    }
    #usernameinput{
    width: 280px;
    margin-left: 0px;
}

#exampleInputEmail1{
    width: 280px;
    margin-left: 0px;
}

#exampleInputPassword1{
    width: 280px;
    margin-left: 0px;
}
}
@media only screen and (min-width:425px) and (max-width:426px) {
    #forml{
        margin-left: 60px;
        width: 300px;
    }
    #usernameinput{
    width: 280px;
    margin-left: 0px;
}

#exampleInputEmail1{
    width: 280px;
    margin-left: 0px;
}

#exampleInputPassword1{
    width: 280px;
    margin-left: 0px;
}
}
@media only screen and (min-width:768px) and (max-width:769px) {
    #forml{
        margin-left: 200px;
        width: 300px;
    }
    #usernameinput{
    width: 280px;
    margin-left: 0px;
}

#exampleInputEmail1{
    width: 280px;
    margin-left: 0px;
}

#exampleInputPassword1{
    width: 280px;
    margin-left: 0px;
}
}
@media only screen and (min-width:1024px) and (max-width:1025px) {
    #forml{
        margin-left: 320px;
        width: 300px;
    }
    #usernameinput{
    width: 280px;
    margin-left: 0px;
}

#exampleInputEmail1{
    width: 280px;
    margin-left: 0px;
}

#exampleInputPassword1{
    width: 280px;
    margin-left: 0px;
}
}
</style>