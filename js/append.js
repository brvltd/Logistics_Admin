$(document).ready(function(){
    // home
    $("#home").click(function(){
      document.getElementById("mySidebar").style.width = "0";
      document.getElementById("main").style.marginLeft= "0";
      document.getElementById("open_btn").style.display="block";
      document.getElementById("open_btn").style.transition="all 0.3s ease";
      $("#cust").show();
      $("#cargo").show();
      $("#dashboardItems").hide();
    });

        // sign up
        $("#signUp").click(function(){
          document.getElementById("mySidebar").style.width = "0";
          document.getElementById("main").style.marginLeft= "0";
          document.getElementById("open_btn").style.display="block";
          document.getElementById("open_btn").style.transition="all 0.3s ease";
          $("#cust").hide();
          $("#cargo").hide();
          $("#dashboardItems").show();
          $("#dashboardItems").empty();
          $("#dashboardItems").append(
           "<center>"+
           "<form action='' enctype='multipart/form-data' method='post'>"+
           "<center>"+
           "<label><strong>Email:</strong></label><br>"+
           "<input  style='max-width:50%;' class='form-control' type='email' id='userEmail' name='email' required='required'><br><br>"+
           "</center>"+
           "<center>"+
           "<label><strong>Password:</strong></label><br>"+
           "<input style='max-width:50%;' class='form-control' type='password' id='userPassword' required='required'><br><br>"+
           "</center>"+
           "<center>"+
           "<label><strong>Confirm Password:</strong></label><br>"+
           "<input style='max-width:50%;' class='form-control' type='password' id='confirmPassword' required='required'><br><br>"+
           "</center>"+
           "<center>"+
           "<button style='width:50%;' class='btn btn-success' type='button' onclick='createUser();'><strong>Create</strong></button>"+
           "</center>"+
           "</form>"+
           "</center>"
           );
        });

        // add cargo info
        $("#addCargoInfo").click(function(){
          document.getElementById("mySidebar").style.width = "0";
          document.getElementById("main").style.marginLeft= "0";
          document.getElementById("open_btn").style.display="block";
          document.getElementById("open_btn").style.transition="all 0.3s ease";
          $("#cust").hide();
          $("#cargo").hide();
          $("#dashboardItems").show();
          $("#dashboardItems").empty();
          $("#dashboardItems").append(
            "<a href='javascript:void(0)' onclick='closeCustomer();' id='closeCustBtn' style=' position: absolute; text-decoration: none; right: 25px;  font-size: 36px;  margin-left: 50px;'>×</a>"+
            "<center>"+
            "<form action='' enctype='multipart/form-data' method='post'>"+
            "<center>"+
            "<h2><strong>Register Cargo</strong></h2>"+
            "<label><strong>Cargo Id</strong></label><br>"+
            "<input  style='max-width:50%;text-align: center;' class='form-control' type='text' id='cargoId' name='text' required='required'><br><br>"+
            "</center>"+
            "<center>"+
            "<label><strong>Cargo Name:</strong></label><br>"+
            "<input style='max-width:50%;text-align: center;' class='form-control' type='text' id='cargoName' required='required'><br><br>"+
            "</center>"+
            "<center>"+
            "<label><strong>Customer Name:</strong></label><br>"+
            "<input style='max-width:50%;text-align: center;' class='form-control' type='text' id='customerName' required='required'><br><br>"+
            "</center>"+
           // "<center>"+
           // "<label><strong>Location</strong></label><br>"+
           // "<input style='max-width:50%;text-align: center;' class='form-control' type='text' onclick='addLocation();' id='location' required='required'><br><br>"+
           // "</center>"+
           "<center>"+
           "<button style='width:50%;' class='btn btn-success' type='button' onclick='addCArgo();'><strong>Add</strong></button>"+
           "</center>"+
           "</form>"+
           "</center>"
           );
        });


         // add customer info
         $("#addCustInfo").click(function(){
          document.getElementById("mySidebar").style.width = "0";
          document.getElementById("main").style.marginLeft= "0";
          document.getElementById("open_btn").style.display="block";
          document.getElementById("open_btn").style.transition="all 0.3s ease";
          $("#cust").hide();
          $("#cargo").hide();
          $("#dashboardItems").show();
          $("#dashboardItems").empty();
          $("#dashboardItems").append(
            "<a href='javascript:void(0)' onclick='closeCustomer();' id='closeCustBtn' style=' position: absolute; text-decoration: none; right: 25px;  font-size: 36px;  margin-left: 50px;'>×</a>"+
            "<center>"+
            "<form action='' enctype='multipart/form-data' method='post'>"+
            "<center>"+
            "<h2><strong>Register Customer</strong></h2>"+
            "<label><strong>Phone Number</strong></label><br>"+
            "<input  style='max-width:50%;text-align: center;' class='form-control' type='text' id='phoneNumber' name='text' required='required'><br><br>"+
            "</center>"+
            "<center>"+
            "<label><strong>Customer Name:</strong></label><br>"+
            "<input style='max-width:50%;text-align: center;' class='form-control' type='text' id='custName' required='required'><br><br>"+
            "</center>"+
            "<center>"+
            "<label><strong>Email:</strong></label><br>"+
            "<input style='max-width:50%;text-align: center;' class='form-control' type='Email' id='email' required='required'><br><br>"+
            "</center>"+
            "<center>"+
            "<button style='width:50%;' class='btn btn-success' type='button' onclick='addCustomer();'><strong>Add</strong></button>"+
            "</center>"+
            "</form>"+
            "</center>"
            );
        });


        // edit cargo info
        // $("#editCargo").click(function(){
        //   alert("Received");
        //   document.getElementById("mySidebar").style.width = "0";
        //   document.getElementById("main").style.marginLeft= "0";
        //   document.getElementById("open_btn").style.display="block";
        //   document.getElementById("open_btn").style.transition="all 0.3s ease";
        //   $("#cust").hide();
        //   $("#cargo").hide();
        //   $("#dashboardItems").show();
        //   $("#dashboardItems").empty();
        //   $("#dashboardItems").append(
        //     "<a href='javascript:void(0)' onclick='closeCustomer();' id='closeCustBtn' style=' position: absolute; text-decoration: none; right: 25px;  font-size: 36px;  margin-left: 50px;'>×</a>"+
        //     "<center>"+
        //     "<form action='' enctype='multipart/form-data' method='post'>"+
        //     "<center>"+
        //     "<h2><strong>Edit Cargo</strong></h2>"+
        //     "<label><strong>Cargo Id</strong></label><br>"+
        //     "<input  style='max-width:50%;text-align: center;' class='form-control' type='text' id='cargoId' name='text' required='required'><br><br>"+
        //     "</center>"+
        //     "<center>"+
        //     "<label><strong>Cargo Name:</strong></label><br>"+
        //     "<input style='max-width:50%;text-align: center;' class='form-control' type='text' id='cargoName' required='required'><br><br>"+
        //     "</center>"+
        //     "<center>"+
        //     "<label><strong>Customer Name:</strong></label><br>"+
        //     "<input style='max-width:50%;text-align: center;' class='form-control' type='text' id='customerName' required='required'><br><br>"+
        //     "</center>"+
        //    // "<center>"+
        //    // "<label><strong>Location</strong></label><br>"+
        //    // "<input style='max-width:50%;text-align: center;' class='form-control' type='text' onclick='addLocation();' id='location' required='required'><br><br>"+
        //    // "</center>"+
        //    "<center>"+
        //    "<button style='width:50%;' class='btn btn-success' type='button' onclick='addCArgo();'><strong>Add</strong></button>"+
        //    "</center>"+
        //    "</form>"+
        //    "</center>"
        //    );
        // });

      });

function editCargo(){
  $(document).ready(function(){
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("open_btn").style.display="block";
    document.getElementById("open_btn").style.transition="all 0.3s ease";
    $("#cust").hide();
    $("#cargo").hide();
    $("#dashboardItems").show();
    $("#dashboardItems").empty();
    $("#dashboardItems").append(
      "<a href='javascript:void(0)' onclick='closeCustomer();' id='closeCustBtn' style=' position: absolute; text-decoration: none; right: 25px;  font-size: 36px;  margin-left: 50px;'>×</a>"+
      "<center>"+
      "<form action='' enctype='multipart/form-data' method='post'>"+
      "<center>"+
      "<h2><strong>Edit Cargo</strong></h2>"+
      "<label><strong>Cargo Id</strong></label><br>"+
      "<input  style='max-width:50%;text-align: center;' class='form-control' type='text' id='cargoId' name='text' required='required'><br><br>"+
      "</center>"+
      "<center>"+
      "<label><strong>Cargo Name:</strong></label><br>"+
      "<input style='max-width:50%;text-align: center;' class='form-control' type='text' id='cargoName' required='required'><br><br>"+
      "</center>"+
      "<center>"+
      "<label><strong>Customer Name:</strong></label><br>"+
      "<input style='max-width:50%;text-align: center;' class='form-control' type='text' id='customerName' required='required'><br><br>"+
      "</center>"+
           // "<center>"+
           // "<label><strong>Location</strong></label><br>"+
           // "<input style='max-width:50%;text-align: center;' class='form-control' type='text' onclick='addLocation();' id='location' required='required'><br><br>"+
           // "</center>"+
           "<center>"+
           "<button style='width:50%;' class='btn btn-success' type='button' onclick='addCArgo();'><strong>Add</strong></button>"+
           "</center>"+
           "</form>"+
           "</center>"
           );
  });
}

