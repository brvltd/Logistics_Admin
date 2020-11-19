function addCustomer() {
    var phoneNumber=document.getElementById("phoneNumber").value;
    var custName=document.getElementById("custName").value;
    var email=document.getElementById("email").value;

    //pre built function to upload data to firebase
    //path where your data will be stored

    if (phoneNumber=="") {
        alert("Please Provide Cargo Id");
    }else if (custName=="") {
        alert("Please Provide Customer Name");
    }else if (email=="") {
        alert("Please Provide Customer Email");
    }else{
        alert("Upload Successful");
        window.location="dashboard.html";
        
        firebase.database().ref('Customers/'+phoneNumber).set({
         PhoneNumber:phoneNumber,
         CustomerName:custName,
         Email:email
     });
    }
}