function loginUser() {
    var email=document.getElementById("u_email").value;
    var password=document.getElementById("u_password").value;

    //firebase have pre built login function
    //it takes two parameters first email and second is password

    if (email==""){
        alert("Please Provide Email");
    }else if (password=="") {
        alert("Please Provide Password");
    }else{

    firebase.auth().signInWithEmailAndPassword(email,password).then(function () {
        //this function works when login successfully
        alert("Login Success");
        window.location="dashboard.html";
    }).catch(function (error) {
       //this will handle error
        var errorMessage=error.message;
        alert(errorMessage);
    });
}
}
