<template>
    <div class="container">
        <h1 id="headings">Register</h1>
        <form id="form">
            <div class="mb-3">
                <label for="username">Username</label>
                <input type="text" class="form-control" id="usernameinput">
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            <div>Already registered click here to <router-link to="/login">Login</router-link></div>
        </form>
    </div>
</template>

<style>
#form{
    width:500px;
    text-align: center;
    height: 625px;
    margin-left: 400px;
    margin-top: 20px;
    margin-bottom: 20px;
    padding-top: 50px;
}

#usernameinput{
    width: 350px;
    margin-left: 65px;
}

#exampleInputEmail1{
    width: 350px;
    margin-left: 65px;
}

#exampleInputPassword1{
    width: 350px;
    margin-left: 65px;
}

@media only screen and (min-width:320px) and (max-width:321px) {
    #form{
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
    #form{
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
    #form{
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
    #form{
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
    #form{
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