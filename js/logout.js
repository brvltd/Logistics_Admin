function logout() {

    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        alert("Sign out successful");
        window.location="index.html";
    }).catch(function(error) {
        // An error happened.
         var errorMessage=error.message;
        alert(errorMessage);
    });
}