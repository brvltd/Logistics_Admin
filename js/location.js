function addLocation(){
	$(document).ready(function(){
		document.getElementById("mySidebar").style.width = "0";
		document.getElementById("main").style.marginLeft= "0";
		document.getElementById("open_btn").style.display="block";
		document.getElementById("open_btn").style.transition="all 0.3s ease";
		$("#cust").hide();
		$("#cargo").hide();
		$("#map").show();
		// $("#dashboardItems").empty();
		// $("#dashboardItems").append(
		// 	"<a href='javascript:void(0)' onclick='closeCustomer();' id='closeCustBtn' style=' position: absolute; text-decoration: none; right: 25px;  font-size: 36px;  margin-left: 50px;'>×</a>"+
		// 	"<div id='map' style'position:absolute; top:0; bottom:0; width:100%;'>"+
		// 	"</div>"
		// 	);
		// showMap();
	});

}

// function showMap(){
// 	alert("shows");
// 	L.mapbox.accessToken = 'pk.eyJ1IjoiYnJhdmllIiwiYSI6ImNraHExOTZ0eTBwM3UydHA1OWU2dmQ5ZWUifQ.AcOp3lMWndW5zMuiEqSybQ';
// 	var map = L.mapbox.map('map')
// 	.setView([43.945, 19.380], 5)
// 	.addLayer(L.mapbox.styleLayer('mapbox://styles/mapbox/streets-v11'))
// 	.addControl(L.mapbox.geocoderControl('mapbox.places', {
// 		keepOpen: true
// 	}));
// }