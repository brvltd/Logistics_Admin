$(document).ready(function(){
	$("#signUp").click(function(){
		$("#dashboardItems").empty();
		$("#dashboardItems").append(
			"<center style='max-width:50%;'>"+
			"<form action='' enctype='multipart/form-data' method='post'>"+
			"<center>"+
			"<label><strong>Email:</strong></label><br>"+
			"<input class='form-control' type='email' id='userEmail' name='email' required='required'><br><br>"+
			"</center>"+
			"<center>"+
			"<label><strong>Password:</strong></label><br>"+
			"<input class='form-control' type='password' id='userPassword' required='required'><br><br>"+
			"</center>"+
			"<center>"+
			"<label><strong>Confirm Password::</strong></label><br>"+
			"<input class='form-control' type='password' id='confirmPassword' required='required'><br><br>"+
			"</center>"+
			"<center>"+
			"<button class='btn btn-success' type='button' onclick='createUser();'><strong>Create</strong></button>"+
			"</center>"+
			"</form>"+
			"</center>"
			);
	});
});

function createUser() {
    var email=document.getElementById("userEmail").value;
    var password=document.getElementById("userPassword").value;
    var confirmPassword=document.getElementById("confirmPassword").value;

    console.log(password);
    console.log(confirmPassword);
    //validate that both passwords are same
    if(password==confirmPassword)
    {
        //Here we will write create Account code
        //firebase has its own built in create account method
        //lets start
        //it takes two param first one email and second is password
        firebase.auth().createUserWithEmailAndPassword(email,password).then(
            function () {
                //this function executes when account is successfully created
                alert("Success");
                window.location="dashboard.html";

        }).catch(function (error) {
           //this function handles errors
            var errorMessage=error.message;
            alert(errorMessage);
        });

    }
    else
    {
        //alert when password did not matches
        alert("password does not matches");

    }

}