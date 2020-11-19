function addCArgo() {
    var cargoId=document.getElementById("cargoId").value;
    var cargoName=document.getElementById("cargoName").value;
    var customerName=document.getElementById("customerName").value;

    //pre built function to upload data to firebase
    //path where your data will be stored

    if (cargoId=="") {
        alert("Please Provide Cargo Id");
    }else if (cargoName=="") {
        alert("Please Provide Cargo Name");
    }else if (customerName=="") {
        alert("Please Provide Customer Name");
    }else{
        alert("Upload Successful");
        window.location="dashboard.html";
    firebase.database().ref('Cargo/'+cargoId).set({
       TrackNo:cargoId,
        CustomerName:cargoName,
        CargoName:customerName
    });
}
}